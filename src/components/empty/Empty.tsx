export default function Empty() {
    return (
        <div className="h-full w-full overflow-auto">
            <div className="w-full py-10 flex flex-col items-center justify-center">
                <img alt={"404"} loading="lazy" width={350} height={234} src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg" style={{ color: 'transparent' }} />
                <h1 className="text-lg md:text-3xl text-slate-700 font-medium mt-5">Oops! You seem to be lost</h1>
                <p className="text-sm md:text-lg text-slate-400 text-center font-normal mt-2.5 mb-8 max-w-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <a className="group rounded-md flex h-min w-fit items-center justify-center text-center font-medium text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-4 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100" href="/">
                    <span className="text-base px-5 py-3 flex items-center justify-center cursor-pointer transition-all duration-75 ease-in">Go To Home Page</span>
                </a>
            </div>
        </div>
    )
}