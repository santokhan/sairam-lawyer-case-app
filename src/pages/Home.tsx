import SideBar from "../components/sidebar/SideBar"
import TopBar from "../components/topbar/TopBar"
import Post from "../components/home/post/Post"
import NewsFeed from "../components/home/news-feed/NewsFeed"
import RightBar from "../containers/right-bar/RightBar"

const HomePage = () => {
    return (
        // 18rem_1fr_24rem
        <div className="p-4 bg-gray-100 lg:grid gap-4 grid-cols-[16rem_1fr] border">
            <div className="relative">
                <SideBar />
            </div>
            <main className="w-full space-y-4">
                <TopBar />
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-[1fr_32rem]">
                    <div className="flex gap-4">
                        <div className="w-full space-y-4">
                            <Post />
                            <NewsFeed />
                        </div>
                    </div>
                    <div className="relative">
                        <RightBar />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage