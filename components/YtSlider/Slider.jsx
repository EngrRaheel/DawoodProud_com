import React from 'react'
import SliderItem from './SliderItem';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";
// import testimonialsdata from '../../components/YtSlider/Sliderdata.json';
const YtSlider = () => {


  const channels = [
    {
      "name": "Emil C. Anton",
      "subs": "4.32M",
      "views": "549M",
      "para": (
        <p>
          {"\"Dawood provided a tailored "}
          <span className="text-[#0ECF91]">content</span>
          {" strategy that helped me grow my brand. Highly recommend his services!\""}
        </p>
      ),
      "url": "/Images/sliderSamplepic.jpg",
      "link": "Alux.com"
    },

    {
      "name": "Emil C. Anton",
      "subs": "4.32M",
      "views": "549M",
      "para": (
        <p>
          {"\"Dawood provided a tailored "}
          <span className="text-[#0ECF91]">content</span>
          {" strategy that helped me grow my brand. Highly recommend his services!\""}
        </p>
      ),
      "url": "/Images/sliderSamplepic.jpg",
      "link": "Alux.com"
    },
    {
      "name": "Emil C. Anton",
      "subs": "4.32M",
      "views": "549M",
      "para": (
        <p>
          {"\"Dawood provided a tailored "}
          <span className="text-[#0ECF91]">content</span>
          {" strategy that helped me grow my brand. Highly recommend his services!\""}
        </p>
      ),
      "url": "/Images/sliderSamplepic.jpg",
      "link": "Alux.com"
    },
    {
      "name": "Emil C. Anton",
      "subs": "4.32M",
      "views": "549M",
      "para": (
        <p>
          {"\"Dawood provided a tailored "}
          <span className="text-[#0ECF91]">content</span>
          {" strategy that helped me grow my brand. Highly recommend his services!\""}
        </p>
      ),
      "url": "/Images/sliderSamplepic.jpg",
      "link": "Alux.com"
    },
    {
      "name": "Emil C. Anton",
      "subs": "4.32M",
      "views": "549M",
      "para": (
        <p>
          {"\"Dawood provided a tailored "}
          <span className="text-[#0ECF91]">content</span>
          {" strategy that helped me grow my brand. Highly recommend his services!\""}
        </p>
      ),
      "url": "/Images/sliderSamplepic.jpg",
      "link": "Alux.com"
    },
    {
      "name": "Emil C. Anton",
      "subs": "4.32M",
      "views": "549M",
      "para": (
        <p>
          {"\"Dawood provided a tailored "}
          <span className="text-[#0ECF91]">content</span>
          {" strategy that helped me grow my brand. Highly recommend his services!\""}
        </p>
      ),
      "url": "/Images/sliderSamplepic.jpg",
      "link": "Alux.com"
    },
    {
      "name": "Emil C. Anton",
      "subs": "4.32M",
      "views": "549M",
      "para": (
        <p>
          {"\"Dawood provided a tailored "}
          <span className="text-[#0ECF91]">content</span>
          {" strategy that helped me grow my brand. Highly recommend his services!\""}
        </p>
      ),
      "url": "/Images/sliderSamplepic.jpg",
      "link": "Alux.com"
    }
  ]

  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-[url('/Images/daily_ideas_bg_graphic.webp')] bg-no-repeat">
      <div className=" flex flex-col items-center justify-center gap-4 bg_slider relative ">
        <h2 className='text-white font-Inter text-shadow-light text-[16px] tracking-[.2em] font-bold mt-3 md:mt-6 px-10 text-center'>TRUSTED BY LEADING CREATORS</h2>
        <div className='w-full h-full flex justify-center items-center relative'>

          <Swiper
            speed={2000}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            Autoplay={true}
            // loop={true}
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}

            breakpoints={{
              480: {

                slidesPerView: 1,
                spaceBetween: 20,

              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 40,
              },

            }}




            className="mySwiper"
          >
            {channels.map((item, index) => (
              <SwiperSlide key={index}><SliderItem url={item.url} name={item.name} para={item.para} subs={item.subs} views={item.views} link={item.link} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div >
    </div>
  )
}

export default YtSlider;