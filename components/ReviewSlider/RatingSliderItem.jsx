import Image from 'next/image'
import React from 'react'
import * as Icons from '../../Svg/Icons'
import Rating from '@mui/material/Rating';
const RatingSliderItem = ({ ImgUrl, name, months, para }) => {
    // const { rate } = props;
    return (
        <div className='flex flex-col justify-center items-start font-Halvic h-[222px] w-[100%]  p-4 relative rounded-lg bg-[#FAFAFA]'>
            <Icons.GoogleIcon ClassName='w-[30px]  h-[30px] absolute top-2 right-2 ' />
            <div className='flex items-center gap-1'>
                <div className='relative h-10 w-10  rounded-full  bg-blue'>
                    <Image src={ImgUrl} alt='logo' className='object-contain rounded-full shadow-2xl' fill />
                </div>
                <div className=''>
                    <p className='text-sm font-semibold text-[#427fed]'>{name}</p>
                    <p className='font-Halvic text-[gray] text-sm'>{months}</p>
                </div>

            </div>
            <div className='mt-4'>
                <Rating readOnly value={5} />
            </div>
            <div className='overflow-auto text-justify pr-1 custom-scroll'>
                <p className='text-left font-Halvic text-[13px] font-normal text-[#222222]'>{para}</p>
            </div>
        </div>
    )
}

export default RatingSliderItem