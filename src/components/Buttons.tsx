import { ReactNode } from "react";

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

type PropsA = { handleClick: () => void, children: ReactNode }

function Blue(props: PropsA) {
    return (
        <button type="button" onClick={props.handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center">
            {props.children}
        </button>
    )
}

function BlueOutline(props: PropsA) {
    return (
        <button type="button" onClick={props.handleClick} className="text-gray-700 hover:text-primary bg-transparent hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-100 font-medium rounded-full text-sm px-5 py-2 text-center border border-gray-700 hover:border-blue-700">
            {props.children}
        </button>
    )
}

const Button = { Blue, BlueOutline }

export default Button;