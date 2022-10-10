import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import defaultLogo from '../../assets/images/default-logo.png';


export const Login = () => {
    const [checked,setChecked1] = useState(false);

    return(
       
        <div className="m-auto static surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
            <Avatar 
                image={defaultLogo}
                size="large"
                shape="circle"
            />
                <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
            </div>

            <div>
                <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                <InputText type="text" className="w-full mb-3" />

                <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                <InputText type="password" className="w-full mb-3" />

                <div className="flex align-items-center justify-content-between mb-6">
                    <div className="flex align-items-center">
                        <Checkbox id="rememberme" className="mr-2" checked={checked} onChange={(e) => setChecked1(e.checked)} />
                        <label htmlFor="rememberme">Remember me</label>
                    </div>
                    <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                </div>

                <Button label="Sign In" icon="pi pi-user" className="w-full" />
            </div>
        </div>
            
            
    )
}