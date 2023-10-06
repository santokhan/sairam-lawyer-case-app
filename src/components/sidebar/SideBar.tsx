import { Link, NavLink, useLocation } from "react-router-dom"
import Logo from "../Logo"
import Styles from './SideBar.module.css'
import Navs from "../../lib/sidebar/Navs"
import Icons from "./SidebarIcons"

export const Active = (props: any) => {
    return (<div className={[Styles.activeNav].join(" ")}>{props.className}</div>)
}

const GlobalSideBar = () => {
    const location = useLocation()
    const active = (path: string): boolean => {
        // It will check the first path only path[0]
        // '' === '' means home
        // 'settings' === 'settings'
        const pathname = location.pathname.split("/")[1] // output ["", "settings"]
        return pathname === path
    }

    return (
        <aside
            className="fixed min-w-[16rem] w-[16rem] h- [calc(100vh_-_2rem)] bg-white rounded-lg hidden lg:block">
            <div className="flex justify-center items-center py-12">
                <div className="w-44" >
                    <Logo />
                </div>
            </div>
            <div className="h-full px-2 py-4 overflow-y-auto">
                <ul className="space-y-4 font-medium">
                    {Navs.map((e, i) => (
                        <li key={i + "A"} >
                            <NavLink
                                to={`${e.path}`}
                                className={[
                                    "flex items-center px-5 py-2 rounded-lg hover:bg-gray-100 group relative",
                                    active(e.path) ? "text-primary" : "text-secondary"
                                ].join(" ")}
                            >
                                {active(e.path) && <Active />}
                                <Icons path={e.path} />
                                <span className="ml-3">{e.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}
export default GlobalSideBar