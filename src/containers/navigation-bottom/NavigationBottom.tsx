import { Link, useLocation } from "react-router-dom"
import Styles from './SideBar.module.css'
import Library from "../../components/icons/library"
import Home from "../../components/icons/home"
import Case from "../../components/icons/case"
import Legal from "../../components/icons/search"
import Settings from "../../components/icons/settings"
import Navs from "../../lib/sidebar/Navs"

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
        <aside
            className="fixed bottom-0 h-16 max-h-[4rem] w-full bg-white rounded-lg hidden lg:block"
        >
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