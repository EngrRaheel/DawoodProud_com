
import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab from "../../components/Careers/CareersTab"
import Link from 'next/link'
import FAQs from '../../components/JobsTab/FAQs'
const tabs2 = [
    {
        label: "Job details",

        link: "/job-details1"
    },
    {
        label: "Apply",
        link: "/apply"
    }
]

function JobDetails() {
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


            <div className='w-full flex flex-col justify-center items-start max-w-[1200px] space-y-10 mb-8 mx-auto '>
                <div className='ml-[8%] md:ml-[6%] lg:ml-[6%] '>
                    <Tab tabs={tabs2} />
                </div>


                <div className='flex flex-col justify-center items-center text-[black] font-Inter gap-4 w-full  mx-auto p-6 '>
                    <div className='flex flex-col gap-2 ml-[8%] md:ml-[6%] lg:ml-[6%]'>
                        <h1 className='font-semibold text-[24px] md:text-[32px] '>Job description</h1>
                        <h2 className='font-semibold text-[32px] md:text-[28px]'>About Us</h2>
                        <p className='font-normal text-[14px] md:text-[20px]'>
                            vidIQs mission is to advance the creators journey with actionable data-driven insights. We pursue this through our values of being creator obsessed,
                            lean and fast, and being scientific.
                            We have already helped millions of creators, and we are looking for stunning co-workers to join us in helping millions more.
                        </p>

                    </div>
                    <div className='flex flex-col gap-2 ml-[8%] md:ml-[6%] lg:ml-[6%]'>
                        <h3 className='font-semibold text-[28px]'> Why Join Us?</h3>
                        <p className='font-normal text-[20px]'>
                            Our work is exciting as we are transforming the creator analytics space. This has provided many of us to work on new and exciting projects. Equally, we’ve set our people up for success by giving them professional development opportunities like courses or conferences that will help them acquire desirable skills/experience.
                            <br />
                            <br />
                            Our company has met the future of work head on, with a fully remote company that allows you flexible hours to balance work & life. schedule for you. When it’s time to go on vacation, we have a time off policy so you can recharge.
                            <br />
                            <br />
                            We are committed to diversity and inclusion. We work hard to enable creators of all kinds to succeed and, to that end, we prioritize diverse talent and an inclusive environment that encourages collaboration and creativity. We’re committed to building a company and a community where people thrive by being themselves and are inspired to do their best work every day.
                            <br />
                            <br />
                        </p>

                        <h3 className='font-semibold text-[28px] '> What you will be doing:</h3>
                        <ul className='font-normal text-[20px] flex flex-col gap-3 list-disc p-4'>

                            <li> Serve as the main point of contact for our YouTube creator customers</li>
                            <li>
                                Learn our product inside and out to help our creators with all of their requests</li>
                            <li>
                                Educate creators about our product and its features</li>
                            <li> Collaborate with cross-functional teams to resolve complex issues</li>
                            <li>   Collaborate with cross-functional teams to resolve complex issues</li>
                            <li>  Translate parts of the extension and app and help center from English into a second (or third!) language</li>
                            <li>   Assist with any additional projects, as needed</li>

                        </ul>

                        <h2 className='font-semibold text-[24px] md:text-[32px]'> Job requirements</h2>
                        <h3 className='font-semibold text-[28px]'> Who you are</h3>
                        <ul className='font-normal text-[20px] flex flex-col gap-3 list-disc p-4'>
                            <li>You live and breathe YouTube and are familiar with YouTube analytics and its ecosystem</li>
                            <li>You love helping others and have experience providing stellar customer support (live chat is a plus)</li>
                            <li>Amazing soft skills: you are kind, courteous, and always willing to go the extra mile for the creators</li>
                            <li>You are a wizard at problem-solving, you can identify the root cause of the issue and you are resilient to ambiguity</li>
                            <li>You have excellent verbal and written communication skills in English. Additional proficiency in Ukrainian or Spanish is a plus</li>
                            <li>You are willing to work weekend shifts</li>
                        </ul>

                    </div>
                    <div className='mx-auto'>
                        <button
                            type="button"
                            class="text-2xl font-semibold border border-indigo-500 bg-[black] text-white rounded-md px-14 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                            <Link href={"/apply"}>Apply</Link>
                        </button>
                    </div>
                    <div className="w-full ml-[8%] md:ml-[6%] lg:ml-[6%]">
                        <FAQs />
                    </div>

                </div>
            </div>


            <Footer />
        </div >

    )
}

export default JobDetails




