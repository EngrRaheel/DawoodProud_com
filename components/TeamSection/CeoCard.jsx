import React from 'react'
import Image from 'next/image'
// import { FaAt } from "react-icons/fa"
// import { AiFillLinkedin } from "react-icons/ai"
// import { FaTwitter } from "react-icons/fa"


function CEOCard({ name, position, bio, imageUrl }) {
    return (

        <div className='grid grid-col-1 sm:grid-cols-[1fr_1fr] items-center justify-center sm:justify-between mx-auto max-w-[1172px] mb-12'>
            <div className="w-[250px] sm:w-[250px] h-[250px] sm:h-[250px] relative mx-auto">
                <Image src='/TeamImg/CEO.jpg' fill className='object-fill rounded-full' alt='CEO_Img'></Image>
            </div>
            <div className='flex flex-col items-center sm:items-start px-4 py-2'>
                <div className='flex flex-col items-center sm:items-start mx-auto sm:mx-0 '>
                    <h3 className='w-full font-semibold text-xl md:text-2xl'>{name}</h3>
                    <p className='text-base md:text-base font-light '>{position}</p>
                </div>
                <p className='font-normal text-base md:text-base text-center sm:text-left p-5 sm:p-0 '>{bio}</p>
            </div>
        </div>

    )
};

export default CEOCard


