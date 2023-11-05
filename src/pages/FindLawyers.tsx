import NewsFeed, { info } from "../components/home/news-feed/NewsFeed"
import AppContainer from "../components/AppContainer"
import { useState } from 'react'
import picture from '../assets/images/profile.png'
import { StarIcon } from "@heroicons/react/24/solid"

export const Languages = [
    { name: "Hindi" },
    { name: "English" },
    { name: "Telugu" },
    { name: "Marathi" },
    { name: "Kannada" },
    { name: "Malayalam" },
    { name: "kannada" },
    { name: "Odia" },
    { name: "Bengali" },
    { name: "Tamil" },
    { name: "Urdu" },
    { name: "Gujarati" },
    { name: "Panjabi" },
]

export const Specializations = [
    {
        name: "Family Law",
        active: true
    },
    {
        name: "Corporate Law",
        active: true
    },
    {
        name: "Property Law",
        active: false
    },
    {
        name: "Criminal Law",
        active: false
    },
    {
        name: "Health and Medical Law",
        active: false
    },
    {
        name: "Media and Broadcasting Law",
        active: false
    },
    {
        name: "Environmental Law",
        active: false
    },
    {
        name: "Taxation Law",
        active: false
    },
    {
        name: "Employment and Labor Law",
        active: false
    },
    {
        name: "Intellectual Property Law",
        active: false
    },
    {
        name: "Intellectual Property Law",
        active: false
    },
    {
        name: "E-commerce Law",
        active: false
    },
    {
        name: "Cyber Law",
        active: false
    },
]

export const CheckBox = ({ name }: { name: string }) => (
    <div className="relative flex gap-x-3">
        <div className="flex items-center">
            <input id={name + 1} name="comments" type="checkbox" className="h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
        </div>
        <div className="leading-6">
            <label htmlFor={name + 1} className="font-medium text-gray-900">{name}</label>
        </div>
    </div>
)

type TagButton = { name: string, handleTag: () => void }

export function TagButtonSolid({ name, handleTag }: TagButton) {
    return (
        <div className="text-white bg-blue-500 font-medium rounded-full px-4 py-1 flex items-center gap-2 hover:bg-blue-600">
            {name}
            <button type="button" onClick={handleTag}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
    )
}
export function TagButtonOutline({ name, handleTag }: TagButton) {
    return (
        <div className="text-gray-700 border border-gray-700 font-medium rounded-full px-4 py-1 flex items-center gap-2 hover:bg-gray-50">
            {name}
            <button type="button" onClick={handleTag}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
    )
}

export function SearchForm() {
    return (
        <form>
            <div className="relative">
                <button type="submit" className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full px-5 py-3 pr-10 text-sm text-gray-900 border-2 border-blue-500 rounded-full bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    defaultValue=""
                />
            </div>
        </form>
    )
}

export function FeedItem({ data }: { data: any }) {
    return (
        <div className="p-6 bg-white text-gray-700 rounded-xl flex gap-6">
            <figure className="w-auto">
                <img src={picture} alt="profile" className="w-[12rem] min-w-[12rem] h-[12rem] min-h-[12rem] rounded-full object-cover" />
            </figure>
            <div className="w-full space-y-6">
                <div className="">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        {data.info.nameOfCase}
                        <div className="flex items-center">
                            {data.stars.map((e: any, i: number) => <StarIcon className="w-6 text-blue-500" key={i} />)}
                        </div>
                    </h2>
                    <p className="text-sm">Mumbai</p>
                </div>
                <p className="text-base">{data.info.desc}</p>
                <div className="space-y-2">
                    <h5 className="text-base font-semibold">Specializations</h5>
                    <div className="flex flex-wrap gap-3">
                        {data.specializations.map((e: any, i: number) => <div className="text-blue-600 bg-blue-50 font-medium rounded-full px-5 py-0.5 flex items-center gap-2">{e.name}</div>)}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="button"
                        className="bg-blue-700 text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full px-8 py-2 text-center"
                    >Send Invitation</button>
                </div>
            </div>
        </div>
    )
}

const HomePage = () => {
    const [specialization, setspecialization] = useState(Specializations)
    const data = [
        {
            stars: ["", "", ""],
            specializations: [...Specializations].slice(0, 6),
            info: info
        },
        {
            stars: ["", "", ""],
            specializations: [...Specializations].slice(0, 6),
            info: info
        },
        {
            stars: ["", "", ""],
            specializations: [...Specializations].slice(0, 6),
            info: info
        },
        {
            stars: ["", "", ""],
            specializations: [...Specializations].slice(0, 6),
            info: info
        },
    ]

    return (
        <AppContainer>
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-[28rem_1fr] py-4 text-base">
                <aside className='w-full lg:w-[28rem] bg-white rounded-2xl space-y-6 p-6'>
                    <h5 className="text-xl font-semibold text-gray-800">Filters</h5>
                    <form className="space-y-3">
                        <p className="font-semibold text-lg">Location</p>
                        <div className="flex items-center relative">
                            <input type="text" className="bg-gray-50 py-2 px-4 rounded-xl w-full" placeholder="Ex: Mumbai, Hyderabad" />
                            <svg className="w-5 h-5 text-gray-500 absolute right-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </form>
                    <div className="space-y-3">
                        <p className="font-semibold text-lg">Specialization</p>
                        <div className="flex flex-wrap gap-3">
                            {specialization.map((e, i) =>
                                e.active ?
                                    <TagButtonSolid name={e.name} handleTag={() => { setspecialization(specialization.filter((e, i2) => i !== i2)) }} /> :
                                    <TagButtonOutline name={e.name} handleTag={() => { setspecialization(specialization.filter((e, i2) => i !== i2)) }} />
                            )}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="font-semibold text-lg">Languages</p>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {Languages.map((e, i) => <CheckBox name={e.name} key={i}></CheckBox>)}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button type="button"
                            className="w-full text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full px-5 py-2.5 text-center"
                        >Reset</button>
                        <button type="button"
                            className="w-full bg-blue-700 text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full px-5 py-2.5 text-center"
                        >Apply</button>
                    </div>
                </aside>
                <div className="flex gap-4">
                    <div className="w-full space-y-4">
                        <SearchForm></SearchForm>
                        {data.map((e, i) =>
                            <FeedItem key={i} data={e} />
                        )}
                    </div>
                </div>
            </div>
        </AppContainer>
    )
}

export default HomePage