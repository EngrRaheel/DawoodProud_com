import React from 'react'
// import Image from 'next/image'
import CEOCard from '../../components/TeamSection/CeoCard'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Tab from "../../components/Careers/CareersTab"
import { relative } from 'path'
import TeamMembers from '../../components/TeamSection/TeamMembers'


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

function TeamPage() {
    return (
        <div className='w-full bg-white h-full'>
            <div className='w-full  bg-[#00438b] h-[50vh]'>
                <Navbar bg_color={""} position={relative} />
                <div className=' max-w-[1172px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[4%] md:ml-[8%] lg:ml-[15%] mx-auto'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold '>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1172px] mx-auto flex flex-col justify-center items-start space-y-5  text-center mb-12'>
                <div className='ml-[8%] md:ml-[10%] lg:ml-[15%] mx-auto'>
                    <Tab tabs={tabs} />
                </div>
                <div className='w-full px-3 md:px-8 mx-auto max-w-[800px]'>
                    <CEOCard
                        name="Muhammad Dawood"
                        position="CEO and founder"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team, and keeping constant motivation running alive through each and every team member. 
                             Lorem ipsum dolor sit amet .nostrum autem amet quaerat quae suscipit eveniet
                             sequi iure .molestiae quos voluptates in consectetur . Consectetur?"
                        imageUrl="https://example.com/john-smith.jpg" />
                </div>
                <TeamMembers />
            </div>
            <Footer />
        </div>
    )
}

export default TeamPage