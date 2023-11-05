import NewsFeedTop from "./NewsFeedTop"
import picture from '../../../assets/images/profile.png'
import { Location } from "iconsax-react"
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid"
import { BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline"
import { Message, Heart } from 'iconsax-react';

export const info = {
    nameOfCase: "Case of Hit & Run",
    client: "Susan",
    desc: "On May 29. 2023, at approximately 1:00 PM, I was walking on the footpath of a street in India when I was hit by motorcycle",
}

export const LikeIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 9H15V4.5C14.9994 3.90345 14.7622 3.3315 14.3403 2.90967C13.9185 2.48784 13.3466 2.2506 12.75 2.25H11.1502C10.7896 2.25153 10.4415 2.3823 10.169 2.61857C9.89655 2.85484 9.71782 3.18096 9.66525 3.53775L9.0315 7.9755L6.34875 12H1.5V22.5H17.25C18.6419 22.4984 19.9763 21.9448 20.9606 20.9606C21.9448 19.9763 22.4984 18.6419 22.5 17.25V12C22.499 11.2047 22.1826 10.4422 21.6202 9.87978C21.0578 9.31738 20.2953 9.00099 19.5 9ZM6 21H3V13.5H6V21ZM21 17.25C20.9988 18.2442 20.6033 19.1973 19.9003 19.9003C19.1973 20.6033 18.2442 20.9988 17.25 21H7.5V12.9772L10.4685 8.5245L11.151 3.75H12.75C12.9489 3.75 13.1397 3.82902 13.2803 3.96967C13.421 4.11032 13.5 4.30109 13.5 4.5V10.5H19.5C19.8977 10.5004 20.279 10.6586 20.5602 10.9398C20.8414 11.221 20.9996 11.6023 21 12V17.25Z" fill="currentColor" />
    </svg>
)

export const FeedItem = () => {
    return (
        <div className="p-4 bg-white text-gray-700 rounded-xl space-y-4">
            <div className="flex justify-between items-center">
                <figure className="flex gap-3 items-center">
                    <img src={picture} alt="profile" className="w-12 h-12 rounded-full" />
                    <div className="">
                        <h5 className="text-base font-semibold">{info.nameOfCase}</h5>
                        <p className="text-sm">By {info.client}</p>
                    </div>
                </figure>
                <button type="button" className='text-gray-700 hover:text-primary'><EllipsisHorizontalIcon className="w-8" /></button>
            </div>
            <figure className="bg-gray-100">
                <img src="https://source.unsplash.com/random/1920x1080" alt="post" className="w-full aspect-[2/1] rounded-xl" />
            </figure>
            <div className="space-y-4">
                <p className="text-base">{info.desc}</p>
            </div>
            <div className="flex justify-between items-center">
                <button className="flex items-center gap-1.5 text-gray-600"><svg className="w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 10H4.375V18.75H1.25V10ZM14.375 18.75H5.625V9.49812L7.52625 6.64625L8.05438 2.94813C8.09818 2.6508 8.24713 2.37904 8.47418 2.18214C8.70123 1.98525 8.99134 1.87628 9.29187 1.875H9.375C9.87213 1.8755 10.3488 2.0732 10.7003 2.42472C11.0518 2.77625 11.2495 3.25287 11.25 3.75V7.5H16.25C16.9128 7.50083 17.5482 7.76448 18.0169 8.23315C18.4855 8.70181 18.7492 9.33721 18.75 10V14.375C18.7487 15.5349 18.2873 16.6469 17.4671 17.4671C16.6469 18.2873 15.5349 18.7487 14.375 18.75Z" fill="#147BF5" />
                </svg>Sukumar, Naveen and 125 others</button>
                <button className="flex items-center gap-1.5 text-gray-600"><svg className="w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00008 0.5C6.6989 0.499562 5.41998 0.837656 4.289 1.48106C3.15802 2.12446 2.21388 3.05104 1.54937 4.16975C0.88485 5.28846 0.522814 6.5608 0.498833 7.86177C0.474851 9.16274 0.789749 10.4476 1.41258 11.59L0.525084 14.7025C0.493855 14.8118 0.493023 14.9275 0.522677 15.0373C0.552332 15.147 0.611349 15.2466 0.693378 15.3252C0.775407 15.4039 0.877341 15.4588 0.988209 15.4838C1.09908 15.5089 1.21468 15.5032 1.32258 15.4675L4.24508 14.4937C5.24116 15.0693 6.3563 15.4081 7.50423 15.4838C8.65216 15.5594 9.80211 15.37 10.8651 14.9302C11.9281 14.4903 12.8757 13.8118 13.6346 12.9472C14.3934 12.0825 14.9432 11.0549 15.2413 9.94374C15.5395 8.83263 15.578 7.66782 15.354 6.53942C15.1299 5.41102 14.6493 4.34929 13.9493 3.43635C13.2493 2.52342 12.3486 1.78375 11.317 1.27458C10.2854 0.765414 9.15051 0.500385 8.00008 0.5ZM5.50008 6.75C5.50008 6.58424 5.56593 6.42527 5.68314 6.30806C5.80035 6.19085 5.95932 6.125 6.12508 6.125H9.87508C10.0408 6.125 10.1998 6.19085 10.317 6.30806C10.4342 6.42527 10.5001 6.58424 10.5001 6.75C10.5001 6.91576 10.4342 7.07473 10.317 7.19194C10.1998 7.30915 10.0408 7.375 9.87508 7.375H6.12508C5.95932 7.375 5.80035 7.30915 5.68314 7.19194C5.56593 7.07473 5.50008 6.91576 5.50008 6.75ZM6.12508 8.625H8.62508C8.79084 8.625 8.94982 8.69085 9.06703 8.80806C9.18424 8.92527 9.25008 9.08424 9.25008 9.25C9.25008 9.41576 9.18424 9.57473 9.06703 9.69194C8.94982 9.80915 8.79084 9.875 8.62508 9.875H6.12508C5.95932 9.875 5.80035 9.80915 5.68314 9.69194C5.56593 9.57473 5.50008 9.41576 5.50008 9.25C5.50008 9.08424 5.56593 8.92527 5.68314 8.80806C5.80035 8.69085 5.95932 8.625 6.12508 8.625Z" fill="#147BF5" />
                </svg>66 Comments</button>
            </div>
            <hr />
            <div className="flex justify-around">
                <button type="button" className="flex items-center gap-2 text-base hover:text-primary"><LikeIcon />Like</button>
                <button type="button" className="flex items-center gap-2 hover:text-primary"><Message className="w-6 h-6" />Comments</button>
                <button type="button" className="flex items-center gap-2 hover:text-primary"><ShareIcon className="w-6 h-6" />Send</button>
                <button type="button" className="flex items-center gap-2 hover:text-primary"><BookmarkIcon className="w-6 h-6" />Save</button>
            </div>
        </div>
    )
}

export function NewsFeedBlueBox() {
    const Tags = [
        { name: "Attempt to murder" },
        { name: "Traffic Law" },
        { name: "Criminal Law" },
    ]

    return (
        <div className="p-4 bg-primary text-white rounded-xl space-y-6">
            <div className="flex justify-between items-center">
                <figure className="flex gap-3 items-center">
                    <img src={picture} alt="profile" className="w-12 h-12 rounded-full" />
                    <figcaption className="text-white">
                        <h5 className="text-base font-semibold">{info.nameOfCase}</h5>
                        <p className="text-sm font-medium">By {info.client}</p>
                    </figcaption>
                </figure>
                <button type="button" className="border border-white text-white font-medium px-4 py-1.5 rounded-full text-sm hover:bg-white hover:text-primary">Click to apply</button>
            </div>
            <div className="space-y-4">
                <p className="lg:text-lg text-gray-100">{info.desc}</p>
                <div className="flex flex-wrap items-center gap-3">
                    {Tags.map((e, i) => (
                        <button key={i} type="button" className="bg-white text-primary px-2 py-0.25 font-medium rounded-full flex items-center gap-0.5"><span className="text-lg font-bold">#</span>{e.name}</button>
                    ))}
                </div>
            </div>
            <h4 className="text-lg lg:text-xl font-semibold">8 more applicants</h4>
            <div className="space-y-2 text-gray-100">
                <div className="flex items-center gap-2">
                    <Location className="w-6 h-6" />Visakhapattanam
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20.2001 7.7998L12.5 15.4998L8.50005 11.4998L2.80005 17.1998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 7H21V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    80% Match to your specialization
                </div>
            </div>
        </div>
    )
}

export default function NewsFeed() {
    const blogList = [0, 1, 2, 3, 4, 5, 6]

    return (
        <div className="space-y-4">
            <NewsFeedTop />
            <NewsFeedBlueBox />
            {blogList.map((e: any, i) => <FeedItem key={i} />)}
        </div>
    )
}