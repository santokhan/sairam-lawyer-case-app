import AppContainer from "../components/AppContainer"
import { GridIcons as GI } from "../components/home/grid/Icons"
import { Link } from "react-router-dom"

export const gridArray = [
    {
        icon: GI.caseManagement,
        name: "Case Management",
        path: "/case-management",
    },
    {
        icon: GI.legalResearch,
        name: "Legal Research",
        path: "/legal-research",
    },
    {
        icon: GI.searchLaw,
        name: "Search Law",
        path: "/search-law",
    },
    {
        icon: GI.searchDictionary,
        name: "Search Dictionary",
        path: "search-dictionary",
    },
    {
        icon: GI.searchJudgements,
        name: "Search Judgements",
        path: "search-judgements",
    },
    {
        icon: GI.documentAnalytics,
        name: "Document Analytics",
        path: "document-analytics",
    },
    {
        icon: GI.documentWriter,
        name: "Document Writer",
        path: "document-writer",
    },
    {
        icon: GI.legalOpinion,
        name: "Legal Opinion",
        path: "legal-opinion",
    },
    {
        gridCols: 1,
        icon: GI.documentChat,
        name: "Document Chat",
        path: "document-chat",
    },
]

export const LastItem = () => (
    <div className={["bg-white p-5 rounded-xl border- 2 border-transparent", "hover:border-primary hover:shadow-xl hover:scale-105", "transition-transform ease-out"].join(" ")} >
        <h4 className="text-2xl font-semibold urbanist text-gray-700">Your matters,</h4>
        <h4 className="text-2xl font-semibold urbanist text-[#E98C20]">Our expertise</h4>
        <p className="mt-3 text-gray-700">
            we're your go-to legal experts for everything from Criminal Defense to Business Law and more.
        </p>
        <div className="flex justify-start mt-3">
            <button type="button"
                className="text-indigo-700 hover:text-white border-2 border-blue-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full px-5 py-1 text-center">
                Book a call
            </button>
        </div>
        <div className="flex justify-start mt-4">
            <button type="button"
                className="text-start text-[#E98C20] flex items-center gap-1 font-semibold rounded-full">
                <svg className="w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1256_20849)">
                        <path d="M15.9779 8.59985H13.1201C10.6237 8.59985 8.6001 10.6235 8.6001 13.1199V15.9777C12.5401 15.6855 15.6858 12.5398 15.9779 8.59985Z" fill="#E98C20">
                            <path d="M7.40032 15.9777V13.1199C7.40032 10.6235 5.37664 8.59985 2.8803 8.59985H0.0224609C0.314595 12.5398 3.46034 15.6855 7.40032 15.9777Z" fill="#E98C20">
                                <path d="M15.9779 7.39982C15.6858 3.45985 12.5401 0.314106 8.6001 0.0219727V2.87981C8.6001 5.37614 10.6237 7.39982 13.1201 7.39982H15.9779Z" fill="#E98C20">
                                    <path d="M7.40032 0.0219727C3.46034 0.314106 0.314595 3.45985 0.0224609 7.39982H2.8803C5.37664 7.39982 7.40032 5.37614 7.40032 2.87981V0.0219727Z" fill="#E98C20">
                                        <path d="M5.43311 8.00003C6.54211 7.4459 7.44591 6.54211 7.99999 5.43311C8.55411 6.54211 9.45786 7.4459 10.5669 8.00003C9.45786 8.55411 8.55411 9.4579 7.99999 10.5669C7.44591 9.4579 6.54211 8.55411 5.43311 8.00003Z" fill="#020202"></path>
                                    </path>
                                </path>
                            </path>
                        </path>
                    </g>
                    <defs>
                        <clipPath id="clip0_1256_20849">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                Serenity Lawyers
            </button>
        </div>
    </div>
)

const HomePage = () => {
    return (
        <div className="py-2">
            <AppContainer>
                <div className={"w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 py-4"}>
                    {gridArray.map((e, i) => (
                        <Link to={e.path} className={[
                            "bg-white p-6 lg:p-10 rounded-xl space-y-4 lg:space-y-6 hover:border-primary hover:shadow-xl hover:scale-105",
                            "transition-transform ease-out", i === 0 || i === 1 ? 'lg:col-span-2' : ''
                        ].join(" ")} key={i}>
                            {e.icon}
                            <h4 className="text-xl lg:text-2xl font-semibold urbanist text-gray-700">{e.name}</h4>
                            <div className="hidden lg:block lg:py-4"></div>
                        </Link>
                    ))}
                    <LastItem />
                </div>
            </AppContainer >
        </div>
    )
}

export default HomePage