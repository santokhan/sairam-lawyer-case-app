import { Outlet } from "react-router-dom"
import GlobalTopBar from "../components/topbar/TopBar"

export default function Root(props: any) {
    return (
        <>
            <GlobalTopBar />
            <main className="w-full space-y-4">
                {/* Comment out {props.children} to focus on layout only*/}
                <Outlet />
            </main>
        </>
    )
}
