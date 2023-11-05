import Post from "../components/home/post/Post"
import NewsFeed from "../components/home/news-feed/NewsFeed"
import RightBar from "../containers/right-bar/RightBar"
import AppContainer from "../components/AppContainer"

const HomePage = () => {
    return (
        <div className="py-4">
            <AppContainer>
                <div className="flex gap-4">
                    <div className="w-full space-y-4">
                        <Post />
                        <NewsFeed />
                    </div>
                </div>
                <div className="relative">
                    <RightBar />
                </div>
            </AppContainer>
        </div>
    )
}

export default HomePage