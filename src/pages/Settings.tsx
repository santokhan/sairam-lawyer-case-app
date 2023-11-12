import { BlueButton } from '../components/Buttons'
import { ArrowRight2, DollarCircle, LanguageCircle, Logout } from 'iconsax-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { BellAlertIcon } from '@heroicons/react/24/outline'
import AppContainer from '../components/AppContainer'

export const MailIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2.66797 11.3332C2.66797 6.6665 5.33464 4.6665 9.33464 4.6665H22.668C26.668 4.6665 29.3346 6.6665 29.3346 11.3332V20.6665C29.3346 25.3332 26.668 27.3332 22.668 27.3332H9.33464" stroke="currentColor" strokeWidth="2" strokeMiterlimit
            ="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.6654 12L18.492 15.3333C17.1187 16.4267 14.8654 16.4267 13.492 15.3333L9.33203 12" stroke="currentColor" strokeWidth="2" strokeMiterlimit
            ="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.66797 22H10.668" stroke="currentColor" strokeWidth="2" strokeMiterlimit
            ="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.66797 16.6665H6.66797" stroke="currentColor" strokeWidth="2" strokeMiterlimit
            ="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const actions = [
    {
        name: "Notifications",
        link: "notifications"
    },
    {
        name: "Language",
        link: "language"
    },
    {
        name: "Subscription",
        link: "subscription"
    },
    {
        name: "Legal Preferences",
        link: "legal-Preferences"
    },
    {
        name: "Privacy and Security",
        link: "privacy-and-security"
    },
    {
        name: "History",
        link: "history"
    },
]

export function SettingsIcon(props: { path: string }) {
    switch (props.path) {
        case actions[0].link:
            return <BellAlertIcon className='w-7 text-primary' />;

        case actions[1].link:
            return (
                <svg className='w-7 text-primary' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16.4556 27.4498H15.7318C13.076 27.4498 10.7053 26.6268 8.64814 24.9862C6.60125 23.3538 5.25657 21.2913 4.6375 18.8151L4.54081 18.4283L4.80728 18.1318L6.98177 15.7123V14.6665V13.9165H7.73177H9.0651H9.46929L9.69154 14.2541L12.1026 17.9165H13.6484V14.6665V13.9165H14.3984H16.3151V10.6665V9.9165H17.0651H20.3151V6.73317V5.42838L21.4426 6.08509C23.1553 7.08267 24.5395 8.45657 25.5908 10.1943C26.6527 11.9495 27.1818 13.8903 27.1818 15.9998M16.4556 27.4498L26.4318 15.9998M16.4556 27.4498L16.4813 26.7264L16.6707 21.3917L18.6788 19.4165M16.4556 27.4498L18.6788 19.4165M27.1818 15.9998H26.4318M27.1818 15.9998C27.1818 15.9995 27.1818 15.9992 27.1818 15.9989L26.4318 15.9998M27.1818 15.9998C27.1827 16.7622 27.1054 17.5046 26.9487 18.2258C26.7954 18.9308 26.5892 19.6138 26.3298 20.2741L26.1105 20.8323L25.5177 20.7411L22.4844 20.2744L21.8484 20.1766V19.5332V17.8165M26.4318 15.9998C26.4327 16.7109 26.3607 17.3998 26.2158 18.0665C26.0709 18.7332 25.8762 19.3776 25.6318 19.9998L22.5984 19.5332V17.8165H21.8484M21.8484 17.8165H21.8151M21.8484 17.8165V17.0665L21.8151 17.8165M21.0651 6.73317H21.8151V7.21122C21.5731 7.04276 21.3231 6.88342 21.0651 6.73317ZM21.0651 6.73317L20.6876 7.38125C20.8155 7.45576 20.9414 7.53267 21.0651 7.61198V6.73317ZM18.6788 19.4165H21.0651H21.8151V18.6665V17.8165M24.7101 10.2033L24.8057 9.9165H24.5156C24.5816 10.0108 24.6464 10.1064 24.7101 10.2033ZM21.0651 9.9165V10.6665L20.3554 10.424L20.3151 10.5419L21.0651 9.9165Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            );

        case actions[2].link:
            return (
                <svg className='w-7 text-primary' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M17.8485 14.1506C17.3241 13.6264 16.9669 12.9584 16.822 12.2312C16.6771 11.5037 16.7512 10.7495 17.035 10.0642C17.3188 9.37881 17.7994 8.79299 18.4161 8.38083C19.0329 7.96866 19.758 7.74867 20.4998 7.74867C21.2416 7.74867 21.9667 7.96866 22.5834 8.38083C23.2002 8.79299 23.6808 9.37881 23.9646 10.0642C24.2483 10.7495 24.3224 11.5037 24.1776 12.2312C24.0327 12.9584 23.6755 13.6264 23.1511 14.1506C23.1511 14.1507 23.151 14.1507 23.151 14.1508M17.8485 14.1506L18.3792 13.6207C18.6575 13.8994 18.9881 14.1206 19.3519 14.2714C19.7158 14.4223 20.1059 14.5 20.4998 14.5C20.8937 14.5 21.2838 14.4223 21.6476 14.2714C22.0115 14.1206 22.3421 13.8994 22.6204 13.6207L23.1506 14.1512C23.1507 14.151 23.1508 14.1509 23.151 14.1508M17.8485 14.1506C17.8485 14.1507 17.8486 14.1507 17.8486 14.1508M17.8485 14.1506L17.8486 14.1508M23.151 14.1508C22.803 14.4992 22.3898 14.7756 21.9349 14.9642C21.4799 15.1529 20.9923 15.25 20.4998 15.25C20.0073 15.25 19.5196 15.1529 19.0647 14.9642C18.6098 14.7756 18.1966 14.4992 17.8486 14.1508M23.151 14.1508H17.8486M26.2519 2.95352C27.4321 2.74413 28.4276 2.70895 29.1749 2.83439C29.3038 3.62665 29.2669 4.65198 29.0559 5.84575C28.8214 7.17232 28.3805 8.65864 27.7675 10.1795C26.5385 13.2288 24.6465 16.3463 22.4364 18.5453L22.4336 18.5481C21.6513 19.3349 20.8019 20.0521 19.8951 20.6915L19.5431 20.9397L19.5801 21.3689C19.6953 22.7056 19.5854 23.9732 19.1287 25.0212C18.4756 26.5133 17.2819 27.501 16.008 28.1559C14.8261 28.7635 13.6145 29.0634 12.811 29.2057L13.3884 23.9501L13.4789 23.1265L12.6504 23.1182C12.2666 23.1144 11.8833 23.0911 11.5019 23.0485L11.5019 23.0484L11.4916 23.0474C11.3816 23.0366 11.2788 22.9878 11.201 22.9093L11.1982 22.9066L9.08512 20.7985L9.08303 20.7964C9.00487 20.719 8.95627 20.6167 8.94568 20.5072L8.94576 20.5072L8.94453 20.4962C8.9017 20.1126 8.87841 19.7271 8.87475 19.3411L8.8669 18.5118L8.04256 18.6027L2.78113 19.183C2.92658 18.3771 3.22808 17.167 3.83598 15.9862C4.49177 14.7124 5.47967 13.5177 6.97253 12.8602C8.01897 12.4044 9.29208 12.297 10.6362 12.4159L11.0658 12.4539L11.3148 12.1017C11.954 11.1972 12.6709 10.3501 13.4573 9.57004L13.4594 9.568C15.6609 7.36742 18.8265 5.47415 21.904 4.24305C23.4387 3.62915 24.9326 3.1876 26.2519 2.95352Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10.5471 24.9865L10.5476 24.986C10.7048 24.8216 10.9893 24.9552 10.9689 25.1899C10.8697 26.0147 10.4958 26.7821 9.90732 27.3685L9.90727 27.3685C9.54556 27.7306 8.93498 28.0132 8.21763 28.2326C7.50129 28.4518 6.68281 28.6067 5.90931 28.7159C5.13594 28.825 4.40832 28.8882 3.87399 28.9242C3.60684 28.9421 3.38807 28.9533 3.23611 28.9599C3.16014 28.9633 3.10087 28.9655 3.06061 28.9669L3.03224 28.9678L3.03315 28.9394C3.03452 28.8992 3.03672 28.84 3.04005 28.764C3.04671 28.6122 3.05785 28.3935 3.07582 28.1265C3.11175 27.5924 3.17495 26.8652 3.28399 26.0921C3.39305 25.3189 3.54787 24.5007 3.76685 23.7845C3.98614 23.0672 4.26851 22.4566 4.63023 22.0946C5.21726 21.5078 5.9837 21.1343 6.80755 21.0335L6.80797 21.0335C6.85834 21.0266 6.90959 21.0358 6.95445 21.0597C6.9993 21.0836 7.03548 21.1211 7.05785 21.1667C7.08021 21.2124 7.08763 21.2639 7.07904 21.314C7.07045 21.3641 7.04629 21.4102 7.00999 21.4458L7.00978 21.446C6.95922 21.4966 6.90342 21.5854 6.84698 21.6959C6.79012 21.8073 6.73125 21.9435 6.67523 22.0913C6.56324 22.3868 6.46184 22.7306 6.41049 23.0176L6.41048 23.0177C6.13973 24.5413 7.47067 25.8431 8.97712 25.5864L8.9772 25.5864C9.63706 25.4723 10.1966 25.3376 10.5471 24.9865ZM7.03188 21.4681C7.07286 21.4279 7.10014 21.3759 7.10984 21.3193C7.11954 21.2627 7.11116 21.2045 7.08591 21.153C7.06065 21.1014 7.0198 21.0591 6.96915 21.0321C6.9185 21.0051 6.86063 20.9948 6.80375 21.0025C5.97298 21.1042 5.20008 21.4808 4.60813 22.0725L7.03188 21.4681Z" fill="currentColor" stroke="currentColor" strokeWidth="0.0625" />
                </svg>
            );

        case actions[3].link:
            return (
                <svg className='w-7 text-primary' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <g clipPath="url(#clip0_509_13159)">
                        <path d="M1.14453 30.3774H18.2874ZM16.0017 30.3774V24.6631H3.43025V30.3774" fill="currentColor" />
                        <path d="M1.14453 30.3774H18.2874M16.0017 30.3774V24.6631H3.43025V30.3774" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.7989 2.29145L9.60453 10.4858C8.7119 11.3784 8.7119 12.8257 9.60453 13.7183L13.2249 17.3387C14.1175 18.2313 15.5648 18.2313 16.4574 17.3387L24.6518 9.14432C25.5444 8.2517 25.5444 6.80446 24.6518 5.91184L21.0314 2.29145C20.1387 1.39882 18.6915 1.39882 17.7989 2.29145Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.5742 13.2344L30.8599 23.5201" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_509_13159">
                            <rect width="32" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            );

        case actions[4].link:
            return (
                <svg className='w-7 text-primary' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M15.2245 2.4989L15.2245 2.49891L15.2283 2.49719C15.7102 2.27986 16.2742 2.27735 16.776 2.49913C16.7762 2.49922 16.7764 2.49931 16.7766 2.4994L26.1087 6.64552C26.1088 6.64553 26.1088 6.64555 26.1088 6.64556C26.7988 6.95225 27.25 7.64418 27.25 8.40016V14.6668C27.25 21.6876 22.4262 28.227 16 29.8934C9.5738 28.227 4.75 21.6876 4.75 14.6668V8.40016C4.75 7.64418 5.20123 6.95225 5.89118 6.64556C5.89121 6.64555 5.89124 6.64553 5.89127 6.64552L15.2245 2.4989ZM18.0833 10.6668C18.0833 9.51928 17.1475 8.5835 16 8.5835C14.8525 8.5835 13.9167 9.51928 13.9167 10.6668C13.9167 11.8144 14.8525 12.7502 16 12.7502C17.1475 12.7502 18.0833 11.8144 18.0833 10.6668ZM18.0833 16.0002C18.0833 14.8526 17.1475 13.9168 16 13.9168C14.8525 13.9168 13.9167 14.8526 13.9167 16.0002V21.3335C13.9167 22.481 14.8525 23.4168 16 23.4168C17.1475 23.4168 18.0833 22.481 18.0833 21.3335V16.0002Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            );

        case actions[5].link:
            return (
                <svg className='w-7 text-primary' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16.0013 29.3332C23.3651 29.3332 29.3346 23.3636 29.3346 15.9998C29.3346 8.63604 23.3651 2.6665 16.0013 2.6665C8.63751 2.6665 2.66797 8.63604 2.66797 15.9998C2.66797 23.3636 8.63751 29.3332 16.0013 29.3332Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 8V16L21.3333 18.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        default:
            return <></>;
    }
}
export function DeleteIcon(props: { classes: string }) {
    return (
        <svg className={'w-7 text-[#FF2C2C] ' + props.classes} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 8H6.66667H28" fill="currentColor" />
            <path d="M4 8H6.66667H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.3346 7.99984V26.6665C25.3346 27.3737 25.0537 28.052 24.5536 28.5521C24.0535 29.0522 23.3752 29.3332 22.668 29.3332H9.33464C8.62739 29.3332 7.94911 29.0522 7.44902 28.5521C6.94892 28.052 6.66797 27.3737 6.66797 26.6665V7.99984M10.668 7.99984V5.33317C10.668 4.62593 10.9489 3.94765 11.449 3.44755C11.9491 2.94746 12.6274 2.6665 13.3346 2.6665H18.668C19.3752 2.6665 20.0535 2.94746 20.5536 3.44755C21.0537 3.94765 21.3346 4.62593 21.3346 5.33317V7.99984" fill="currentColor" />
            <path d="M25.3346 7.99984V26.6665C25.3346 27.3737 25.0537 28.052 24.5536 28.5521C24.0535 29.0522 23.3752 29.3332 22.668 29.3332H9.33464C8.62739 29.3332 7.94911 29.0522 7.44902 28.5521C6.94892 28.052 6.66797 27.3737 6.66797 26.6665V7.99984M10.668 7.99984V5.33317C10.668 4.62593 10.9489 3.94765 11.449 3.44755C11.9491 2.94746 12.6274 2.6665 13.3346 2.6665H18.668C19.3752 2.6665 20.0535 2.94746 20.5536 3.44755C21.0537 3.94765 21.3346 4.62593 21.3346 5.33317V7.99984" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.332 14.6665V22.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.668 14.6665V22.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function UserSettings() {
    const data = {
        profile: {
            src: "",
            name: "Joseph Cothett",
            email: "joseph@lawyerdesk.in",
        }
    }

    const location = useLocation()
    function active_nested_route(link: string) {
        const path = location.pathname.split('/')[2] // output ["", "settings", "notifications"]
        return link === path
    }

    return (
        <div className="rounded-xl">
            <div className="">
                <div className="bg-white rounded-xl" section-name="User profile settings">
                    <figure className="p-4 flex items-center gap-8 xl:gap-12">
                        <img src="/assets/images/settings/profile.png" alt="data" className="w-32 xl:w-44 h-32 xl:h-44 object-cover rounded-full bg-gray-50" />
                        <figcaption className='space-y-3 xl:space-y-4'>
                            <h1 className='text-2xl xl:text-3xl font-semibold'>{data.profile.name}</h1>
                            <a href={`mailto:${data.profile.email}`} className="flex items-center gap-2 xl:gap-4 text-secondary"><MailIcon />{data.profile.email}</a>
                            <BlueButton>Convert to Public User</BlueButton>
                        </figcaption>
                    </figure>
                    <div className='p-4 xl:p-8 space-y-4 xl:space-y-5'>
                        {actions.map((e, i) =>
                            <Link
                                to={e.link}
                                key={i}
                                type="button"
                                className={[
                                    "flex items-center justify-between w-full p-4 text-left text-gray-500 border-2 border-gray-100 rounded-xl font-semibold gap-2 hover:bg-gray-100",
                                    active_nested_route(e.link) ? "text-primary" : "text-secondary"
                                ].join(" ")}
                            >
                                <SettingsIcon path={e.link} />
                                <div className='w-full'>{e.name}</div>
                                <ArrowRight2 className='w-5 text-primary' />
                            </Link>
                        )}
                        <Link
                            to="delete-account"
                            type="button"
                            className="flex items-center justify-between w-full p-4 text-left text-gray-500 border-2 border-gray-100 rounded-xl font-semibold gap-2 hover:bg-gray-100"
                        >
                            <DeleteIcon classes={"text-[#FF2C2C]"} />
                            <div className='w-full text-[#FF2C2C]'>Delete Account</div>
                            <ArrowRight2 className='w-5 text-primary' />
                        </Link>
                        <Link
                            to="/logout"
                            type="button"
                            className="flex items-center justify-between w-full p-4 text-left text-gray-500 border-2 border-gray-100 rounded-xl font-semibold gap-2 hover:bg-gray-100"
                        >
                            <Logout className='w-7 text-primary' />
                            <div className='w-full'>Logout</div>
                            <ArrowRight2 className='w-5 text-primary' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Settings() {
    return (
        <AppContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start py-4">
                <UserSettings />
                <Outlet />
            </div>
        </AppContainer>
    )
}