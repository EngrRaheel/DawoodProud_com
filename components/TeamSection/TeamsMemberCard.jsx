import React from 'react'
import Image from 'next/image'
import { FaAt } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"
import { FaTwitter } from "react-icons/fa"


function TeamsMemberCard({ name, position, bio, imageUrl }) {
  return (

    <div className='grid grid-cols-1 w-full items-center justify-center  md:max-w-[30vw] lg:max-w-[20vw] bg_testimonials p-5 rounded-3xl font-Inter'>
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] relative mx-auto">
        <Image src='/TeamImg/CEO.jpg' fill className='object-cover rounded-full' alt='CEO'

        ></Image>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 w-full p-4'>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='w-full font-semibold text-base'>{name}</h3>
          <p className='text-sm font-normal '>{position}</p>
          <p className=' w-full font-normal text-xs'>{bio}</p>
        </div>
      </div>
    </div>



  )
};

export default TeamsMemberCard



