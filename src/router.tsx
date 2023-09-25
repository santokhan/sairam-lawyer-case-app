import { createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        element: <Home />,
        path: "/law-library"
    },
    {
        element: <Home />,
        path: "/case-management"
    },
    {
        element: <Home />,
        path: "/leagal-search"
    },
    {
        element: <Home />,
        path: "/settings"
    },
]);

export default router