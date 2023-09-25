import NewsFeedTop from "./NewsFeedTop"
import picture from '../../../assets/images/profile.png'
import { Location } from "iconsax-react"
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid"
import { BookmarkIcon, ShareIcon, InboxIcon } from "@heroicons/react/24/outline"
import { Message, Share, Heart } from 'iconsax-react';

export const FeedItem = () => (
    <div className="p-4 bg-white text-gray-500 rounded-xl space-y-6">
        <div className="flex justify-between items-center">
            <figure className="flex gap-3 items-center">
                <img src={picture} alt="profile" className="w-12 h-12 rounded-full" />
                <figcaption className="">
                    <h5 className="font-medium">Case of Hit & Run</h5>
                    <p className="text-sm">By Susan</p>
                </figcaption>
            </figure>
            <button type="button" className='text-gray-500 hover:text-primary'><EllipsisHorizontalIcon className="w-8" /></button>
        </div>
        <div className="space-y-4">
            <p className="text-lg">
                On May 29. 2023, at approximately 1:00 PM, I was walking on the footpath of a street in India when I was hit by motorcycle. The see more
            </p>
        </div>
        <figure className="bg-gray-100">
            <img src="" alt="post" className="w-full aspect-[16/9]" />
        </figure>
        <div className="flex justify-around">
            <button type="button" className="flex items-center gap-2"><Heart className="w-6 h-6" /></button>
            <button type="button" className="flex items-center gap-2"><Message className="w-6 h-6" /></button>
            <button type="button" className="flex items-center gap-2"><ShareIcon className="w-6 h-6" /></button>
            <button type="button" className="flex items-center gap-2"><BookmarkIcon className="w-6 h-6" /></button>
        </div>
    </div>
)

const NewsFeed = () => {
    const Tags = [
        { name: "Attempt to murder" },
        { name: "Traffic Law" },
        { name: "Criminal Law" },
    ]

    return (
        <div className="space-y-4">
            <NewsFeedTop />
            <div className="p-4 bg-primary text-white rounded-xl space-y-6">
                <div className="flex justify-between items-center">
                    <figure className="flex gap-3 items-center">
                        <img src={picture} alt="profile" className="w-12 h-12 rounded-full" />
                        <figcaption className="text-white">
                            <h5 className="font-medium">Case of Hit & Run</h5>
                            <p className="text-sm">By Susan</p>
                        </figcaption>
                    </figure>
                    <button type="button" className="border border-white text-white font-medium px-4 py-1.5 rounded-full text-sm hover:bg-white hover:text-primary">Click to apply</button>
                </div>
                <div className="space-y-4">
                    <p className="text-lg text-gray-100">
                        On May 29. 2023, at approximately 1:00 PM, I was walking on the footpath of a street in India when I was hit by motorcycle. The see more
                    </p>
                    <div className="flex items-center gap-3">
                        {Tags.map((e, i) => (
                            <button key={i} type="button" className="bg-white text-primary px-2 py-0.25 font-medium rounded-full flex items-center gap-0.5"><span className="text-lg font-bold">#</span>{e.name}</button>
                        ))}
                    </div>
                </div>
                <h4 className="text-xl font-semibold">8 more applicants</h4>
                <div className="space-y-2 text-gray-100">
                    <div className="flex items-center gap-2">
                        <Location className="w-6 h-6" />Visakhapattanam
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.2001 7.7998L12.5 15.4998L8.50005 11.4998L2.80005 17.1998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 7H21V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        80% Match to your specialization
                    </div>
                </div>
            </div>
            {[0, 1, 2, 3, 4, 5, 6].map((e, i) => <FeedItem key={i} />)}
        </div>
    )
}

export default NewsFeed