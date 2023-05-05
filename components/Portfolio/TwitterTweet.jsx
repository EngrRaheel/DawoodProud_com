import React from 'react'
// import * as Icons from '../../Svg/Icons'
import { TwitterIcon } from '../../Svg/TwitterIcon'
import Image from 'next/image'
import { AiFillHeart } from "react-icons/ai"
import { TbMessageCircle2Filled } from "react-icons/tb"
import { BsTwitter } from "react-icons/bs"
import { HiOutlineUpload } from "react-icons/hi"
function TwitterTweet() {

    const data = [
        {
            "name": "Emil Anton",
            "username": "@EmilAnton",
            "img": "/Images/YouTubers/alux1.jpg",
            "text": (
                <p>
                    I remember when BuzzFeed turned down the $1 Billion acquisition offer from Disney
                    in 2014 and the company went ahead to be valued at $1.7 Billion in 2016 as the future
                    of internetnews and content.Welcome to the future: Nobody reads internet articles anymore.
                </p>),
            "datetime": "4:00 PM · Sep 10, 2019",
            "likes": "143",
            "read": "1",


        },

    ]
    return (
        <div>

            {data.map((item, index) => (
                <div className='flex flex-col max-w-[400px] mx-auto border-[1px] border-[gray]/40 drop-shadow-2xl p-4  rounded-xl'>
                    <div className='flex justify-between items-start' key={index} >
                        <div className='flex items-center justify-center gap-1'>
                            <div className='relative h-10 w-10  rounded-full  bg-blue'>
                                <Image src={"/Images/YouTubers/alux1.jpg"} alt='logo' className='object-contain rounded-full shadow-sm ' fill />
                            </div>
                            <div className='flex flex-col justify-start items-start'>
                                <p className='text-sm md:text-base font-semibold text-blue'>{item.name}</p>
                                <p className='text-[gray]/90 text-sm'>@EmilAnton <span className='font-bold text-base'>.</span> <span className='text-[#1d9bf0] text-sm font-bold hover:underline'><a href="">Follow</a> </span></p>
                            </div>
                        </div>
                        <BsTwitter size={26} color='#1d9bf0' />
                    </div>
                    <div className='text-blue p-2 flex flex-col justify-start items-start gap-2 font-Syne'>
                        <p>
                            {item.text}
                        </p>
                        <div className='text-[gray]'>
                            {item.date}
                        </div>
                        <hr className='w-full bg-[gray]/50 border-none h-[0.5px]' />
                    </div>
                    <div className='flex justify-around items-center font-bold text-[12px] md:text-[14px] text-[#536471]'>
                        <div className='flex justify-center items-center gap-3  hover:text-[#f91880] hover:underline ' >
                            <AiFillHeart color='#f91880' size={18} className="glowbg1t" />
                            <p>{item.likes}</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 hover:text-[#1d9bf0] hover:underline '>
                            <TbMessageCircle2Filled color='#1d9bf0' size={18} className="glowbg2t" />
                            <p>Reply</p>
                        </div>
                        <div className='flex justify-center items-center gap-3  hover:text-[#00BA7C] hover:underline '>
                            <HiOutlineUpload size={18} className="glowbg3t" />
                            <p>Share</p>
                        </div>
                    </div>
                    <div className='p-1  w-full border-[0.5px] border-[gray]/70 rounded-full mx-auto mt-3 text-[#006fd6] text-center font-bold text-[14px] hover:bg-[#006fd61a]'>
                        <p>Read {item.read} Reply</p>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default TwitterTweet
{/* <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"></path> */ }