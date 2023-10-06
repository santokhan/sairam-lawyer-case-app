import { useLocation } from "react-router-dom"

export default function Language() {
    const location = useLocation()
    const { pathname } = location
    const currentPath = pathname.split('/')[2]

    const list = [
        { name: "Push" },
        { name: "In App" },
        { name: "Mail" },
    ]

    return (
        <div className="p-4 bg-white space-y-4 rounded-xl">
            <h4 className="text-2xl capitalize font-semibold">{currentPath}</h4>
            <ul className="py-2 space-y-5">
                {list.map((e, i) => (
                    <li className="w-full border rounded-full flex items-center justify-between cursor-pointer py-4 px-5" key={i}>
                        <span className="text-lg text-gray-800">{e.name}</span>
                        <label className="">
                            <div className="w-11 max-w-[2.75rem] h-6 max-h-[1.5rem] flex items-center relative">
                                <input type="checkbox" defaultValue="" className="sr-only peer" />
                                <div className="w-11 max-w-[2.75rem] h-6 max-h-[1.5rem] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}