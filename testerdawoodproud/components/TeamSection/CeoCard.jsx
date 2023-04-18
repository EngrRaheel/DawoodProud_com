import React from 'react'
import Image from 'next/image'
// import { FaAt } from "react-icons/fa"
// import { AiFillLinkedin } from "react-icons/ai"
// import { FaTwitter } from "react-icons/fa"


function CEOCard({ name, position, bio, imageUrl }) {
    return (

        <div className='grid grid-cols-[1fr_1fr] items-center justify-between mx-auto max-w-[1172px] mb-12'>
            <div className="w-[300px] h-[330px] relative ">
                <Image src='/TeamImg/CEO.jpg' fill className='object-cover rounded-3xl' alt='CEO'></Image>
            </div>
            <div className='flex flex-col items-start w-full'>
                <div className='flex flex-col items-start'>
                    <h3 className='w-full font-semibold text-3xl'>{name}</h3>
                    <p className='text-lg font-light '>{position}</p>
                </div>

                <p className='font-normal text-lg text-left'>{bio}</p>

            </div>
        </div>

    )
};

export default CEOCard


