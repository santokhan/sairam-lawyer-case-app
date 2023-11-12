import AppContainer from "../components/AppContainer"
import { Banner2 } from "../components/signup/Banner"
import phoneCodeList from '../components/signup/phoneCode.json'

const SignUp = () => (
    <div className="bg-primary">
        <AppContainer>
            <div className="grid lg:grid-cols-2 place-items-center lg:min-h-screen gap-4 py-4">
                <div className="w-full grid place-items-center p-4">
                    <Banner2 />
                </div>
                <form className="bg-white p-10 space-y-10 rounded-3xl w-full max-w-lg">
                    <div className="space-y-3">
                        <h3 className="text-3xl font-semibold text-gray-800">Welcome to <span className="text-primary">Lawyer Desk</span></h3>
                        <p className="text-gray-700 text-base">Unlock the Future of Legal Assistance. Sign In to Connect, Collaborate with Fellow Lawyers.</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-primary">Create Account/Sign In</h3>
                        <p className="text-gray-700 text-base">Enter your mobile number ,you will receive a 6 digit code for verification</p>
                        <div className="flex gap-4">
                            <select id="countries" className="w-28 bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-gray-600 focus:border-gray-600 block px-2 py-2.5 max-w-sm caret-blue-500">
                                {phoneCodeList.map((e, i) => (<option value={e.countryCode} key={i}>{e.iso.split("/")[0]}+{e.countryCode}</option>))}
                            </select>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-gray-600 focus:border-gray-600 block w-full px-4 py-3 max-w-sm caret-blue-500"
                                placeholder="1718 787 756"
                            />
                        </div>
                    </div>
                    <div className="">
                        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-3 text-base focus:outline-none">
                            Sent OTP
                        </button>
                    </div>
                </form>
            </div>
        </AppContainer>
    </div>
)

export default SignUp