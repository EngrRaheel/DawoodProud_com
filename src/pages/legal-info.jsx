import React from 'react'
import Footer from "../../components/Common/Footer"
import Navbar from "../../components/Common/Navbar"
import Tab from "../../components/Careers/CareersTab"


function LegalInfo() {

    const tabs = [
        {
            label: "Who we are",

            link: "/about-us"
        },
        {
            label: "Our Team",
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
            <div className="w-full   bg-[#121521]  h-[40vh] md:h-[55vh]">
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1172px] mx-auto'>
                    {/* <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[15%]'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold '>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div> */}
                    <div className='flex flex-col justify-center items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[12%] mt-3 lg:mt-6'>
                        <h1 className=' text-[30px] md:text-[65px] lg:text-[65px] font-bold font-inter text-[#1ecce4] abdal_color'>
                            Legal Information
                        </h1>
                        <h2 className='text-[12px] sm:text-[16px] md:text-[20px] abdal_color1 font-bold'>Our terms and policies.</h2>
                    </div>
                </div>
            </div>


            <div className='flex flex-col justify-center items-start max-w-[1172px] space-y-10 mb-8 mx-auto'>
                <div className='ml-[4%] md:ml-[10%] lg:ml-[11%] mx-auto'>
                    <Tab tabs={tabs} />
                </div>


                <div className='flex flex-col justify-center items-start text-[#333333] font-Inter gap-4 mx-auto  md:ml-[4%] lg:ml-[15%] p-6 md:p-8 max-w-[1172px]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Terms & Conditions</h1>
                        <p className='font-normal text-[16px]'>
                            This details Dawood Proud&#39;s Terms of Service on Parties&#39; Responsibilities, Rights, Privacy, Subscriptions, Information Usage, Cancellation of Service and so on.
                            <br />
                            <span className='text-[gray]/80'>Last Modified: February 25, 2023</span>
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Privacy Policy</h1>
                        <p className='font-normal text-[16px]'>
                            This details the Types of Data that Our Team collects and the mode and place of processing this Data.
                            <br />
                            <span className='text-[gray]/80'> Last Modified: December 11, 2022</span>

                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Data Processing Addendum</h1>
                        <p className='font-normal text-[16px]'>
                            This details the Processing of Customer Personal Data by our Company.
                            <br />
                            <span className='text-[gray]/80'>Last Modified: March 18, 2021</span>

                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Security Measures</h1>
                        <p className='font-normal text-[16px]'>
                            This details the processes and measures taken by our Company to maintain the overall security of your YouTube Channel.
                            <br />
                            <span className='text-[gray]/80'> Last Modified: April 29, 2023</span>

                        </p>
                    </div>

                </div>
            </div>


            <Footer />
        </div >
    )
}



export default LegalInfo