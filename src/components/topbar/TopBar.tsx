import { Link, NavLink, useLocation } from 'react-router-dom'
import profile from '../../assets/images/profile.png'
import { useEffect, useState } from 'react'
import Navs from '../../lib/sidebar/Navs'
import Icons from '../sidebar/SidebarIcons'
import { ArrowLeft2 } from 'iconsax-react'

export const OldIcon = () => (
    <svg
        className="w-10"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <circle cx={28} cy={28} r={28} fill="currentColor" />
        <g clipPath="url(#clip0_1003_1826)">
            <circle cx={28} cy={28} r={28} fill="currentColor" />
            <path
                d="M30.7998 14H19.5998C18.8572 14 18.145 14.295 17.6199 14.8201C17.0948 15.3452 16.7998 16.0574 16.7998 16.8V39.2C16.7998 40.74 18.0598 42 19.5998 42H36.3998C37.1424 42 37.8546 41.705 38.3797 41.1799C38.9048 40.6548 39.1998 39.9426 39.1998 39.2V22.4L30.7998 14Z"
                stroke="white"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M30.8001 15.4004V22.4004H37.8001M33.6001 29.4004H22.4001M33.6001 35.0004H22.4001M25.2001 23.8004H22.4001"
                stroke="white"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_1003_1826">
                <rect width={28} height={28} fill="white" transform="translate(14 14)" />
            </clipPath>
        </defs>
    </svg>
)

export default function GlobalTopBar() {
    const [sticky, setsticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight) {
                setsticky(true)
            } else {
                setsticky(false)
            }
        })
    }, [])

    function generate_page_name() {
        const location = useLocation()
        const path = location.pathname.split("/")[1] // output ["", "settings"]
        // use `Navs` from sidebar data to get current page name for topbar.
        const pageName: any = Navs.filter(e => e.path === path)[0] // output [{name: "Settings", link: "settings"}]
        if (!pageName) return "";
        return pageName; // output {name: "Settings", link: "settings"}
    }
    const navObject = generate_page_name()

    return (
        <div className={["w-full p-4 bg-white rounded-xl h-16 flex justify-between items-center"].join(" ")}>
            <div className="flex gap-2 items-center text-primary">
                <Link to="" type='button'><ArrowLeft2 className='text-gray-600' /></Link>
                <Icons path={navObject.path} ></Icons>
                <span className="font-semibold text-xl text-gray-800">{navObject.name}</span>
            </div>
            <div className="flex gap-4 items-center">
                <NavLink to="/settings/notifications" type="button" className="hover:text-primary">
                    <svg className="w-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M16.0258 3.87988C11.6125 3.87988 8.02581 7.46655 8.02581 11.8799V15.7332C8.02581 16.5465 7.67914 17.7865 7.26581 18.4799L5.73247 21.0265C4.78581 22.5999 5.43914 24.3465 7.17247 24.9332C12.9191 26.8532 19.1191 26.8532 24.8658 24.9332C26.4791 24.3999 27.1858 22.4932 26.3058 21.0265L24.7725 18.4799C24.3725 17.7865 24.0258 16.5465 24.0258 15.7332V11.8799C24.0258 7.47988 20.4258 3.87988 16.0258 3.87988Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M18.4929 4.26691C18.0796 4.14691 17.6529 4.05358 17.2129 4.00025C15.9329 3.84025 14.7062 3.93358 13.5596 4.26691C13.9462 3.28025 14.9062 2.58691 16.0262 2.58691C17.1462 2.58691 18.1062 3.28025 18.4929 4.26691Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.0264 25.4131C20.0264 27.6131 18.2264 29.4131 16.0264 29.4131C14.933 29.4131 13.9197 28.9598 13.1997 28.2398C12.4797 27.5198 12.0264 26.5064 12.0264 25.4131" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
                        <circle cx="24" cy="7" r="3" fill="currentColor" />
                    </svg>
                </NavLink>
                <button type="button" className="rounded-full hover:ring"><img src={profile} alt="profile" className='w-10' /></button>
            </div>
        </div>
    )
}