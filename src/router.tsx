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
import LegalResearch from "./pages/LegalResearch";
import SearchLaw from "./pages/SearchLaw";
import SearchDictionary from "./pages/SearchDictionary";
import SearchJudgements from "./pages/SearchJudgements";
import DocumentWriter from "./pages/DocumentWriter";
import LegalOpinion from "./pages/LegalOpinion";
import DocumentChat from "./pages/DocumentChat";
import Results from "./pages/search-law/Results";

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

            {
                path: "case-management",
                element: <CaseManagement />,
            },
            {
                path: "legal-research",
                element: <LegalResearch />,
                children: [
                    {
                        path: "",
                        element: <Results />,
                    }
                ]
            },
            {
                path: "search-law",
                element: <SearchLaw />,
                children: [
                    {
                        path: "",
                        element: <Results />,
                    }
                ]
            },
            {
                path: "search-dictionary",
                element: <SearchDictionary />,
                children: [
                    {
                        path: "",
                        element: <Results />,
                    }
                ]
            },
            {
                path: "search-judgements",
                element: <SearchJudgements />,
                children: [
                    {
                        path: "",
                        element: <Results />,
                    }
                ]
            },
            {
                path: "document-analytics",
                element: <DocumentWriter />,
                children: [
                    {
                        path: "",
                        element: <Results />,
                    }
                ]
            },
            {
                path: "document-writer",
                element: <DocumentWriter />,
                children: [
                    {
                        path: "",
                        element: <Results />,
                    }
                ]
            },
            {
                path: "legal-opinion",
                element: <LegalOpinion />,
                children: [
                    {
                        path: "",
                        element: <Results />,
                    }
                ]
            },
            {
                path: "document-chat",
                element: <DocumentChat />,
                children: [
                    {
                        path: "",
                        element: <Results />,
                    }
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
    {
        path: "law-library",
        element: <LawLibrary />,
    },
    {
        path: "legal-search",
        element: <Legal />,
    },
]);

export default router