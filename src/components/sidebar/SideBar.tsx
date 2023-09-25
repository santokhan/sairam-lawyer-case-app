import { Link, useLocation } from "react-router-dom"
import Logo from "../Logo"
import Home from "../icons/home"
import Library from "../icons/library"
import Case from "../icons/case"
import Legal from "../icons/search"
import Settings from "../icons/settings"
import Styles from './SideBar.module.css'

export const Navs = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Law Library",
        path: "/law-library"
    },
    {
        name: "Case Management",
        path: "/case-management"
    },
    {
        name: "Legal Search Modules",
        path: "/leagal-search"
    },
    {
        name: "Settings",
        path: "/settings"
    },
]

export const Icons = (props: any) => {
    switch (props.path) {
        case Navs[0].path:
            return <Home className="w-6" />;

        case Navs[1].path:
            return <Library className="w-6" />;

        case Navs[2].path:
            return <Case className="w-6" />;

        case Navs[3].path:
            return <Legal className="w-6" />;

        case Navs[4].path:
            return <Settings className="w-6" />;

        default:
            return <></>;
    }
}

export const Active = () => (<div className={[Styles.activeNav].join(" ")}></div>)

const SideBar = () => {
    const location = useLocation()

    return (
        <>
            <button
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-xl sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>
            <aside
                className="relative min-w-[16rem] w-[16rem] h-[calc(100vh_-_2rem)] bg-white rounded-lg"
            >
                <div className="flex justify-center items-center py-12">
                    <div className="w-44" >
                        <Logo />
                    </div>
                </div>
                <div className="h-full px-2 py-4 overflow-y-auto">
                    <ul className="space-y-4 font-medium">
                        {Navs.map((e, i) => (
                            <li key={i + "A"}>
                                <Link
                                    to={e.path}
                                    className={["flex items-center px-5 py-2  rounded-lg hover:bg-gray-100 group relative", location.pathname === e.path ? "text-primary" : "text-gray-500"].join(" ")}

                                >
                                    {location.pathname === e.path && <Active />}
                                    <Icons path={e.path} />
                                    <span className="ml-3">{e.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    )
}
export default SideBar