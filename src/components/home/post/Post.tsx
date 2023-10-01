import profile from '../../../assets/images/profile.png'
import { VideoCameraIcon, PhotoIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

const Post = () => (
    <form className='bg-white rounded-xl'>
        <div className="w-full">
            <div className="p-4 flex items-start gap-4">
                <button type="button" className="rounded-full hover:ring"><img src={profile} alt="profile" className="w-16" /></button>
                <textarea name="" id="" rows={1} placeholder="What you want to talk about?" className="w-full bg-transparent border rounded-xl px-4 py-2 text-base lg:text-lg"></textarea>
                <button type="button" className='h-8 w-8 text-secondary hover:text-primary flex justify-center items-center mt-2'><EllipsisHorizontalIcon className="w-8" /></button>
            </div>
            <div className="px-4">
                <div className="flex justify-around border-t py-4">
                    <button type="button" className="flex items-center gap-2 text-secondary hover:text-primary">
                        <VideoCameraIcon className="w-5 lg:w-7" /><span className="font-semibold">Video</span>
                    </button>
                    <button type="button" className="flex items-center gap-2 text-secondary hover:text-primary">
                        <PhotoIcon className="w-5 lg:w-7" /><span className="font-semibold">Image</span>
                    </button>
                    <button type="button" className="flex items-center gap-2 text-secondary hover:text-primary">
                        <FaceSmileIcon className="w-5 lg:w-7" /><span className="font-semibold">Feelings</span>
                    </button>
                </div>
            </div>
        </div>
    </form>
)

export default Post