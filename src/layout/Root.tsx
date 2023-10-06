import { Outlet } from "react-router-dom"
import GlobalSideBar from "../components/sidebar/SideBar"
import GlobalTopBar from "../components/topbar/TopBar"

export default function Root(props: any) {
    return (
        // 18rem_1fr_24rem
        <div className="p-4 bg-gray-100 lg:grid gap-4 grid-cols-[16rem_1fr]">
            <div className="relative">
                <GlobalSideBar />
            </div>
            <main className="w-full space-y-4">
                <GlobalTopBar />
                {/* Comment out {props.children} to focus on layout only*/}
                <Outlet />
            </main>
        </div>
    )
}
