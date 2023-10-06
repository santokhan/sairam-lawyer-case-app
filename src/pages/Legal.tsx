import { BlueButton } from "../components/Buttons";

export default function Legal() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="bg-white p-4 rounded-xl space-y-8">
                <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-3">
                    <svg className="w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.64645 23.0604L3.414 28.2929L2.70711 27.586L7.93955 22.3536L8.79311 21.5H7.586H4.5V20.5H10.5V26.5H9.5V23.414V22.2069L8.64645 23.0604ZM19.5 10.5H25.5V11.5H19.5V10.5ZM19.5 15.5H25.5V16.5H19.5V15.5ZM19.5 20.5H25.5V21.5H19.5V20.5Z" stroke="#147BF5" />
                        <path d="M4 6.5H3.5V7V16.5H2.5V7.00028C2.50046 6.60252 2.65866 6.22118 2.93992 5.93992C3.22118 5.65866 3.60252 5.50046 4.00028 5.5H27.9997C28.3975 5.50046 28.7788 5.65867 29.0601 5.93992C29.3414 6.22124 29.4996 6.60266 29.5 7.0005V24.9995C29.4996 25.3973 29.3414 25.7788 29.0601 26.0601C28.7788 26.3414 28.3973 26.4996 27.9995 26.5H15.5V7V6.5H15H4ZM16.5 25V25.5H17H28.002H28.5021L28.502 24.9999L28.5 6.99994L28.4999 6.5H28H17H16.5V7V25Z" stroke="#147BF5" />
                    </svg>
                    Get assistance from house a wealth of digital legal resources
                </h4>
                <form className="space-y-4">
                    <textarea name="" id="" rows={5} className="border w-full rounded-xl p-4" placeholder="Search anything about new updates, statutes, regulations"></textarea>
                    <div className="flex justify-center"><BlueButton><span className="text-base">Search Library</span></BlueButton></div>
                </form>
            </div>
            <div className="bg-white p-4 rounded-xl space-y-4">
                <h4 className="text-lg font-semibold text-gray-700">Recent Studies</h4>
                <figure className="space-y-4">
                    <img
                        src="/assets/images/law-library/document-analyzer.png"
                        alt="library"
                        className="h-48 object-contain mx-auto py-4"
                    />
                    <figcaption className="space-y-2 p-2">
                        <h4 className="text-lg font-semibold text-primary text-center">
                            Looks like this is your first time.
                        </h4>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}