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
import OTP from "./pages/user/OTP";
import UserRoot from "./pages/user/UserRoot";
import NewsFeed from "./pages/NewsFeed";
import FindLawyers from "./pages/FindLawyers";
import Connections from "./pages/Connections";
import Chats from "./pages/Chats";

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
                path: "news-feed",
                element: <NewsFeed />
            },
            {
                path: "find-lawyers",
                element: <FindLawyers />
            },
            {
                path: "connections",
                element: <Connections />
            },
            // {
            //     path: "chats",
            //     element: <Chats />
            // },
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
        path: "user",
        element: <UserRoot />,
        children: [
            {
                path: "otp",
                element: <OTP />,
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "logout",
                element: <Logout />
            },
        ]
    },
]);

export default router