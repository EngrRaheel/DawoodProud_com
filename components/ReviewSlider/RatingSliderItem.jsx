import Image from 'next/image'
import React from 'react'
import * as Icons from '../../Svg/Icons'
import Rating from '@mui/material/Rating';
const RatingSliderItem = () => {
    // const { rate } = props;
    return (
        <div className='flex flex-col justify-center items-start font-Inter h-[222px] w-[100%]  p-4 relative rounded-lg bg-[#FAFAFA]'>
            <Icons.GoogleIcon ClassName='w-[30px]  h-[30px] absolute top-2 right-2 ' />
            <div className='flex items-center gap-1'>
                <div className='relative h-12 w-12  rounded-[4px] shadow-2xl bg-blue'>
                    <Image src={'/Images/logo.png'} alt='logo' className='object-contain' fill />
                </div>
                <div className=''>
                    <p className='text-blue-600 font-semibold text-[#427fed]'>vincent maiolini</p>
                    <p className='font-Halvic text-[gray]'>11 months ago</p>
                </div>

            </div>
            <div className='mt-4'>
                <Rating readOnly value={5} />
            </div>
            <div className='overflow-auto text-justify pr-1 custom-scroll'>
                <p className='text-left font-Halvic text-[13px] font-normal text-[#222222]'>We chose the Darwood and Tanner specialise implant practice for my wifes dental treatment as we wanted these complex and demanding 
                    procedures conducted by the the most competent and experienced practitioner that I knew. We made a very wise decision, as our whole 
                    experience was one of total satisfaction from our first visit. 
                    Andrew explained the forthcoming treatments, calmly, clearly and concisely, allaying any concerns we had at the time. 
                    The staff were both knowledgeable and most kind and helpful at every visit. The treatments went well without any complications
                     and after the surgical aspects were completed, Susan took over the ongoing prosthetic treatments seamlessly and with equal competence.
                     Achieving an excellent and most satisfactory result with kind and endlessly patient endeavour.We would unreservedly recommend their Dental
                      Practice after our totally positive and enjoyable experience.</p>
            </div>
        </div>
    )
}

export default RatingSliderItem