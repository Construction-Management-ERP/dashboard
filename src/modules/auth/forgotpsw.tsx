
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';


export const Forgotpsw = () => {

    return(
       
        <div className="m-auto static surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
                <img src="default-logo.jpg" alt="logo" height={5} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">Forgot Your Password?</div>
                <span className="text-600 font-medium line-height-3">Please Confirm Email Address</span>
            </div>

            <div>
                <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                <InputText type="text" className="w-full mb-3" />

                <div className="flex align-items-center justify-content-between mb-6">
                  <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Or login again</a>
                </div>

                <Button label="Get OTP Code" icon="pi pi-user" className="w-full" />
            </div>
        </div>
            
            
    )
}