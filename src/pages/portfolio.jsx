import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { Images } from '../../next.config';
import Image from 'next/image';
import PorftfoliCard from '../../components/Portfolio/PorftfoliCard';
import TwitterTweet from '../../components/Portfolio/TwitterTweet';
function Portfolio() {
    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <div className="w-full  bg-[#121521]  h-[40vh] md:h-[55vh]">
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1172px] mx-auto'>
                    <div className='flex justify-center items-center space-y-2 py-4 mx-auto w-full mt-3 md:mt-6'>
                        <h1 className=' text-4xl md:text-5xl lg:text-4xl font-bold abdal_color text-center '>
                            {/* Bringing your YouTube vision to life with <br /> creativity, <br />collaboration, <br />cutting-edge technology. */}
                            {/* <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span> */}
                            We love our customers
                            <br />
                            <span>And we're flattered to know they love us!</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mx-w-[1172px] mx-auto'>
                <PorftfoliCard />
            </div>
            <div>
                <TwitterTweet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio