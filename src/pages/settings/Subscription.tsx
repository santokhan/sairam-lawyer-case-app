export default function Subscription() {
    const planList = [
        {
            title: "Case Management",
            desc: "1 / 3 Case Utilized (Free Trail Valid Till : 10/08/2023)"
        },
        {
            title: "Document Analysis",
            desc: "2 / 5 Analysis Utilized (Free Trail Valid Till : 10/08/2023)"
        },
        {
            title: "Templates",
            desc: "0 / 1 Templates Utilized (Free Trail Valid Till : 10/08/2023)"
        },
        {
            title: "Legal Opinion",
            desc: "Not Available for Free Trail"
        },
    ]

    return (
        <div className="bg-white p-4 space-y-4 rounded-xl">
            <h1 className='text-2xl capitalize font-semibold'>Subscription Plan</h1>
            <div className="bg-primary p-6 text-white rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="flex items-center text-lg font-medium">Your Subscription</h3>
                    <button type="button" className="border border-white text-white font-medium px-4 py-1.5 rounded-full text-sm hover:bg-white hover:text-primary">Free Trial</button>
                </div>
                <h3 className="flex items-center text-3xl font-semibold">Free Plan</h3>
                <div className="space-y-2">
                    <h5>Addons</h5>
                    <ul className='space-y-4'>
                        {planList.map((e, i) => (
                            <li className='pl-2 border-l-2' key={i}>
                                <h5 className='font-semibold'>{e.title}</h5>
                                <p>{e.desc}</p>
                            </li>)
                        )}
                    </ul>
                </div>
                <div className="py-2 flex justify-center items-center">
                    <button type="button" className="w-10/12 border border-white text-white font-medium px-4 py-2.5 rounded-full text-sm hover:bg-white hover:text-primary">Buy Subscription</button>
                </div>
            </div>
        </div>
    )
}
