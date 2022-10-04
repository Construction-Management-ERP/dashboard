import { BlankLayout } from "../../layouts/blankLayout";
import { ErrorPage } from "../../pages/error";
import { Login } from "./login";

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
    }
];