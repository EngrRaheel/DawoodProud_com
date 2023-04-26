import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab from "../../components/Careers/CareersTab"
import ApplicationForm from '../../components/JobsTab/ApplicationForm'
const tabs2 = [
    {
        label: "Job details",

        link: "/job-details"
    },
    {
        label: "Apply",
        link: "/apply"
    }
]

function Application() {
    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <div className='w-full  bg-[#00438b] h-[50%]'>
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1200px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[6%] lg:ml-[6%]'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold '>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col justify-start items-start max-w-[1200px] space-y-10 mb-8 mx-auto'>
                <div className='ml-[8%] md:ml-[6%] lg:ml-[6%]'>
                    <Tab tabs={tabs2} />
                </div>
                <div className='mx-auto md:ml-[6%] lg:ml-[6%] px-5 sm:px-2'>
                    <ApplicationForm />
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Application