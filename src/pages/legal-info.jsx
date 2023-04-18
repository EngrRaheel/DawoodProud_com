import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab from "../../components/Careers/CareersTab"


function LegalInfo() {

    const tabs = [
        {
            label: "What we are",

            link: "/about-us"
        },
        {
            label: "Our team",
            link: "/team"
        },
        {
            label: "Jobs",
            link: "/jobs"
        },
        {
            label: "Media Kit",
            link: "/media-kit"
        },
        {
            label: "Legal Info",
            link: "/legal-info"
        }
    ];


    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <div className='w-full  bg-[#00438b] h-[50%]'>
                <Navbar bg_color={"white"} />
                <div className=' max-w-[768px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[15%]'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold '>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col justify-center items-start max-w-[768px] space-y-10 mb-8'>
                <div className='ml-[8%] md:ml-[10%] lg:ml-[15%]'>
                    <Tab tabs={tabs} />
                </div>


                <div className='flex flex-col justify-center items-start text-[#333333] font-Inter gap-4 w-full  mx-auto ml-[0%] md:ml-[4%] lg:ml-[15%] p-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Terms & Conditions</h1>
                        <p className='font-normal text-[16px]'>
                            This details Ahrefs' Terms of Service on Parties' responsibilities, Rights, Privacy, Subscriptions, Information usage, Cancellation of service and so on.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Privacy Policy</h1>
                        <p className='font-normal text-[16px]'>
                            This details the Types of Data that Ahrefs collects and the mode and place of processing this Data.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Data Processing Addendum</h1>
                        <p className='font-normal text-[16px]'>
                            This details the Processing of Customer Personal Data by Ahrefs.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Security Measures</h1>
                        <p className='font-normal text-[16px]'>
                            This details the processes and measures taken by Ahrefs to maintain the overall security of the Service.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Sub-Processors List</h1>
                        <p className='font-normal text-[16px]'>
                            This details Ahrefs' sub-processors, their services provided, and their locations.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>WordPress Plugin Policy</h1>
                        <p className='font-normal text-[16px]'>
                            This details how Ahrefs collects, uses, and discloses Personal Information for Ahrefs WordPress Plugin users.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>SEO Toolbar Policy</h1>
                        <p className='font-normal text-[16px]'>
                            This details how Ahrefs collects, uses, and discloses Personal Information for Ahrefs SEO Toolbar users.
                        </p>
                    </div>

                </div>
            </div>


            <Footer />
        </div >
    )
}



export default LegalInfo