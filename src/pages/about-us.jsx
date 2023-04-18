import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab from "../../components/Careers/CareersTab"

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


    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <div className='w-full  bg-[#00438b] h-[50%]'>
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1200px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[15%]'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold '>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col justify-center items-start max-w-[1200px] space-y-10 mb-8 mx-auto'>
                <div className='ml-[8%] md:ml-[10%] lg:ml-[15%]'>
                    <Tab tabs={tabs} />
                </div>


                <div className='flex flex-col justify-center items-center text-[#333333] font-Inter gap-4 w-full max-w-[1024px] mx-auto  p-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[28px]'>About our company</h1>
                        <p className='font-normal text-[16px]'>Ahrefs Pte. Ltd. is a software company that develops online SEO tools and free educational materials for marketing professionals.
                            <br />
                            <br />
                            We are a lean multinational startup headquartered in Singapore that values making meaningful and easy-to-use products.
                            We shift things fast to give our customers what matters most to them, and to keep us ahead of the game.
                            Our motto is "First do it, then do it right, then do it better."
                            <br />
                            <br />

                            Ahrefs' founder and CEO, Dmitry Gerasimenko, built his first document search engine when he was only 15.
                            His interest in search engines never waned and in 2007, he revisited his work on search engines for documents and files.
                            This led to the birth of our backlinks index in 2010, which in turn became the source of data for Ahrefs' first version of Site Explorer.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-semibold text-[28px]'> About our products</h2>
                        <p className='font-normal text-[16px]'>
                            Ahrefs is an all-in-one SEO toolset for growing search traffic and optimizing websites. To do that, Ahrefs crawls the web,
                            stores tons of data and makes it accessible via a simple user interface.
                            <br />
                            <br />
                            When Ahrefs launched its first tool, Site Explorer, it disrupted the stagnant field of backlink analysis and kick-started
                            a new round of competition among SEO tool providers. It quickly became one of the world's best backlink analysis tools.
                            <br />
                            <br />
                            Since then Ahrefs has grown into a complete SEO suite by developing tools like Keywords Explorer for keyword research,
                            Content Explorer for analyzing content, Rank Tracker for monitoring keyword rankings or Site Audit for auditing and optimizing websites.
                            <br />
                            <br />
                            In 2020, we released Ahrefs Webmaster Tools as a free tier to website owners for improving their website's SEO performance.
                            <br />
                            <br />
                            Today, we update our index with the freshest backlinks on the web every 15 minutes, and our crawler processes up to 8 billion pages a day.
                            That's more than a third of what Googlebot does which makes us the 5th most active crawler on the web.
                        </p>
                    </div>
                </div>
            </div>


            <Footer />
        </div >
    )
}

export default careers

