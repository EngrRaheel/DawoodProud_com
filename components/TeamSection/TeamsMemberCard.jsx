import React from 'react'
import Image from 'next/image'
import { FaAt } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"
import { FaTwitter } from "react-icons/fa"


function TeamsMemberCard({ name, position, bio, imageUrl, site }) {
  return (

    <div className='grid grid-cols-1 w-full items-center justify-center  md:max-w-[30vw] lg:max-w-[20vw] p-3 rounded-xl shadow-2xl  font-Inter max-h-[350px]'>
      <div className="w-[80px] h-[80px] md:w-[80px] md:h-[80px] relative mx-auto ">
        <Image src='/TeamImg/CEO.jpg' fill className='object-cover rounded-full' alt='CEO'
        ></Image>
      </div>
      <div className='flex flex-col justify-center items-center w-full px-3 py-2'>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <div>
            <h3 className='w-full font-bold text-base'>{name}</h3>
            <p className='text-sm font-light '>{position}</p>
          </div>
          <div className='space-y-3'>
            <p className=' w-full font-normal text-xs'>{bio}</p>
            <p className='text-center py-1 px-6 bg-[#139dff]/10 rounded-lg inline-block text-[12px] font-bold'>{site}</p>
          </div>

        </div>
      </div>
    </div>



  )
};

export default TeamsMemberCard



