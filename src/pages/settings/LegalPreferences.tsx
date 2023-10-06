import { useLocation } from "react-router-dom"

export default function Language() {
    const location = useLocation()
    const { pathname } = location
    const currentPath = pathname.split('/')[2]

    return (
        <div className="p-4 bg-white rounded-xl">
            <h4 className="text-2xl capitalize font-semibold">{currentPath}</h4>
        </div>
    )
}