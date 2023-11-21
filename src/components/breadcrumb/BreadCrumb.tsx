import { Link, useLocation } from "react-router-dom"

export default function BreadCrumb() {
    const location = useLocation()
    const path = location.pathname
    const pathList = path.split("/").filter(e => e)
    function path_to_name(path: string): string {
        if (path.includes("-")) {
            return path.split("-").join(" ")
        }
        return path;
    }

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center text-base font-medium text-gray-500 hover:text-blue-600">Home</Link>
                </li>
                {pathList.map((e, i) =>
                    <li key={i}>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                            </svg>
                            <Link to={e} className="ms-1 text-base font-medium text-gray-500 hover:text-blue-600 md:ms-2 capitalize">{path_to_name(e)}</Link>
                        </div>
                    </li>
                )}
            </ol>
        </nav>
    )
}