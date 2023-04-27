import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab from "../../components/Careers/CareersTab"
import Image from 'next/image'


function MediaKit() {


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
            <div className="w-full bg-cover bg-center  bg-[url('/Images/main-bg1.jpg')]  h-[30vh] md:h-[55vh]">
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1172px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[5%] md:ml-[10%] xl:ml-[15%]'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold '>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col justify-center items-start max-w-[1172px] space-y-10 mb-8 mx-auto'>
                <div className='ml-[5%] md:ml-[10%] xl:ml-[15%]'>
                    <Tab tabs={tabs} />
                </div>


                <div className='flex flex-col justify-around text-[#333333] font-Inter gap-4 w-full  mx-auto self-start p-6'>
                    <div className='flex flex-col  items-start justify-start space-y-12 ml-[6%] sm:ml-[10%] md:ml-[10%] xl:ml-[15%]'>
                        <div className='grid xs:grid-cols-2 md:grid-cols-3 items-center md:items-start justify-center md:justify-start gap-2 sm:gap-3 lg:gap-4 xl:gap-12  mx-auto'>
                            <div className='relative w-[260px] xs:w-[200px] sm:w-[230px]  lg:w-[250px] xl:w-[280px] h-[280px]'>
                                <Image src={"/Images/Logosahref/DP1.png"} fill className="object-contain" alt='jobi1mage1'></Image>
                            </div>
                            <div className=' relative w-[260px] xs:w-[200px] sm:w-[230px] lg:w-[250px] xl:w-[280px] h-[280px] '>
                                <Image src={"/Images/Logosahref/DP2.png"} fill className='object-contain' alt='jobi1mage2'></Image>
                            </div>
                            <div className=' relative w-[260px] xs:w-[200px] sm:w-[230px]  lg:w-[250px] xl:w-[280px] h-[280px]'>
                                <Image src={"/Images/Logosahref/DP3.png"} fill className='object-contain' alt='j1obimage3'></Image>
                            </div>
                        </div>
                        <button className='bg-[#ff8800] text-[#fff] px-[1rem] py-[6px] rounded-[3px] hover:bg-[#ea7e02] '>Download logo Kit</button>

                    </div>
                    {/* <div className='flex flex-col gap-2 max-w-[768px] self-start ml-[5%] md:ml-[10%] xl:ml-[15%]'>
                        <h1 className='font-semibold text-[28px]'>About us</h1>
                        <p className='font-normal text-[16px]'>Ahrefs builds online SEO tools and creates free learning materials that help millions of website owners around the globe to get more traffic from search engines.
                            <br />
                            <br />
                            For over 10 years now, Ahrefs has been crawling the web, storing and processing petabytes of data and fine-tuning a simple, intuitive user interface. Its now widely regarded as both a must-have for top marketing professionals and a trusted friend to small business owners.
                            <br />
                            <br />
                            Ahrefs tools and features cover most essential SEO needs like competitor research, keyword research, site auditing, rank tracking and much, much more.
                            <br />
                            <br />
                            The company was founded in 2010 by Dmitry Gerasimenko and is headquartered in Singapore.
                        </p>
                    </div> */}

                </div>
            </div>


            <Footer />
        </div >
    )
}



export default MediaKit