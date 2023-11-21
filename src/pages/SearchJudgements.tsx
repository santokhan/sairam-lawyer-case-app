
import AppContainer from "../components/AppContainer"
import { ReactNode } from "react"
import EmpowerImage from '../assets/images/search-law/empowering.png'
import { BlueButton } from "../components/Buttons";
import BreadCrumb from "../components/breadcrumb/BreadCrumb"

export function Title(props: { children: ReactNode }) {
    return (
        <h5 className="text-xl font-semibold">{props.children}</h5>
    )
}

export function RecentSearches() {
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
        <div className="w-full sm:max-w-sm bg-white rounded-xl p-4">
            <div className="space-y-2">
                <Title>Recent Searches</Title>
            </div>
            {/* <hr className="my-4" /> */}
            <div className="grid place-items-center py-20">No activity</div>
        </div>
    )
}



export function Search() {
    return (
        <div className="w-full lg:px-4 rounded-xl space-y-4">
            <div className="hidden lg:block">
                <BreadCrumb />
            </div>
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl space-y-4">
                    <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-3">
                        <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 17.5H13.5V18.5H6.5V17.5Z" fill="white" stroke="currentColor" />
                            <path d="M3.5 18C3.5 18.2761 3.27614 18.5 3 18.5C2.72386 18.5 2.5 18.2761 2.5 18C2.5 17.7239 2.72386 17.5 3 17.5C3.27614 17.5 3.5 17.7239 3.5 18Z" fill="currentColor" stroke="currentColor" />
                            <path d="M13 15C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13C12.4477 13 12 13.4477 12 14C12 14.5523 12.4477 15 13 15Z" fill="currentColor" />
                            <path d="M2 13H10V15H2V13ZM6 9H14V11H6V9Z" fill="currentColor" />
                            <path d="M3 11C3.55228 11 4 10.5523 4 10C4 9.44772 3.55228 9 3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11Z" fill="currentColor" />
                            <path d="M29.9998 28.6L22.5998 21.2C24.0998 19.2 24.9998 16.7 24.9998 14C24.9998 7.4 19.5998 2 12.9998 2C9.69981 2 6.59981 3.3 4.2998 5.8L5.79981 7.2C7.59981 5.1 10.1998 4 12.9998 4C18.4998 4 22.9998 8.5 22.9998 14C22.9998 19.5 18.4998 24 12.9998 24C9.99981 24 7.19981 22.7 5.29981 20.4L3.7998 21.7C5.9998 24.4 9.39981 26 12.9998 26C16.1998 26 19.0998 24.7 21.2998 22.7L28.5998 30L29.9998 28.6Z" fill="currentColor" />
                        </svg>
                        Search for a specific law/ scenario/ word/ phrase
                    </h4>
                    <form className="space-y-4">
                        <textarea name="" id="" rows={5} className="border w-full rounded-xl p-2" placeholder="Type here"></textarea>
                        <div className="flex justify-center"><BlueButton><div className="text-base px-12">Find Law</div></BlueButton></div>
                    </form>
                </div>
                <div className="lg:px-4 py-4 rounded-xl space-y-4 grid sm:grid-cols-2 place-items-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold text-gray-700"><span className="text-primary">Empowering you</span> with the latest <span className="text-primary">legal knowledge!</span></h2>
                        <p className="text-lg font-medium text-gray-600">Use search laws to get AI-Powered Updates, Just a Click Away</p>
                    </div>
                    <figure className="w-full">
                        <img
                            src={EmpowerImage}
                            alt="library"
                            className="w-full object-contain mx-auto py-4"
                        />
                    </figure>
                </div>
            </div>
        </div>
    )
}

const SearchJudgements = () => {
    return (
        <div className="py-4">
            <AppContainer>
                <div className="block lg:hidden">
                    <BreadCrumb />
                </div>
                <div className="flex items-start flex-wrap lg:flex-nowrap gap-4 py-4">
                    <RecentSearches />
                    <Search />
                </div>
            </AppContainer>
        </div>
    )
}

export default SearchJudgements