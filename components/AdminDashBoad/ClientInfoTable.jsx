import React from 'react'

function ClientInfoTable() {

    const data = {
        name: "Muhammad Raheel Tariq",
        YoutubeName: "tearghsegg",
        URL: "fasgafs",
        subs: "10,001 - 25,000",
        revenue: "$1 - $100",
        email: "ranaraheeltarique@gmail.com",
        phone: "+1 546 436 3336",
        services: ["YouTube Niche Selection", "YouTube Content Creation"],
        contactvia: ["Text"],
        hearaboutus: "Ali Abdaal YouTube Channel",
        createdAt: "2023-05-07T07:31:54.076+00:00",
        updatedAt: "2023-05-07T07:31:54.076+00:00"
    };
    
    return (

        <div class="py-8 w-full ">
            <div class="shadow-sm  border-y-2 border-[gray] h-[full] max-w-full overflow-x-auto">
                <table class="min-w-full bg-white h-full ">
                    <thead class="bg-gray-800 text-[black] overflow-scroll ">
                        <tr className='bg-[#2d3748] text-white text-xs font-medium text-center'>
                            <th class=" py-3 px-4 uppercase ">Name</th>
                            <th class=" py-3 px-4 uppercase ">Channel Name</th>
                            <th class=" py-3 px-4 uppercase ">Phone</th>
                            <th class=" py-3 px-4 uppercase ">Email</th>

                            <th class=" py-3 px-4 uppercase ">Subscribers</th>
                            <th class=" py-3 px-4 uppercase ">Channels URL</th>
                            <th class=" py-3 px-4 uppercase ">contactvia</th>

                            <th class=" py-3 px-4 uppercase ">Services</th>
                            <th class=" py-3 px-4 uppercase ">Revenue</th>
                            <th class=" py-3 px-4 uppercase ">Hear About Us</th>
                            <th class=" py-3 px-4 uppercase ">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {data.map((data, index) => ( */}
                        <tr >
                            <td className="px-4 py-2 truncate">{data.name}</td>
                            <td className="px-4 py-2 truncate">{data.YoutubeName}</td>
                            <td className="px-4 py-2 truncate">{data.phone}</td>
                            <td className="px-4 py-2 truncate">{data.email}</td>

                            <td className="px-4 py-2 truncate">{data.subs}</td>
                            <td className="px-4 py-2 truncate">{data.URL}</td>
                            <td className="px-4 py-2 truncate">{data.contactvia.join(", ")}</td>
                           



                            <td className="px-4 py-2 truncate">{data.services.join(", ")}</td>
                            <td className="px-4 py-2 truncate">{data.revenue}</td>
                            <td className="px-4 py-2 truncate">{data.hearaboutus}</td>
                            
                            <td className="px-4 py-2 truncate">{data.createdAt}</td>

                        </tr>
                        {/* ))} */}
                    </tbody>
                   
                </table>
            </div>
        </div>

    )
}

export default ClientInfoTable