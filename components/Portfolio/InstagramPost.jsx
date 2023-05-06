import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { MdVerified } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai"
function InstagramPost() {
    return (

        <div className='flex flex-col  mx-auto border-[1px] border-[gray]/40 drop-shadow-2xl p-4  rounded-xl' >
            <div className='flex justify-between items-start'  >
                <div className='flex items-center justify-center gap-2'>
                    <div className='relative h-10 w-10  rounded-full  bg-blue'>
                        <Image src={"/Images/YouTubers/alux1.jpg"} alt='logo' className='object-contain rounded-full shadow-sm ' fill />
                    </div>
                    <div className='flex  justify-center items-center gap-1'>
                        <p className='text-sm md:text-base font-semibold text-blue'>Emil Anton</p>
                        <MdVerified color='#1d9bf0' />
                        <p className='text-[gray]/90 text-sm'> <span className='font-bold text-base'>.</span> <span className='text-[#1d9bf0] text-sm font-bold hover:underline'><a href="">Follow</a> </span></p>
                    </div>

                </div>
                <BsThreeDots size={26} color='gray' />
            </div>
            <hr className='w-full bg-[gray]/50 border-none h-[0.5px] mt-3' />
            <div className='text-blue  flex flex-col justify-center items-center gap-2 font-Syne h-[200px] '>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis commodi eaque, enim itaque molestias hic porro dolorem dolorum sint. Accusamus aliquid quae numquam! Vero ad natus voluptate fuga eaque perferendis.
                </p>


            </div>
            <hr className='w-full bg-[gray]/40 border-none h-[0.5px]' />
            <div className='flex justify-between items-center mt-3'>
                <div className='flex justify-start items-center space-x-4 '>
                    <svg aria-label="Like" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                    <svg aria-label="Comment" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title>                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                    <svg aria-label="Share Post" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
                <div>
                    <svg aria-label="Save" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
            </div>

            <div className='text-[black]/90 font-semibold text-[13px] mt-2 font-Noto'>
                <p>
                    <span>242324</span> likes
                </p>
            </div>
            <hr className='w-full bg-[gray]/40 border-none h-[0.5px] mt-3' />
            <div className='flex justify-between items-center mt-3'>
                <p className='text-[12px] text-[gray] font-Inter'>Add a comment...</p>
                <a href="https://www.instagram.com/" target="_blank">
                    <BsInstagram color='gray'/>
                </a>
            </div>
        </div>


    )
}

export default InstagramPost