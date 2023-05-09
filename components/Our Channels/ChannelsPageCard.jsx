import React from 'react'
import Image from 'next/image'

function ChannelCard({ channleURL, ChannelName, para, SectionId, list }) {


    return (
        <div className='flex flex-col justify-center items-center mb-12 font-Inter ' id={SectionId}>
            <div className='flex flex-col justify-start items-center md:items-start text-blue w-full mx-auto space-y-4 font-Inter mt-12 h-full'>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold ml-5'>{ChannelName}</h2>
                <div className=' flex flex-col items-start  w-full max-w-[1072px] '>
                    <div className='flex flex-col gap-4 px-8  mb-6 md:mb-0 md:p-2 text-sm md:text-base lg:text-lg drop-shadow-lg border-1 border-[gray] ml-0 sm:ml-4 text-center md:text-left'>
                        <div>
                            {para}
                        </div>
                        <div className='ml-12 mt-4'>
                            {list}
                        </div>
                    </div>
                </div>
                <div className='relative w-[100%] h-[300px] sm:h-[380px] md:h-[450px] mx-auto px-1 shadow-md' >
                    {channleURL}
                </div>
            </div>
        </div>
    )
}

export default ChannelCard
