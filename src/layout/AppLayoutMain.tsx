import SideBar from "../components/sidebar/SideBar"
import TopBar from "../components/topbar/TopBar"

export default function AppLayoutMain(props: any) {
    return (
        // 18rem_1fr_24rem
        <div className="p-4 bg-gray-100 lg:grid gap-4 grid-cols-[16rem_1fr] border">
            <div className="relative">
                <SideBar />
            </div>
            <main className="w-full space-y-4">
                <TopBar />
                {/* Comment out {props.children} to focus on layout only*/}
                {props.children}
            </main>
        </div>
    )
}
