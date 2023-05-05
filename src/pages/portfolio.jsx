import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { Images } from '../../next.config';
import Image from 'next/image';
import PorftfoliCard from '../../components/Portfolio/PortfoliCard';
import TwitterTweet from '../../components/Portfolio/TwitterTweet';
import SiderBar from '../../components/Portfolio/SiderBar';
import PortfoliPage from "../../components/Portfolio/PorfolioPage"


function Portfolio() {
    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <div className="w-full  bg-[#121521]  h-[40vh] md:h-[55vh]">
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1172px] mx-auto'>
                    <div className='flex justify-start items-center space-y-2 py-4  w-full mt-2 md:mt-12'>
                        <h1 className=' text-2xl md:text-5xl lg:text-5xl font-bold abdal_color ml-[8%] '>
                            {/* Bringing your YouTube vision to life with <br /> creativity, <br />collaboration, <br />cutting-edge technology. */}
                            {/* <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span> */}
                            We love our customers
                            <br />
                            <span>And we&#39;re flattered to <br /> know they love us!</span>
                        </h1>
                    </div>
                </div>


            </div>
            <div className='grid  grid-cols-1 sm:grid-cols-12  mt-6 '>
                <div className=' mx-[4%] col-span-3 '>
                    <div className='sticky top-0'>
                        <SiderBar />
                    </div>

                </div>
                <div className='col-span-9 overflow-auto'>
                    <PortfoliPage />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio