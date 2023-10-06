import { PlusIcon } from "@heroicons/react/24/outline";
import { BlueButton, GrayButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import { useState } from "react";

export const IconsBox = (props: any) => (
    <div className={[
        "grid place-items-center rounded-full",
        `min-w-[${props.size}] w-[${props.size}] max-w-[${props.size}] min-h-[${props.size}] h-[${props.size}] max-h-[${props.size}]`,
        props.className
    ].join(" ")}>{props.children}</div>
)

export const Tabs = (props: any) => (
    <div className="flex items-center gap-2">
        {props.id === 1 ? <BlueButton>Recently Added</BlueButton> : <GrayButton handleClick={() => { props.handleTab(1) }}>Recently Added</GrayButton>}
        {props.id === 2 ? <BlueButton>Others</BlueButton> : <GrayButton handleClick={() => { props.handleTab(2) }}>Others</GrayButton>}
    </div>
)

export default function CaseManagement() {
    const list = [1, 2, 3, 4]

    const [tab, settab] = useState(1)
    function handleTab(id: number) {
        settab(id)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl space-y-8">
                    <figure className="grid grid-cols-1 2xl:grid-cols-[1fr_1fr] gap-3">
                        <img src="/assets/images/case-management/new-case.png" alt="Description of the image" className="w-full"></img>
                        <figcaption className="h-full flex flex-col justify-between gap-4">
                            <h4 className="text-xl font-semibold text-gray-700">Register your legal case today & let the truth prevail</h4>
                            <div className="lg:self-end"><BlueButton><div className="flex items-center"><PlusIcon className="w-7 inline-flex mr-2" /><span className="text-base">Search Library</span></div></BlueButton></div>
                        </figcaption>
                    </figure>
                </div>
                <div className="bg-white rounded-xl p-4 space-y-3">
                    <Tabs id={tab} handleTab={handleTab} />
                    {list.map((e, i) => (
                        <Link
                            key={i}
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-3 text-left border-2 border-gray-100 rounded-xl font-semibold gap-2 hover:bg-gray-100 text-secondary"
                            to=""
                        >
                            <IconsBox size="2.5rem" className="text-primary bg-teal-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                                    />
                                </svg>
                            </IconsBox>
                            <div className="w-full">Notifications</div>
                            <IconsBox size="2rem" className="bg-primary text-white">
                                <svg
                                    className="w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={10}
                                        strokeWidth="1.5"
                                        d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
                                    />
                                </svg>
                            </IconsBox>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-white p-4 rounded-xl space-y-4">
                <figure className="space-y-4">
                    <img
                        src="public/assets/images/case-management/case.png"
                        alt="library"
                        className="h-48 object-contain mx-auto py-4"
                    />
                    <figcaption className="space-y-2 p-2">
                        <h4 className="text-lg font-semibold text-primary text-center">Click on any case to view details</h4>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}