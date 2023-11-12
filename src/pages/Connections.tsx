import { Location } from "iconsax-react"
import AppContainer from "../components/AppContainer"
import { ReactNode, useState } from "react"
import Button from "../components/Buttons"

export function Title(props: { children: ReactNode }) {
    return (
        <h5 className="text-xl font-semibold">{props.children}</h5>
    )
}

export function MyConnection() {
    const connectionList = [
        {
            name: "NALSAR",
            position: "professor",
            caseTitle: "Case of Hit & Run",
        },
        {
            name: "NALSAR",
            position: "professor",
            caseTitle: "Case of Hit & Run",
        },
        {
            name: "NALSAR",
            position: "professor",
            caseTitle: "Case of Hit & Run",
        },
        {
            name: "NALSAR",
            position: "professor",
            caseTitle: "Case of Hit & Run",
        },
        {
            name: "NALSAR",
            position: "professor",
            caseTitle: "Case of Hit & Run",
        },
    ]

    return (
        <>
            <div className="w-full sm:max-w-sm bg-white rounded-xl p-4">
                <div className="space-y-2">
                    <Title>My Connections <span className="text-gray-600">({connectionList.length})</span></Title>
                    <form className="flex items-center gap-4">
                        <div className="w-full relative">
                            <input type="search" name="" id="" className="w-full rounded-lg bg-gray-100 pl-4 pr-10 py-2.5 text-base" placeholder="Search by name" />
                            <button type="button" className="absolute h-full aspect-square right-0 top-0 p-2">
                                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.75 20.6895L16.086 15.0255C17.4471 13.3914 18.1258 11.2956 17.981 9.17389C17.8361 7.05219 16.8789 5.06801 15.3084 3.6341C13.7379 2.2002 11.675 1.42697 9.54893 1.47528C7.42284 1.52359 5.39723 2.38971 3.89347 3.89347C2.38971 5.39723 1.52359 7.42284 1.47528 9.54893C1.42697 11.675 2.2002 13.7379 3.6341 15.3084C5.06801 16.8789 7.05219 17.8361 9.17389 17.981C11.2956 18.1258 13.3914 17.4471 15.0255 16.086L20.6895 21.75L21.75 20.6895ZM2.99996 9.74996C2.99996 8.41494 3.39585 7.1099 4.13754 5.99987C4.87924 4.88983 5.93345 4.02467 7.16685 3.51378C8.40025 3.00289 9.75745 2.86921 11.0668 3.12966C12.3762 3.39011 13.5789 4.03299 14.5229 4.97699C15.4669 5.921 16.1098 7.12373 16.3703 8.4331C16.6307 9.74248 16.497 11.0997 15.9862 12.3331C15.4753 13.5665 14.6101 14.6207 13.5001 15.3624C12.39 16.1041 11.085 16.5 9.74996 16.5C7.96036 16.498 6.24463 15.7862 4.97919 14.5207C3.71375 13.2553 3.00195 11.5396 2.99996 9.74996Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <button type="button" className="hover:text-primary">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 6C3.5 5.73478 3.60536 5.48043 3.79289 5.29289C3.98043 5.10536 4.23478 5 4.5 5H19.5C19.7652 5 20.0196 5.10536 20.2071 5.29289C20.3946 5.48043 20.5 5.73478 20.5 6C20.5 6.26522 20.3946 6.51957 20.2071 6.70711C20.0196 6.89464 19.7652 7 19.5 7H4.5C4.23478 7 3.98043 6.89464 3.79289 6.70711C3.60536 6.51957 3.5 6.26522 3.5 6ZM6.5 12C6.5 11.7348 6.60536 11.4804 6.79289 11.2929C6.98043 11.1054 7.23478 11 7.5 11H16.5C16.7652 11 17.0196 11.1054 17.2071 11.2929C17.3946 11.4804 17.5 11.7348 17.5 12C17.5 12.2652 17.3946 12.5196 17.2071 12.7071C17.0196 12.8946 16.7652 13 16.5 13H7.5C7.23478 13 6.98043 12.8946 6.79289 12.7071C6.60536 12.5196 6.5 12.2652 6.5 12ZM10.5 18C10.5 17.7348 10.6054 17.4804 10.7929 17.2929C10.9804 17.1054 11.2348 17 11.5 17H12.5C12.7652 17 13.0196 17.1054 13.2071 17.2929C13.3946 17.4804 13.5 17.7348 13.5 18C13.5 18.2652 13.3946 18.5196 13.2071 18.7071C13.0196 18.8946 12.7652 19 12.5 19H11.5C11.2348 19 10.9804 18.8946 10.7929 18.7071C10.6054 18.5196 10.5 18.2652 10.5 18Z" fill="currentColor" />
                            </svg>
                        </button>
                    </form>
                </div>
                <hr className="my-4" />
                <ul className="py-2 space-y-8">
                    {connectionList.map((e, i) =>
                        <li className="flex justify-between items-center">
                            <figure className="flex gap-3 items-center">
                                <img src="/src/assets/images/profile.png" alt="profile" className="w-12 h-12 rounded-full" />
                                <article className="">
                                    <h5 className="text-base font-semibold text-gray-700">{e.caseTitle}</h5>
                                    <p className="text-sm text-gray-500 capitalize font-medium">{e.position} @<a href="" className="uppercase">{e.name}</a></p>
                                </article>
                            </figure>
                            <div className="flex items-center gap-4">
                                <button type="button" className="w-5 h-5 text-gray-700 hover:text-primary grid place-items-center">
                                    <svg className="w-full h-full grid place-items-center" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.305 22.5L12 21.75L15 16.5H19.5C19.8978 16.5 20.2794 16.342 20.5607 16.0607C20.842 15.7794 21 15.3978 21 15V6C21 5.60218 20.842 5.22064 20.5607 4.93934C20.2794 4.65804 19.8978 4.5 19.5 4.5H4.5C4.10218 4.5 3.72064 4.65804 3.43934 4.93934C3.15804 5.22064 3 5.60218 3 6V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H11.25V18H4.5C3.70435 18 2.94129 17.6839 2.37868 17.1213C1.81607 16.5587 1.5 15.7956 1.5 15V6C1.5 5.20435 1.81607 4.44129 2.37868 3.87868C2.94129 3.31607 3.70435 3 4.5 3H19.5C20.2956 3 21.0587 3.31607 21.6213 3.87868C22.1839 4.44129 22.5 5.20435 22.5 6V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H15.87L13.305 22.5Z" fill="currentColor" />
                                        <path d="M6 7.5H18V9H6V7.5ZM6 12H13.5V13.5H6V12Z" fill="currentColor" />
                                    </svg>
                                </button>
                                <button type="button" className="w-5 h-5 text-gray-700 hover:text-primary grid place-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-full h-full">
                                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export function TabButton(props: { active: boolean, handleClick: () => void, children: ReactNode }) {
    return <>
        {props.active ?
            <button type="button" onClick={props.handleClick} className="inline-block px-4 py-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active" aria-current="page">{props.children}</button>
            :
            <button type="button" onClick={props.handleClick} className="inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">{props.children}</button>
        }
    </>
}

export function ConnectionRequest() {
    const [tab, settab] = useState<number>(1)

    function handleTab(index: number) {
        settab(index)
    }

    const requestList = [
        {
            name: "Naman Kumar",
            description: "Experienced lawyer specializing in Intellectual Property and Cyber Law with notable case outcomes",
            location: "Hyderabad",
            timeStamp: new Date()
        },
        {
            name: "Naman Kumar",
            description: "Experienced lawyer specializing in Intellectual Property and Cyber Law with notable case outcomes",
            location: "Hyderabad",
            timeStamp: new Date()
        },
        {
            name: "Naman Kumar",
            description: "Experienced lawyer specializing in Intellectual Property and Cyber Law with notable case outcomes",
            location: "Hyderabad",
            timeStamp: new Date()
        },
        {
            name: "Naman Kumar",
            description: "Experienced lawyer specializing in Intellectual Property and Cyber Law with notable case outcomes",
            location: "Hyderabad",
            timeStamp: new Date()
        },
    ]

    return (
        <div className="w-full bg-white p-4 rounded-xl space-y-4">
            <Title>Requests</Title>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap">
                    <li className="me-2">
                        <TabButton active={tab === 1} handleClick={() => { handleTab(1) }}>Request</TabButton>
                    </li>
                    <li className="me-2">
                        <TabButton active={tab === 2} handleClick={() => { handleTab(2) }}>Sent</TabButton>
                    </li>
                </ul>
            </div>
            {tab === 1 &&
                <ul className="py-2 space-y-3">
                    {requestList.map((e, i) =>
                        <li className="border rounded-xl p-4 space-y-4" key={i}>
                            <div className="flex justify-between items-start gap-3">
                                <figure className="flex gap-3 items-center">
                                    <img src="/src/assets/images/profile.png" alt="profile" className="min-w-[4.5rem] w-[4.5rem] min-h-[4.5rem] h-[4.5rem] rounded-full" />
                                </figure>
                                <div className="w-full space-y-2">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="">
                                            <h5 className="text-base font-bold text-gray-700">{e.name}</h5>
                                            <a href="" className="text-primary flex gap-1 items-center"><Location className="w-5" /><span>{e.location}</span></a>
                                        </div>
                                        <div className="text-primary">{e.timeStamp.toDateString()}</div>
                                    </div>
                                    <p className="text-gray-600">{e.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse gap-3">
                                <Button.BlueOutline handleClick={() => { }}>Dismiss</Button.BlueOutline>
                                <Button.Blue handleClick={() => { }}>Accept</Button.Blue>
                            </div>
                        </li>
                    )}
                </ul>
            }
            {tab === 2 &&
                <ul className="py-2 space-y-3">
                    {requestList.map((e, i) =>
                        <li className="border rounded-xl p-4 space-y-4" key={i}>
                            <div className="flex justify-between items-start gap-3">
                                <figure className="flex gap-3 items-center">
                                    <img src="/src/assets/images/profile.png" alt="profile" className="min-w-[4.5rem] w-[4.5rem] min-h-[4.5rem] h-[4.5rem] rounded-full" />
                                </figure>
                                <div className="w-full space-y-2">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="">
                                            <h5 className="text-base font-bold text-gray-700">{e.name}</h5>
                                            <a href="" className="text-primary flex gap-1 items-center"><Location className="w-5" /><span>{e.location}</span></a>
                                        </div>
                                        <div className="text-primary">{e.timeStamp.toDateString()}</div>
                                    </div>
                                    <p className="text-gray-600">{e.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse gap-3">
                                <Button.Blue handleClick={() => { }}>Take back</Button.Blue>
                            </div>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

const HomePage = () => {
    return (
        <div className="py-4">
            <AppContainer>
                <div className="flex items-start flex-wrap lg:flex-nowrap gap-4 py-4">
                    <MyConnection />
                    <ConnectionRequest />
                </div>
            </AppContainer>
        </div>
    )
}

export default HomePage