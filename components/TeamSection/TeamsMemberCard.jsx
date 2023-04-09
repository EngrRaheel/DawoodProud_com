import React from 'react'
import Image from 'next/image'
function TeamsMemberCard({ name, position, bio, imageUrl }) {
  return (


    <div className="flex flex-col w-full gap-32">

      <div className='font-Inter_2 h-[400px]  w-[300px] lg:w-[300px] flex flex-col items-center  rounded-full p-6 '>
        <div class="h-1/2 bg_testimonials w-full rounded-t-3xl"></div>
        <div class="h-1/2 bg-white w-full rounded-b-3xl"></div>
        <div className='-mt-60 '>
          <div className='border-4 rounded-full border-[#ff439780]'>
            <div className="h-28 w-28 rounded-full relative mx-auto border-8 border-white">
              <Image src='/TeamImg/CEO.jpg' fill className='object-cover rounded-full' alt='CEO'></Image>
            </div>
          </div>
          <div className='-mt-40'>
            <div className="px-4 py-5 sm:px-6 relative">
              <h3 className='w-full  text-white font-[800] text-center '>{name}</h3>
              <p className='w-full  text-white font-[800] text-center '>{position}</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <p className='w-full  text-white font-[600] text-center'>{bio}</p>
            </div>
          </div>

        </div>


      </div>
    </div >


  )
};




export default TeamsMemberCard