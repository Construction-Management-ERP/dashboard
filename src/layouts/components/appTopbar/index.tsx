import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar, openSidebar } from '../../redux/sidebarSlice';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Props } from './propsType';
import defaultLogo from '../../../assets/images/default-logo.png';
import './style.css';

export const AppTopbar = ({logo, title}: Props) => {
    
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state.sidebar);

    const [visable, setVisible] = useState(false);

    useEffect(() => {
        setVisible(state.isOpenSlidebar);
    },[state.isOpenSlidebar]);

    const leftContents = (
        <React.Fragment>
            <Avatar 
                image={logo ? logo : defaultLogo}
                size="large"
                shape="circle"
            />
            { title && <span className='topbar-title'> {title} </span>}
            <Button 
                className='p-button p-component p-button-rounded p-button-secondary p-button-text p-button-icon-only'
                icon="pi pi-bars p-toolbar-separator" 
                onClick={() => visable ? dispatch(closeSidebar()) : dispatch(openSidebar()) }
            />
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            <Button
                className="p-button p-component p-button p-component p-button-rounded p-button-secondary p-button-text p-button-icon-only p-button-icon-only" 
                icon="pi pi-user"
            />
            <Button
                className="p-button p-component p-button p-component p-button-rounded p-button-secondary p-button-text p-button-icon-only p-button-icon-only" 
                icon="pi pi-cog"
            />

            <Button
                className="p-button p-component p-button p-component p-button-rounded p-button-secondary p-button-text p-button-icon-only p-button-icon-only" 
                icon="pi pi-power-off"
            />
        </React.Fragment>
    );
    
    return(
        <>
            <Toolbar
                left={leftContents}
                right={rightContents}
            />
        </>
    )
}