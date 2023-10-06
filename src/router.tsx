import { createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import Root from "./layout/Root";
import Empty from "./pages/Empty";

import DeleteAccount from "./pages/settings/DeleteAccount";
import History from "./pages/settings/History";
import Language from "./pages/settings/Language";
import LegalPreferences from "./pages/settings/LegalPreferences";
import Notifications from "./pages/settings/Notifications";
import PrivacyAndSecurity from "./pages/settings/PrivacyAndSecurity";
import Subscription from "./pages/settings/Subscription";
import Logout from "./pages/Logout";
import LawLibrary from "./pages/Law";
import Legal from "./pages/Legal";
import CaseManagement from "./pages/CaseManagement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "law-library",
                element: <LawLibrary />,
            },
            {
                path: "case-management",
                element: <CaseManagement />,
            },
            {
                path: "leagal-search",
                element: <Legal />,
            },
            {
                path: "settings",
                element: <Settings />,
                children: [
                    {
                        index: true,
                        element: <Subscription />,
                    },
                    {
                        path: "notifications",
                        element: <Notifications />,
                    },
                    {
                        path: "language",
                        element: <Language />,
                    },
                    {
                        path: "subscription",
                        element: <Subscription />,
                    },
                    {
                        path: "legal-preferences",
                        element: <LegalPreferences />,
                    },
                    {
                        path: "privacy-and-security",
                        element: <PrivacyAndSecurity />,
                    },
                    {
                        path: "history",
                        element: <History />,
                    },
                    {
                        path: "delete-account",
                        element: <DeleteAccount />,
                    },
                ]
            },
        ]
    },
    {
        path: "signup",
        element: <SignUp />
    },
    {
        path: "logout",
        element: <Logout />
    },
]);

export default router