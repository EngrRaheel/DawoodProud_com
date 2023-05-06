import React from 'react'
import Image from 'next/image'
// import { FaAt } from "react-icons/fa"
// import { AiFillLinkedin } from "react-icons/ai"
// import { FaTwitter } from "react-icons/fa"


function CEOCard({ name, position, bio, imageUrl }) {
    return (

        <div className='grid grid-cols-1 md:grid-cols-12 justify-center items-center mx-auto max-w-[1172px]  mb-12  sm:ml-[10%]'>
            <div className="w-[190px] sm:w-[300px] h-[230px] sm:h-[200px] relative col-span-5 mx-auto">
                <Image src='/Images/TeamMembers/CEO/dawoodproudceo1.jpg' fill className='object-contain rounded-full' alt='CEO_Img'></Image>
            </div>

            <div className='flex flex-col items-center md:items-start px-6 py-2 col-span-7'>
                <div className='flex flex-col items-center md:items-start mx-auto sm:mx-0 '>
                    <h3 className='w-full font-semibold text-xl md:text-2xl'>{name}</h3>
                    <p className='text-base md:text-base font-light '>{position}</p>
                </div>
                <p className='font-normal text-base md:text-base text-center sm:text-left p-5 sm:p-0 '>{bio}</p>
            </div>


        </div>

    )
};

export default CEOCard


