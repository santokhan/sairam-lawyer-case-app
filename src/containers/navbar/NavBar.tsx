import { Link, useLocation } from 'react-router-dom'
import NavBarIcon from './NavBarIcon'

const NavListMain = [
    {
        name: "News Feed",
        path: "news-feed",
        icon: <NavBarIcon.NewsFeed />
    },
    {
        name: "Find Laywers",
        path: "find-lawyers",
        icon: <NavBarIcon.FindLawyers />
    },
    {
        name: "Home",
        path: "",
        icon: <NavBarIcon.Home />
    },
    {
        name: "Connections",
        path: "connections",
        icon: <NavBarIcon.Connections />
    },
    {
        name: "Chats",
        path: "chats",
        icon: <NavBarIcon.Chats />
    },
]

export default function NavbarMain(props: any) {
    function get_path(): string {
        const location = useLocation()
        const path = location.pathname.split("/")[1] // output ["", "settings"]
        return path
    }

    return (
        <div className="flex items-center overflow-x-auto p-2">
            {NavListMain.map((e: any, i: number) =>
                <Link to={e.path} type="button" key={i} className={[
                    get_path() === e.path ? "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50" : "hover:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
                    "focus:ring-4 focus:outline-none focus:ring-blue-300", "flex items-center gap-2",
                    "font-medium rounded-full text-sm px-8 py-2 text-center mr-2 mb-2 whitespace-nowrap",
                ].join(" ")}>
                    {e.icon}{e.name}
                </Link>
            )}
        </div>
    )
}