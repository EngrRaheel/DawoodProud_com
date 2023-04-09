import React from 'react'
import Image from 'next/image';
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';
import { style } from '@mui/system';

function ServiceCard({ heading, heading2, para, btntext, bgColor, link }) {
    return (
        <div className={`w-full min-h-[100vh] font-Inter text-white  relative ${bgColor} bg_blur_red`}>
            <div className="w-full max-w-[1172px] h-full flex flex-col items-center mx-auto mt-4 space-y-12 md:space-y-20">
                <h1 className=' max-w-auto md:max-w-[580px] font-extrabold text-[28px] md:text-[38px] lg:text-[38px] text-center'>{heading}</h1>
                <div className='flex flex-col md:flex-row justify-between item'>
                    <div className='flex-1 mb-14 md:mb-0'>
                        <div className='w-full h-[500px] relative  '>
                            <Image src={"/Images/cardimage.png"}  alt="" fill className='object-contain '></Image>
                        </div>
                    </div>

                    <div className='w-full flex-1 '>
                        <div className='px-[8%] md:pl-[15%] md:pr-[7%] space-y-6 md:space-y-4 text-center md:text-left flex flex-col justify-center items-start'>
                            <h2 class="font-extrabold text-[24px] md:text-[30px] lg:text-[32px]">{heading2}</h2>
                            <p className='text-[#BCBCBC] font-normal  text-[16px] md:text-[17px] lg:text-[18px] text-start '>{para}</p>
                            <button className='flex justify-center items-center self-center md:self-start text-base font-bold px-4 py-3 rounded-full gap-2 bg-[#139DFF] hover:bg-[#3b82f6]'>
                                <Link rel="stylesheet" href={`${link}`}>{btntext}</Link>
                                <svg fill="none" viewBox="0 0 20 21" width="20" class="css-orecyf">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ServiceCard;

// <div class="flex flex-col items-center mx-auto space-y-20 md:space-y-17">
// <h2 class="max-w-auto md:max-w-[580px] font-extrabold text-product-section-main-sm md:text-product-section-main-md lg:text-product-section-main-lg">Meet the most advanced growth tools for video creators</h2>
// <div class="flex flex-col md:flex-row justify-between ">
//     <div class="flex-1 mb-14 md:mb-0">
//         <div class="md:pr-4 filter drop-shadow-screenshot-img transition duration-500 ease-in-out transform-gpu opacity-0 -translate-x-10"></div>
//     </div>
//     <div class="flex-1">
//         <div class="md:pl-[15%] md:pr-[7%] space-y-6 md:space-y-4 text-center md:text-left">
//             <h3 class="font-extrabold text-product-section-secondary-sm md:text-product-section-secondary-md lg:text-product-section-secondary-lg">Understand what’s working for your channel</h3>
//             <div class="text-gray-500 text-product-section-tertiary-sm md:text-product-section-tertiary-md lg:text-product-section-tertiary-lg">Track and compare your performance in real time so you never miss an opportunity to get more views and make money from your videos.</div>
            // <a type="button" rel="" class="inline-flex items-center justify-center shadow-button rounded-full focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out appearance-none text-center font-bold text-base text-white hover:text-white px-3 py-2 md:px-6 md:py-3 bg-blue-400 hover:bg-blue-450 disabled:hover:bg-blue-400" href="/signup/">
            //     Sign up for free
            //     <span class="inline-flex items-center ml-3">
            //         <style data-emotion-css="orecyf">
            //             .css-orecyf {
            //                 -webkit-flex-shrink: 0;
            //                 -ms-flex-negative: 0;
            //                 flex-shrink: 0;
            //                 -webkit-backface-visibility: hidden;
            //                 backface-visibility: hidden;
            //             }

            //             .css-orecyf:not(:root) {
            //                 overflow: hidden;
            //             }
            //         </style>
            //         <svg fill="none" viewBox="0 0 20 21" width="20" class="css-orecyf">
            //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path>
            //         </svg>
            //     </span>
            // </a>
//         </div>
//     </div>
// </div>