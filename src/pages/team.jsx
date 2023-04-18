import React from 'react'
// import Image from 'next/image'
import CEOCard from '../../components/TeamSection/CeoCard'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Tab from "../../components/Careers/CareersTab"
import { relative } from 'path'
import TeamsMemberCard from '../../components/TeamSection/TeamsMemberCard'

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

function TeamMembers() {
    return (
        <div className='w-full bg-white h-full'>
            <div className='w-full  bg-[#00438b] h-[50vh]'>
                <Navbar bg_color={""} position={relative} />
                <div className=' max-w-[1200px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[4%] md:ml-[8%] lg:ml-[15%] mx-auto'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold '>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1200px] mx-auto flex flex-col justify-center items-start space-y-5  text-center'>
                <div className='ml-[8%] md:ml-[10%] lg:ml-[15%] mx-auto'>
                    <Tab tabs={tabs} />
                </div>

                <div className='w-full px-8 mx-auto'>
                    <CEOCard
                        name="Muhammad Dawood"
                        position="CEO and founder"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                            He is the one driving the team, and keeping constant motivation running alive through each and every team member. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, commodi non, nostrum autem amet quaerat quae suscipit eveniet
                            sequi iure .molestiae quos voluptates in consectetur . Consectetur?"
                        imageUrl="https://example.com/john-smith.jpg" />
                </div>

                <div className='flex flex-col font-Inter justify-center items-center bg-white px-20 space-y-1 py-2 rounded-3xl  mx-auto'>
                    <h1 className='text-[black] text-xl font-bold '>Our Team Members</h1>
                    <p className='text-base font-normal'>Meet Our Team!</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-4 mx-auto'>
                    <p className='font-bold text-3xl'>Teams Heads</p>
                    <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                    </div>
                </div>

                <hr className="w-full my-8 sm:my-12" />

                <div className='flex flex-col justify-center items-center gap-4 mx-auto'>
                    <p className='font-bold text-3xl'>Optiomizattion Experts</p>
                    <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                    </div>
                </div>


                <hr className="w-full my-8 sm:my-12" />


                <div className='flex flex-col justify-center items-center gap-4 mx-auto'>
                    <p className='font-bold text-3xl'>Editors</p>
                    <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                        <TeamsMemberCard
                            name="Muhammad Dawood"
                            position="Software Engineer"
                            bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                            imageUrl="https://example.com/john-smith.jpg" />
                    </div>

                    <hr className="w-full my-8 sm:my-12" />


                    <div className='flex flex-col justify-center items-center gap-4 mx-auto'>
                        <p className='font-bold text-3xl'>Content Writers</p>
                        <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                            <TeamsMemberCard
                                name="Muhammad Dawood"
                                position="Software Engineer"
                                bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                imageUrl="https://example.com/john-smith.jpg" />
                            <TeamsMemberCard
                                name="Muhammad Dawood"
                                position="Software Engineer"
                                bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                imageUrl="https://example.com/john-smith.jpg" />
                            <TeamsMemberCard
                                name="Muhammad Dawood"
                                position="Software Engineer"
                                bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                imageUrl="https://example.com/john-smith.jpg" />
                            <TeamsMemberCard
                                name="Muhammad Dawood"
                                position="Software Engineer"
                                bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                imageUrl="https://example.com/john-smith.jpg" />
                        </div>

                        <hr className="w-full my-8 sm:my-12" />



                        <div className='flex flex-col justify-center items-center gap-4 mx-auto'>
                            <p className='font-bold text-3xl'>Thumbnail Designers</p>
                            <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                                <TeamsMemberCard
                                    name="Muhammad Dawood"
                                    position="Software Engineer"
                                    bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                    imageUrl="https://example.com/john-smith.jpg" />
                                <TeamsMemberCard
                                    name="Muhammad Dawood"
                                    position="Software Engineer"
                                    bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                    imageUrl="https://example.com/john-smith.jpg" />
                                <TeamsMemberCard
                                    name="Muhammad Dawood"
                                    position="Software Engineer"
                                    bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                    imageUrl="https://example.com/john-smith.jpg" />
                                <TeamsMemberCard
                                    name="Muhammad Dawood"
                                    position="Software Engineer"
                                    bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                    imageUrl="https://example.com/john-smith.jpg" />
                            </div>


                            <hr className="w-full my-8 sm:my-12" />


                            <div className='flex flex-col justify-center items-center gap-4 mx-auto mb-6'>
                                <p className='font-bold text-3xl'>Voice Artist</p>
                                <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                                    <TeamsMemberCard
                                        name="Muhammad Dawood"
                                        position="Software Engineer"
                                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                        imageUrl="https://example.com/john-smith.jpg" />
                                    <TeamsMemberCard
                                        name="Muhammad Dawood"
                                        position="Software Engineer"
                                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                        imageUrl="https://example.com/john-smith.jpg" />
                                    <TeamsMemberCard
                                        name="Muhammad Dawood"
                                        position="Software Engineer"
                                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                        imageUrl="https://example.com/john-smith.jpg" />
                                    <TeamsMemberCard
                                        name="Muhammad Dawood"
                                        position="Software Engineer"
                                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                          He is the one driving the team, and keeping constant motivation running alive through each and every team member."
                                        imageUrl="https://example.com/john-smith.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TeamMembers