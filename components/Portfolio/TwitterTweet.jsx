import React from 'react'
// import * as Icons from '../../Svg/Icons'
import { TwitterIcon } from '../../Svg/TwitterIcon'
import Image from 'next/image'
import { AiFillHeart } from "react-icons/ai"
import { BiMessageRounded } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
function TwitterTweet() {
    return (
        <div>
            <div className='flex flex-col max-w-[400px] mx-auto border-[1.5px] border-[gray]/40 drop-shadow-2xl p-4 shadow-2xl rounded-2xl'>
                <div className='flex justify-between items-start' >
                    <div className='flex items-center justify-center gap-1'>
                        <div className='relative h-10 w-10  rounded-full  bg-blue'>
                            <Image src={"/Images/YouTubers/alux1.jpg"} alt='logo' className='object-contain rounded-full shadow-2xl drop-shadow-lg' fill />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-base font-semibold text-blue'>Emil Anton</p>
                            <p className='text-[gray]/90 text-sm'>@EmilAntond <span className='font-bold text-base'>.</span> <span className='text-[#1d9bf0] text-sm font-bold'><a href="">Follow</a> </span></p>
                        </div>
                    </div>
                    <BsTwitter size={30} color='#1d9bf0'/>
                </div>
                <div className='text-blue p-2 flex flex-col justify-start items-start gap-2 font-Syne'>
                    <p>I remember when BuzzFeed turned down the $1 Billion acquisition offer from Disney in 2014
                        and the company went ahead to be valued at $1.7 Billion in 2016 as the future of internet
                        news and content.
                        Welcome to the future: Nobody reads internet articles anymore.</p>
                    <div className='text-[gray]'>
                        4:00 PM · Sep 10, 2019
                    </div>
                    <hr className='w-full bg-[gray]/50 border-none h-[0.5px]' />
                </div>
                <div>
                    <AiFillHeart color='#f91880' />
                    <BiMessageRounded />
                </div>
            </div>
        </div>
    )
}

export default TwitterTweet