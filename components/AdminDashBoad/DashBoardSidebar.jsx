import React from 'react'

function DashBoardSidebar() {
    const liItem = [
        {
            "name": "Admin",

        },
        {
            "name": "Client Info",

        },
        {
            "name": "Applicant Info",

        },
        {
            "name": "Blogs",

        },


    ]

    return (
        <div>
            <div className="max-w-xl mx-auto text-blue">
                <aside className="w-full" aria-label="Sidebar">
                    <div className="px-3 py-4 overflow-y-auto rounded-2xl shadow-sm mt-8 text-left">
                        <h2 className='p-2 text-base font-bold ml-4'>Content</h2>
                        <ul className="space-y-2 ">
                            {liItem.map((item, index) =>
                                <li key={index} className="w-full ">
                                    <a href=""
                                        className="p-1 text-sm font-medium text-gray-900 rounded-lg  ">
                                        <span className="ml-3 hover:text-[#1d9bf0]">{item.name}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default DashBoardSidebar