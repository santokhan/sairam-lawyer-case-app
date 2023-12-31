import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
import LawyerImg from '../../assets/images/lawyer.png'


export function Slider() {
    return (
        <>
            <Swiper
                pagination={{ dynamicBullets: true }}
                modules={[Pagination]}
                className="mySwiper rounded-xl"
            >
                <SwiperSlide><img src="/assets/images/slider/right-bar/slide-1.png" alt="slide images" className='pb-6' /></SwiperSlide>
                <SwiperSlide><img src="/assets/images/slider/right-bar/slide-1.png" alt="slide images" className='pb-6' /></SwiperSlide>
                <SwiperSlide><img src="/assets/images/slider/right-bar/slide-1.png" alt="slide images" className='pb-6' /></SwiperSlide>
                <SwiperSlide><img src="/assets/images/slider/right-bar/slide-1.png" alt="slide images" className='pb-6' /></SwiperSlide>
            </Swiper>
        </>
    );
}

interface FlexItem {
    title: string;
    icon: string;
    button: {
        text: string;
    };
}

export const FlexList: FlexItem[] = [
    {
        title: "Connections",
        icon: 'user',
        button: {
            text: "Manage"
        }
    },
    {
        title: "Chats",
        icon: 'chats',
        button: {
            text: "Professional"
        }
    },
    {
        title: "Connections",
        icon: 'law',
        button: {
            text: "Manage"
        }
    },
]

export function Icons(props: { name: string }) {
    if (props.name === FlexList[0].icon) {
        return (
            <svg className="w-14" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g clipPath="url(#clip0_56_8237)">
                    <path d="M80 57.5C80 53.1902 78.2879 49.057 75.2405 46.0095C72.193 42.9621 68.0598 41.25 63.75 41.25C59.4402 41.25 55.307 42.9621 52.2595 46.0095C49.2121 49.057 47.5 53.1902 47.5 57.5H80Z" fill="#147BF5" />
                    <path d="M63.7506 41.2494C68.231 41.2494 71.8631 37.6173 71.8631 33.1369C71.8631 28.6565 68.231 25.0244 63.7506 25.0244C59.2702 25.0244 55.6381 28.6565 55.6381 33.1369C55.6381 37.6173 59.2702 41.2494 63.7506 41.2494Z" fill="#147BF5" />
                    <path d="M32.5 57.5C32.5 53.1902 30.788 49.057 27.7405 46.0095C24.693 42.9621 20.5598 41.25 16.25 41.25C11.9402 41.25 7.80698 42.9621 4.75951 46.0095C1.71205 49.057 0 53.1902 0 57.5H32.5Z" fill="#90CAF9" />
                    <path d="M16.2506 41.2494C20.731 41.2494 24.3631 37.6173 24.3631 33.1369C24.3631 28.6565 20.731 25.0244 16.2506 25.0244C11.7702 25.0244 8.13806 28.6565 8.13806 33.1369C8.13806 37.6173 11.7702 41.2494 16.2506 41.2494Z" fill="#FFE0B2" />
                    <path d="M40.0008 39.9996C46.2036 39.9996 51.232 34.9712 51.232 28.7684C51.232 22.5655 46.2036 17.5371 40.0008 17.5371C33.7979 17.5371 28.7695 22.5655 28.7695 28.7684C28.7695 34.9712 33.7979 39.9996 40.0008 39.9996Z" fill="#FFCC80" />
                    <path d="M62.5 62.5C62.5 56.5326 60.1295 50.8097 55.9099 46.5901C51.6903 42.3705 45.9674 40 40 40C34.0326 40 28.3097 42.3705 24.0901 46.5901C19.8705 50.8097 17.5 56.5326 17.5 62.5H62.5Z" fill="#64B5F6" />
                </g>
                <defs>
                    <clipPath id="clip0_56_8237">
                        <rect width="80" height="80" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    }
    if (props.name === FlexList[1].icon) {
        return (
            <svg className="w-14" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M52.2066 59.5859C50.956 60.9321 49.5304 62.1479 47.9642 63.2049C43.6386 66.1355 38.2254 67.8749 32.3478 67.8749C28.244 67.8749 24.3664 67.0277 20.9306 65.5185C16.0592 70.4817 8.27721 70.0297 8.27721 70.0297L14.3952 61.4189C9.64581 57.3213 6.70081 51.6129 6.70081 45.2953C6.70081 39.6763 9.03061 34.5379 12.886 30.5869C14.2504 29.1899 15.8066 27.9393 17.5172 26.8701C16.4784 29.4851 15.9124 32.2955 15.9124 35.2221C15.9124 49.1749 28.7592 60.4841 44.604 60.4841C47.2372 60.4841 49.785 60.1725 52.2066 59.5859Z" fill="#147BF5" />
                <path d="M57.9955 45.2954C57.9955 50.7188 55.8265 55.6944 52.2077 59.5862C49.7861 60.1728 47.2383 60.4844 44.6051 60.4844C28.7603 60.4844 15.9135 49.1752 15.9135 35.2224C15.9135 32.296 16.4795 29.4854 17.5183 26.8704C21.7055 24.2554 26.8215 22.7158 32.3487 22.7158C46.5131 22.7156 57.9955 32.8232 57.9955 45.2954Z" fill="url(#paint0_linear_56_8241)" />
                <path d="M64.6917 53.26L71.5369 62.895C71.5369 62.895 62.8283 63.4 57.3805 57.8484C55.7106 58.5783 53.9796 59.1597 52.2077 59.5856C49.7861 60.1722 47.2383 60.4838 44.6051 60.4838C28.7603 60.4838 15.9135 49.1746 15.9135 35.2218C15.9135 32.2954 16.4795 29.4848 17.5183 26.8698C21.4345 17.0208 32.0839 9.95996 44.6049 9.95996C60.4513 9.95996 73.2983 21.2672 73.2983 35.2218C73.2983 42.289 70.0051 48.6758 64.6917 53.26Z" fill="#CCE9FF" />
                <path d="M33.8924 40.8624C36.1601 40.8624 37.9984 39.0241 37.9984 36.7564C37.9984 34.4887 36.1601 32.6504 33.8924 32.6504C31.6247 32.6504 29.7864 34.4887 29.7864 36.7564C29.7864 39.0241 31.6247 40.8624 33.8924 40.8624Z" fill="#2A94F4" />
                <path d="M45.0126 40.8624C47.2803 40.8624 49.1186 39.0241 49.1186 36.7564C49.1186 34.4887 47.2803 32.6504 45.0126 32.6504C42.7449 32.6504 40.9066 34.4887 40.9066 36.7564C40.9066 39.0241 42.7449 40.8624 45.0126 40.8624Z" fill="#2A94F4" />
                <path d="M56.1338 40.8624C58.4015 40.8624 60.2398 39.0241 60.2398 36.7564C60.2398 34.4887 58.4015 32.6504 56.1338 32.6504C53.8662 32.6504 52.0278 34.4887 52.0278 36.7564C52.0278 39.0241 53.8662 40.8624 56.1338 40.8624Z" fill="#2A94F4" />
                <defs>
                    <linearGradient id="paint0_linear_56_8241" x1="36.9545" y1="22.7156" x2="36.9545" y2="60.4842" gradientUnits="userSpaceOnUse">
                        <stop offset="0.394" stopColor="#80E8BE" />
                        <stop offset="1" stopColor="#00C278" />
                    </linearGradient>
                </defs>
            </svg>

        )
    }
    if (props.name === FlexList[2].icon) {
        return (
            <svg className="w-14" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M46.8749 76.2353H9.37488C7.30382 76.2353 5.62488 74.5563 5.62488 72.4853V64.9853C6.19768 36.6102 50.056 36.5427 50.6248 64.9856L50.6249 72.4853C50.6249 74.5563 48.9459 76.2353 46.8749 76.2353Z" fill="#147BF5" />
                <path d="M46.8749 77.4873H9.37488C6.61792 77.4873 4.37488 75.2443 4.37488 72.4873V64.9873C5.11293 34.9335 51.1372 34.8614 51.8748 64.9876L51.8749 72.4873C51.8749 75.2443 49.6318 77.4873 46.8749 77.4873ZM26.8749 44.9873C15.847 44.9873 6.87488 53.9595 6.87488 64.9873V72.4873C6.87488 73.8661 7.99609 74.9873 9.37488 74.9873H46.8749C48.2537 74.9873 49.3749 73.8661 49.3749 72.4873V64.9873C49.407 52.8545 38.7714 43.9101 26.8749 44.9873Z" fill="#147BF5" />
                <path d="M35.625 62.4854L28.125 71.2354L20.625 62.4854L25.625 47.4854H30.625L35.625 62.4854Z" fill="#E6F3FF" stroke="#E6F3FF" strokeWidth="2.02083" strokeLinejoin="round" />
                <path d="M74.3751 56.2373C74.3751 67.283 65.4208 76.2373 54.3751 76.2373C27.8455 75.1839 27.853 37.2868 54.3752 36.2373C65.4208 36.2373 74.3751 45.1916 74.3751 56.2373Z" fill="#E6F3FF" />
                <path d="M54.375 77.4869C42.6575 77.4869 33.125 67.9544 33.125 56.2369C34.2919 28.0458 74.4624 28.054 75.625 56.2371C75.625 67.9544 66.0925 77.4869 54.375 77.4869ZM54.375 37.4869C44.0363 37.4869 35.625 45.8981 35.625 56.2369C36.655 81.1113 72.0988 81.1041 73.125 56.2368C73.125 45.8982 64.7137 37.4869 54.375 37.4869Z" fill="#4AA5FF" />
                <path d="M56.8749 46.2363C56.7914 49.5335 51.9579 49.5328 51.8749 46.2362C51.9584 42.9391 56.7918 42.9398 56.8749 46.2363Z" fill="#147BF5" />
                <path d="M54.3751 63.7354C53.6848 63.7354 53.1251 63.1757 53.1251 62.4854V48.7354C53.1251 48.045 53.6848 47.4854 54.3751 47.4854C55.0654 47.4854 55.6251 48.045 55.6251 48.7354V62.4854C55.6251 63.1757 55.0654 63.7354 54.3751 63.7354Z" fill="#147BF5" />
                <path d="M26.8327 76.7542C26.4111 76.2075 26.4757 75.4509 26.9769 75.0644L36.9603 67.3659C37.4616 66.9794 38.2097 67.1092 38.6312 67.6559C39.0528 68.2025 38.9882 68.9591 38.487 69.3456L28.5036 77.0442C28.0024 77.4307 27.2542 77.3008 26.8327 76.7542Z" fill="#4AA5FF" />
                <path d="M61.875 67.4863H46.875C43.5822 67.4045 43.5747 62.5701 46.8751 62.4863H61.875C65.1678 62.5681 65.1752 67.4025 61.875 67.4863Z" fill="#147BF5" stroke="#147BF5" strokeWidth="1.01042" />
                <path d="M66.875 47.4873H56.875C55.235 47.4603 55.2298 45.0153 56.8751 44.9873H66.875C68.515 45.0143 68.5203 47.4593 66.875 47.4873ZM51.875 47.4873H41.875C40.235 47.4603 40.2298 45.0153 41.8751 44.9873H51.875C53.515 45.0143 53.5203 47.4593 51.875 47.4873Z" fill="#147BF5" />
                <path d="M28.1249 48.7363C25.3635 48.7363 23.1249 46.4978 23.1249 43.7363V39.9863H33.1249V43.7363C33.1249 46.4978 30.8863 48.7363 28.1249 48.7363Z" fill="#E6F3FF" />
                <path d="M46.8256 21.1865C45.0908 19.2791 40.7947 16.5287 37.8755 15.799C33.0355 19.6532 23.2154 19.6529 18.3756 15.799C15.4564 16.5287 11.1604 19.2791 9.42554 21.1865C11.7072 -1.94957 44.5525 -1.93258 46.8256 21.1865Z" fill="#4AA5FF" />
                <path d="M46.8254 22.4371C46.5025 22.4371 46.1852 22.3126 45.9459 22.0758C43.7347 19.8893 41.0234 18.1695 38.0809 17.1783C32.6809 20.8986 23.5687 20.8985 18.1688 17.1783C15.2273 18.1689 12.5155 19.8885 10.3038 22.0758C9.93455 22.4414 9.3773 22.5402 8.90489 22.3236C8.43187 22.1075 8.14257 21.6211 8.17797 21.1029C8.4868 16.535 10.3862 12.1771 13.5259 8.83175C25.2089 -3.89555 47.0169 3.83261 48.0716 21.1031C48.1337 21.8061 47.5286 22.4501 46.8254 22.4371ZM37.8746 14.5495C40.4487 15.131 42.8918 16.4998 45.045 18.0304C40.2396 0.706211 16.0036 0.717962 11.2047 18.0304C13.2526 16.5254 15.5943 15.3326 18.0126 14.6032C18.3873 14.4897 18.795 14.5593 19.1112 14.7894C23.7929 18.3611 32.4568 18.3611 37.1385 14.7893C37.3546 14.6319 37.6134 14.5495 37.8746 14.5495Z" fill="#4AA5FF" />
                <path d="M46.8751 22.4874C46.8751 32.8373 38.4751 41.2374 28.1251 41.2374C17.3242 41.2833 8.62137 31.9581 9.42507 21.1873C11.1599 19.2799 15.456 16.5295 18.3751 15.7998C23.2151 19.654 33.0353 19.6537 37.8751 15.7998C40.7943 16.5295 45.0903 19.2799 46.8251 21.1873C46.8626 21.6123 46.8751 22.0498 46.8751 22.4874Z" fill="#E6F3FF" />
                <path d="M28.1249 42.4862C16.6077 42.5352 7.30663 32.5603 8.17991 21.075C8.20613 20.7809 8.33613 20.505 8.5461 20.2975C11.1803 17.6886 14.4712 15.6722 18.0126 14.6023C18.3874 14.4888 18.7951 14.5584 19.1113 14.7885C21.4984 16.528 24.6997 17.4862 28.125 17.4862C31.5503 17.4862 34.7515 16.528 37.1386 14.7885C37.4548 14.5584 37.8619 14.4888 38.2373 14.6023C41.7797 15.6728 45.0699 17.6893 47.7038 20.2975C47.9138 20.505 48.0438 20.7809 48.07 21.0751C48.9421 32.5602 39.643 42.5353 28.1249 42.4862ZM10.6402 21.7495C10.202 31.6451 18.217 40.0109 28.125 39.9862C38.0325 40.011 46.0486 31.6449 45.6097 21.7495C43.4659 19.721 40.8743 18.1174 38.081 17.1774C32.681 20.8977 23.5688 20.8976 18.1689 17.1774C15.3763 18.117 12.7843 19.7202 10.6402 21.7495Z" fill="#E6F3FF" />
                <path d="M9.37505 22.4857C7.00062 22.2372 8.44173 18.8548 10.2839 20.3269C11.1168 21.092 10.4489 22.5112 9.37505 22.4857ZM46.8384 22.4735C45.7772 22.4941 45.135 21.0496 45.9413 20.3019C47.7813 18.7872 49.1981 22.2512 46.8384 22.4735Z" fill="#4AA5FF" />
                <path d="M63.1249 46.2363L58.1249 56.2363C60.4912 57.5257 64.402 58.2343 68.1249 56.2363L63.1249 46.2363ZM45.6249 46.2363L50.6249 56.2363C48.2586 57.5257 44.3477 58.2343 40.6249 56.2363L45.6249 46.2363Z" fill="#147BF5" stroke="#147BF5" strokeWidth="2.02083" strokeLinejoin="round" />
            </svg>
        )
    }
}

export function FlexItem(props: { data: FlexItem }) {
    return (
        <div className="px-6 py-4 bg-white rounded-xl space-y-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Icons name={props.data.icon} />
                    <h3 className="text-xl font-bold">{props.data.title}</h3>
                </div>
                <button type="button" className="border border-white text-gray-400 font-medium text-base hover:bg-white hover:text-primary">{props.data.button.text}</button>
            </div>
        </div>
    )
}

export function PostForm() {
    return (
        <form className='border-2 border-primary p-4 rounded-2xl bg-white space-y-4'>
            <figure className="max-w-sm flex gap-4 items-center rounded-2xl">
                <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="profile"
                    className="w-12 h-12 rounded-full"
                />
                <div className="">
                    <h5 className="text-xl font-semibold text-gray-800">Case of Hit &amp; Run</h5>
                    <p className="text-sm text-gray-600">By Susan</p>
                </div>
            </figure>
            <div className="w-full rounded-xl bg-gray-50 grid grid-cols-[32px_auto]">
                <label htmlFor="postInput">
                    <div className="w-8 h-8 grid place-items-center">
                        <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 19.5H22.5V21H1.5V19.5ZM19.05 6.75C19.65 6.15 19.65 5.25 19.05 4.65L16.35 1.95C15.75 1.35 14.85 1.35 14.25 1.95L3 13.2V18H7.8L19.05 6.75ZM15.3 3L18 5.7L15.75 7.95L13.05 5.25L15.3 3ZM4.5 16.5V13.8L12 6.3L14.7 9L7.2 16.5H4.5Z" fill="#9F9F9F" />
                        </svg>
                    </div>
                </label>
                <textarea name="" id="postInput" cols={30} rows={8} className='w-full bg-gray-50 focus:outline-none p-1 text-base'></textarea>
            </div>
        </form>
    )
}
export function Box() {
    return (
        <div className="bg-white p-5 rounded-xl relative">
            <img src={LawyerImg} alt="lawyer" className='h-full object-contain absolute right-0 top-0' />
            <div className="w-2/3 relative">
                <h4 className="text-2xl font-semibold urbanist text-gray-700">
                    Your matters,
                </h4>
                <h4 className="text-2xl font-semibold urbanist text-[#E98C20]">
                    Our expertise
                </h4>
                <p className="mt-3 text-gray-700">
                    we're your go-to legal experts for everything from Criminal Defense to
                    Business Law and more.
                </p>
                <div className="flex justify-start mt-3">
                    <button
                        type="button"
                        className="text-primary hover:text-white border-2 border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full px-5 py-1 text-center"
                    >
                        Book a call
                    </button>
                </div>
                <div className="flex justify-start mt-4">
                    <button
                        type="button"
                        className="text-start text-[#E98C20] flex items-center gap-1 font-semibold rounded-full"
                    >
                        <svg
                            className="w-4"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1256_20849)">
                                <path
                                    d="M15.9779 8.59985H13.1201C10.6237 8.59985 8.6001 10.6235 8.6001 13.1199V15.9777C12.5401 15.6855 15.6858 12.5398 15.9779 8.59985Z"
                                    fill="#E98C20"
                                />
                                <path
                                    d="M7.40032 15.9777V13.1199C7.40032 10.6235 5.37664 8.59985 2.8803 8.59985H0.0224609C0.314595 12.5398 3.46034 15.6855 7.40032 15.9777Z"
                                    fill="#E98C20"
                                />
                                <path
                                    d="M15.9779 7.39982C15.6858 3.45985 12.5401 0.314106 8.6001 0.0219727V2.87981C8.6001 5.37614 10.6237 7.39982 13.1201 7.39982H15.9779Z"
                                    fill="#E98C20"
                                />
                                <path
                                    d="M7.40032 0.0219727C3.46034 0.314106 0.314595 3.45985 0.0224609 7.39982H2.8803C5.37664 7.39982 7.40032 5.37614 7.40032 2.87981V0.0219727Z"
                                    fill="#E98C20"
                                />
                                <path
                                    d="M5.43311 8.00003C6.54211 7.4459 7.44591 6.54211 7.99999 5.43311C8.55411 6.54211 9.45786 7.4459 10.5669 8.00003C9.45786 8.55411 8.55411 9.4579 7.99999 10.5669C7.44591 9.4579 6.54211 8.55411 5.43311 8.00003Z"
                                    fill="#020202"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1256_20849">
                                    <rect width={16} height={16} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Serenity Lawyers
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function RightBar() {
    return (
        <aside className='w-full lg:w-[28rem] space-y-4'>
            <div className="">
                <PostForm></PostForm>
            </div>
            <Box></Box>
            <Box></Box>
            {FlexList.map((e, i) => <FlexItem data={e} key={i} />)}
        </aside>
    )
}
