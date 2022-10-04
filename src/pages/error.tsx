import { useRouteError } from "react-router-dom";

import './static.css';

export const ErrorPage = () => {
    const error: any = useRouteError();

    return (
        <div className="fullscreen">
            <div className="error-box">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p> <i>{error.statusText || error.message}</i> </p>
            </div>
        </div>
    );
}