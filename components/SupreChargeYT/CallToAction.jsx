import React from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from "react-icons/fi";

function SuperchargeYT() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center  bg-cover bg-center bg-[url('/Images/calltoaction.webp')] ">
            <div className="w-full  max-w-[1172px] m-auto flex flex-col  gap-14 md:gap-10 lg:gap-12 justify-center items-center ">
                <Image src="/Images/logo.png" width={80} height={60} alt="logo-image" className='object-contain'></Image>
                <div className='flex flex-col justify-center items-center w-[80vw] sm:w-[80vw]  text-center md:gap-6'>
                    <h1 className="w-full text-center text-[40px] md:text-[60px] text-white font-black font-Inter px-4 ">Start A New Project Today</h1>
                    <h2 className='text-[gray] text-[16px] md:text-[22px] lg:text-[24px] font-medium font-Inter px-4'>Dawood Proud Standout from Crowd </h2>
                </div>

                <button className='flex justify-center items-center px-5 py-3 rounded-full bg-[#139DFF] hover:bg-[#3b82f6] text-white font-Inter gap-2'>
                    Start a New Project
                    <svg fill="none" viewBox="0 0 20 21" width="20" class="css-orecyf">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SuperchargeYT
