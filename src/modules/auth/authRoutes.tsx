import { BlankLayout } from "../../layouts/blankLayout";
import { ErrorPage } from "../../pages/error";
import { Login } from "./login";
import { Forgotpsw } from "./forgotpsw";
import { Getopt } from "./getopt";
import { Changepsw } from "./changepsw";

export const authRoutes = [
    {
        path: 'auth',
        element: <BlankLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]

    }, 

    {
        path: 'auth',
        element: <BlankLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'forgotpsw',
                element: <Forgotpsw />
            }
        ]
    }, 

    {
        path: 'auth',
        element: <BlankLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'getopt',
                element: <Getopt />
            }
        ]
    }, 

    {
        path: 'auth',
        element: <BlankLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'changepsw',
                element: <Changepsw />
            }
        ]
    }
];