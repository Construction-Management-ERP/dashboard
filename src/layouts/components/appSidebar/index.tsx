import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar, openSidebar } from '../../redux/sidebarSlice';
import { Sidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { AppSidebarMenu } from './appSidebarMenu';
import defaultProfile from '../../../assets/images/default-profile.jpg';
import './style.css';

export const AppSidebar = () => {

    const state = useSelector((state: any) => state.sidebar);
    const dispatch = useDispatch();

    const [visible ,setVisible] = useState(false);

    useEffect(() => {
        setVisible(state.isOpenSlidebar);
    }, [state.isOpenSlidebar]);

    return(
        <>
            <Sidebar 
                id='app-sidebar'
                visible={visible} 
                onHide={() => visible ? dispatch(closeSidebar()) : dispatch(openSidebar())}
                showCloseIcon={true}
                icons={() => (
                    <React.Fragment>
                        <div className='app-sidebar-header'>
                            <Avatar
                                className='app-sidebar-logo'
                                image={defaultProfile}
                                size="xlarge"
                                shape='square'
                            >
                                <Badge 
                                    className='noti'
                                    value="4" 
                                    severity="danger" 
                                />
                            </Avatar>
                            <div className='app-sidebar-title'>
                                <h4 className=''> Aung Htet Paing </h4>
                                <span> Administrator </span>
                            </div>
                        </div>
                    </React.Fragment>
                )}>
                <AppSidebarMenu />
            </Sidebar>
        </>
    )
}