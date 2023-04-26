import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab2 from "../../components/JobsTab/JobsTab"
import Tab from "../../components/Careers/CareersTab"
import Image from 'next/image'
import Link from 'next/link'
import JobClosedBtn from '../../components/JobsTab/JobClosedPop'

function careers() {

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

    return (
        <div className='w-full  font-Inter text-white bg-white min-h-screen h-full'>
            <div className='w-full  bg-[#054ada] h-[55vh]'>
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1172px] mx-auto'>
                    <div className='flex flex-col justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[12%]'>
                        <h1 className=' text-[60px] md:text-[75px] lg:text-[90px] font-normal font-IBM_plex '>
                            Join the Team
                            {/* <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span> */}
                        </h1>
                        <h2 className='text-[22px]'>First do it, then do it right, then do it better.</h2>
                    </div>

                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-start max-w-[1172px] mx-auto '>
                <div className='ml-[8%] md:ml-[10%] lg:ml-[11%]'>
                    <Tab tabs={tabs} />
                </div>

                <hr className='w-[30%]' />
                <div className='flex flex-col justify-center items-center text-[#333333] font-Inter max-w-[900px] gap-2 mx-auto ml-[0%] md:ml-[10%] lg:ml-[12%]'>
                    <div className='flex flex-col justify-center items-start gap-3 w-full self-start p-5'>
                        <h2 className='font-semibold text-[44px] md:text-[56px]'>Why work at Dawood Proud</h2>
                        <p className='font-normal text-[14px] md:text-[16px] font-Inter'>Join the thrilling, flat hierarchy at Dawood Proud! Our motto: &quot;do it, do it right, do it better&quot;. Let&#39;s soar to success together!
                            <br />
                            <br />
                            We&#39;re always exploring growth opportunities, so there&#39;s lots of potential to take on new tasks and help shape the company. Individually, the ability to make informed, independent decisions while justifying how they add value to the business is highly prized.
                            <br />
                            <br />

                            As for the team itself, well... one of our newest hires described us as &quot;offbeat&quot;, so let&#39;s run with that. We&#39;re kind of an offbeat mix of people from all walks of life, who collectively enjoy technology and challenges.
                            <br />
                            <br />
                            Join us?
                        </p>
                    </div>
                    <div className='w-[300px] xs:w-[400px] sm:w-[500px] md:w-[680px] h-[300px] xs:h-[300px] sm:h-[300px] md:h-[400px] relative '>
                        <Image src={"/Images/jobs.svg"} fill className='object-contain' alt='jobimage'></Image>
                    </div>
                </div>
                <div className='mx-auto flex flex-col justify-start items-start gap-12 mb-6  md:ml-[10%] lg:ml-[15%] max-w-[900px] p-3'>
                    <div className=''>
                        <h3 className='text-[black] text-[28px] sm:text-[32px] md:text-[44px] font-semibold'>Open positions</h3>
                    </div>
                    <div className='text-[black] max-w-[600px]'>
                        <div className='border-2 border-solid border-[black]/20 grid grid-cols-[2fr_1fr] justify-between items-start sm:items-center px-3 md:px-3 py-3 md:py-6 shadow-md'>
                            <div className='flex flex-col '>
                                <p className='text-[16px] md:text-[20px] font-semibold'>YouTube Growth Stratagist — In-Office</p>
                                <p className='text-[14px] md:text-[16px] font-normal'>Onsite • G-11,Islamabad , Pakistan</p>
                            </div>
                            <div className='mx-auto '>
                                <button
                                    type="button"
                                    class="border border-indigo-500 text-[12px] md:text-[14px] bg-[black] text-white rounded-md  px-3 md:px-6 py-2 md:py-3  md:m-2  focus:outline-none focus:shadow-outline">
                                    <Link href={"/job-detailsOpen"}>Job details</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto flex flex-col justify-start items-start gap-12 mb-20  md:ml-[10%] lg:ml-[15%] max-w-[900px] p-3 '>
                    <div className=''>
                        <h3 className='text-[black] text-[28px] sm:text-[32px] md:text-[44px] font-semibold'>Closed positions</h3>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 text-[black] mx-auto gap-4 md:gap-8'>
                        <div className='border-1 border-solid border-[black] grid grid-cols-[2fr_1fr] justify-between items-center px-3 md:px-3 py-3 md:py-6 shadow-md'>
                            <div className='flex flex-col '>
                                <p className='text-[16px] md:text-[20px] font-semibold'>YouTube Content Writer — In-Office</p>
                                <p className='text-[14px] md:text-[16px] font-normal'>Onsite • G-11, Islamabad , Pakistan</p>
                            </div>
                            <button className='mx-auto' type='button'>
                                <JobClosedBtn />
                            </button>

                        </div>
                        <div className='border-1 border-solid border-[black] grid grid-cols-[2fr_1fr] justify-between items-center px-3 md:px-3 py-3 md:py-6 shadow-md'>
                            <div className='flex flex-col '>
                                <p className='text-[16px] md:text-[20px] font-semibold'>YouTube Video Creator — In-Office</p>
                                <p className='text-[14px] md:text-[16px] font-normal'>Onsite • G-11, Islamabad , Pakistan</p>
                            </div>
                            <div className='mx-auto '>
                                <button className='mx-auto' type='button'>
                                    <JobClosedBtn />
                                </button>
                            </div>
                        </div>
                        <div className='border-1 border-solid border-[black] grid grid-cols-[2fr_1fr] justify-between items-center px-3 md:px-3 py-3 md:py-6 shadow-md'>
                            <div className='flex flex-col '>
                                <p className='text-[16px] md:text-[20px] font-semibold'>YouTube Thumbnail Designer — In-Office</p>
                                <p className='text-[14px] md:text-[16px] font-normal'>Onsite • G-11, Islamabad , Pakistan</p>
                            </div>
                            <div className='mx-auto '>
                                <button className='mx-auto' type='button'>
                                    <JobClosedBtn />
                                </button>
                            </div>
                        </div>
                        <div className='border-1 border-solid border-[black] grid grid-cols-[2fr_1fr] justify-between items-center px-3 md:px-3 py-3 md:py-6 shadow-md'>
                            <div className='flex flex-col '>
                                <p className='text-[16px] md:text-[20px] font-semibold'>Voice Over Artist — In-Office</p>
                                <p className='text-[14px] md:text-[16px] font-normal'>Onsite • G-11, Islamabad , Pakistan</p>
                            </div>
                            <div className='mx-auto '>
                                <button className='mx-auto' type='button'>
                                    <JobClosedBtn />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default careers

{/* <div className='border-1 border-solid border-[black] grid grid-cols-[2fr_1fr] justify-between items-center p-4 shadow-md'>
                            <div className='flex flex-col '>
                                <p className='text-[20px] font-semibold'>YouTube Growth Stratagist — Onsite</p>
                                <p className='text-[16px] font-normal'>Onsite • G-11/1,Islamabad , Pakistan</p>
                            </div>
                            <div className='mx-auto '>
                                <button
                                    type="button"
                                    class="border border-indigo-500 bg-[black] text-white rounded-md px-6 py-3 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                    <Link href={"/job-details1"}>Job details</Link>
                                </button>
                            </div>
                        </div> */}