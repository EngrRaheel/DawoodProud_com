// import Image from 'next/image';
// import React from 'react'
// import Rating from '@mui/material/Rating';
// import * as Icons from '../../Svg/Icons'
// import RatingSliderItem from './RatingSliderItem';
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// // import required modules
// import { Navigation, Autoplay, Pagination } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// const ReviewSlider = () => {
//     return (
//         <div className='w-full bg-blue py-16'>
//             <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row w-full h-full m-auto max-w-[1280px] gap-2 md:gap-2 lg:gap-8 p-4 justify-center items-center sm:items-stretch'>
//                 {/* left portion */}
//                 <div className="flex  font-Halvic rounded-lg p-1 mx-auto bg-white mb-4 w-[80vw] sm:w-[40vw] md:w-[25vw] lg:w-[25vw] flex-1 ">
//                     <div className='w-full flex justify-center items-start gap-6 md:gap-1 lg:gap-2 p-2 md:p-2 lg:p-5 '>
//                         <div className='h-12 w-12 relative bg-blue rounded-lg'>
//                             <Image src={'/Images/logo.png'} alt="" fill className='object-contain'/>
//                         </div>
//                         <div className='flex flex-col gap-1 justify-center items-start'>
//                             <p className='font-bold font-Inter'>Dawood Proud</p>
//                             <div className='flex justify-center items-center'>
//                                 <p className='text-[#e7711b] font-bold text-lg'>5.0</p>
//                                 <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly size='medium'/>
//                             </div>
//                             <p className='text-[gray]'>Based on 63 reviews</p>
//                             <div className='relative h-[14px] md:h-[18px] w-[80px] sx:w-[100px] md:w-[144px]'>
//                                 <Image src={'/Images/poweredByGoogle.webp'} alt='googleimg' className='object-cover' fill />
//                             </div>
//                             <button className=' flex gap-1 text-white shadow-lg items-center justify-center bg-[#1c62e4] hover:bg-[#064bcd] duration-200 py-1 px-2 md:px-3 lg:px-4 rounded-3xl '>
//                                 review us on
//                                 <Icons.GoogleIcon ClassName='bg-white rounded-full' />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* right portion */}
//                 <div className="w-[80vw] sm:w-[50vw] md:w-[70vw] lg:w-[70vw] ">
//                     <Swiper
//                         speed={2000}
//                         autoplay={{
//                             delay: 1500,
//                             disableOnInteraction: false,
//                         }}
//                         // Pagination={true}
//                         // modules={[Pagination]}
//                         Autoplay={true}

//                         // pagination={{
//                         //     clickable: false,
//                         // }}
//                         slidesPerView={1}
//                         spaceBetween={40}
//                         breakpoints={{
//                             480: {

//                                 slidesPerView: 1,
//                                 spaceBetween: 20,

//                             },
//                             768: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 30,
//                             },
//                             1024: {
//                                 slidesPerView: 3,
//                                 spaceBetween: 30,
//                             },
//                             1200: {
//                                 slidesPerView: 3,
//                                 spaceBetween: 40,
//                             },

//                         }}
//                         loop={true}
//                         modules={[Autoplay, Pagination]}
//                         className="MyRatingSlider"
//                     >
//                         {/* {data.map((data, index) => {
//                             return <SwiperSlide key={index}> <RatingSliderItem rate={data.star} /></SwiperSlide>

//                         })} */}
//                         <SwiperSlide > <RatingSliderItem /></SwiperSlide>
//                         <SwiperSlide > <RatingSliderItem /></SwiperSlide>
//                         <SwiperSlide > <RatingSliderItem /></SwiperSlide>
//                         <SwiperSlide > <RatingSliderItem /></SwiperSlide>
//                         <SwiperSlide > <RatingSliderItem /></SwiperSlide>
//                         <SwiperSlide > <RatingSliderItem /></SwiperSlide>


//                     </Swiper>

//                 </div>
//             </div>
//         </div>



//     )
// }


// // const data = [
// //     {
// //         start: 5
// //     },
// //     {
// //         star: 5
// //     },
// //     {
// //         start: 5
// //     },
// //     {
// //         star: 5
// //     },
// //     {
// //         star: 5
// //     },
// //     {
// //         star: 5
// //     },
// //     {
// //         star: 5
// //     },

// // ]


// export default ReviewSlider;


import Image from 'next/image';
import React from 'react'
import Rating from '@mui/material/Rating';
import * as Icons from '../../Svg/Icons'
import RatingSliderItem from './RatingSliderItem';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { AiFillStar } from "react-icons/ai"
import "swiper/css";
import "swiper/css/navigation";
const ReviewSlider = () => {
    return (
        <div className='w-full flex flex-col items-center justify-start p-8 sm:p-6'>
            <div className='w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid:cols-3 xl:grid-cols-4 gap-5'>
                {/* left portion */}
                <div className="w-full h-full flex font-Halvic rounded-lg p-2 md:p-1 mx-auto bg-white ">
                    <div className='w-full h-full grid grid-cols-[40%_60%] justify-center items-start  p-1 md:p-2 lg:p-5 mx-auto '>
                        <div className='h-12 w-12 relative ml-5  rounded-lg'>
                            <Image src={'/Images/logo.png'} alt="" fill className='object-contain' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-start'>
                            <p className='font-bold font-Inter'>Dawood Proud</p>
                            <div className='flex justify-center items-center'>
                                <p className='text-[#e7711b] font-bold text-lg'>5.0</p>
                                <div className='flex flex-wrap justify-start items-center text-[#e7711b]'>
                                    <AiFillStar size={25} />
                                    <AiFillStar size={25} />
                                    <AiFillStar size={25} />
                                    <AiFillStar size={25} />
                                    <AiFillStar size={25} />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-start gap-2'>
                                <p className='text-[gray]'>Based on 63 reviews</p>
                                <div className='relative  h-[20px] w-[130px]'>
                                    <Image src={'/Images/poweredByGoogle.webp'} alt='googleimg' className='object-contain' fill />
                                </div>
                                <button className=' flex gap-1 text-white shadow-lg items-center justify-center bg-[#1c62e4] hover:bg-[#064bcd] duration-200 py-[2px] px-4 md:px-3 lg:px-4 rounded-3xl '>
                                    review us on
                                    <Icons.GoogleIcon ClassName='bg-white rounded-full' />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* sldier tiems here */}
                <div className='w-full col-span-[50%] sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 flex flex-col items-center justify-start'>
                    <Swiper
                        speed={2000}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        // Pagination={true}
                        // modules={[Pagination]}
                        Autoplay={true}

                        // pagination={{
                        //     clickable: false,
                        // }}
                        slidesPerView={1}
                        spaceBetween={40}
                        breakpoints={{
                            480: {

                                slidesPerView: 1,
                                spaceBetween: 20,

                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },

                        }}
                        loop={true}
                        modules={[Autoplay, Pagination]}
                        className="MyRatingSlider"
                    >
                        {/* {data.map((data, index) => {
                            return <SwiperSlide key={index}> <RatingSliderItem rate={data.star} /></SwiperSlide>

                        })} */}
                        <SwiperSlide > <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide > <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide > <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide > <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide > <RatingSliderItem /></SwiperSlide>
                        <SwiperSlide > <RatingSliderItem /></SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </div>




    )
}





export default ReviewSlider;