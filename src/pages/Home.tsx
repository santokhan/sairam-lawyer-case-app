import { useNavigate } from "react-router-dom"
import SideBar from "../components/sidebar/SideBar"
import TopBar from "../components/topbar/TopBar"
import Post from "../components/home/post/Post"
import NewsFeed from "../components/home/news-feed/NewsFeed"

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="p-4 bg-gray-100 flex gap-4">
            <SideBar />
            <main className="w-full space-y-4">
                <TopBar />
                <div className="flex gap-4">
                    <div className="w-full space-y-4">
                        <Post />
                        <NewsFeed />
                    </div>
                    <div className="w-full">
                        <Post />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage