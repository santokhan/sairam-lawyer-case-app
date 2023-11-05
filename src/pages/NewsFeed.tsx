import Post from "../components/home/post/Post"
import NewsFeed from "../components/home/news-feed/NewsFeed"
import RightBar from "../containers/right-bar/RightBar"
import AppContainer from "../components/AppContainer"

const HomePage = () => {
    return (
        <AppContainer>
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-[1fr_28rem] py-4">
                <div className="flex gap-4">
                    <div className="w-full space-y-4">
                        {/* <Post /> */}
                        <NewsFeed />
                    </div>
                </div>
                <div className="relative">
                    <RightBar />
                </div>
            </div>
        </AppContainer>
    )
}

export default HomePage