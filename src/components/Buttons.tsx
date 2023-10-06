export function BlueButton(props: any) {
    return (
        <button type="button" onClick={props.handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
            {props.children}
        </button>
    )
}

export function GrayButton(props: any) {
    return (
        <button type="button" onClick={props.handleClick} className="text-white bg-gray-400 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
            {props.children}
        </button>
    )
}