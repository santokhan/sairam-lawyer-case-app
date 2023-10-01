import { Link, useLocation } from "react-router-dom"
import Logo from "../Logo"
import Styles from './SideBar.module.css'
import Navs from "../../lib/sidebar/Navs"
import Icons from "./SidebarIcons"

export const Active = () => (<div className={[Styles.activeNav].join(" ")}></div>)

const SideBar = () => {
    const location = useLocation()

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
                        <li key={i + "A"}>
                            <Link
                                to={e.path}
                                className={["flex items-center px-5 py-2 rounded-lg hover:bg-gray-100 group relative", location.pathname === e.path ? "text-primary" : "text-secondary"].join(" ")}
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
    )
}
export default SideBar