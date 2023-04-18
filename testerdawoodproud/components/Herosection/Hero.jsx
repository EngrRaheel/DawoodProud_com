import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";
import { height } from "@mui/system";

function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center font-Inter  bg-cover bg-center bg-[url('/Images/hero_bg.webp')] ">
      <Navbar bg_color={"bg-gradient-to-b from-[#121521] to-[#121521]/0"} position={'fixed'} />
      {/* hero section text and images div */}

      <div className="h-full font-Inter  max-w-[1172px] relative z-[1] w-full -mt-[10vh] sm:-mt-[15vh] lg:mt-3  pt-32 lg:pt-20 pb-28 lg:pb-18  ">

        <div className="h-full w-full max-w-[1172px] text-white  flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between gap-0 xl:gap-8 mx-auto sm:px-10  space-y-12 lg:space-y-0 ">

          {/* hero section text */}
          <div className="lg:w-[60%] space-y-1 flex flex-col justify-center text-center content-center xl:text-left mx-auto my-auto ">
            <div className="my-auto space-y-[-16px]">
              <h1 className=" font-extrabold text-white  text-[44px] md:text-[40px] xl:text-[60px]">Dawood Proud</h1>
              <h2 className=" font-medium md:font-semibold  xl:font-bold text-white text-[30px]  md::text-[40px] lg:text-[40px] xl:text-[40px]  ">Stand Out from Crowd</h2>
            </div>
            {/* text-[#07e092] */}
            <p className="self-center xl:self-start max-w-[80%] md:max-w-[70%] xl:max-w-[90%] font-medium md:font-semibold  lg:font-medium text-white text-[20px] leading-[28px]  md:leading[30px] md:text-[22px] lg:leading-[27px]">Ultimate Destination for all YouTube <span className="">Growth Services</span></p>
          </div>

          {/* hero image here */}
          {/* <div className=" w-full max-w-none md:max-w-[424px] lg:max-w-none mx-0 md:mx-auto lg:mx-0 "> */}
          <div className="relative  h-[300px] w-[350px] xs:h-[400] xs:w-[500px] sm:h-[500px] sm:w-[600px] md:h-[300px] md:w-[500px] lg:h-[300px] lg:w-[800px]">
            <Image src={'/Images/Hero Image.png'} fill alt="heroimg " className="object-contain" ></Image>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


{/* <div class="jsx-255009a5b212df4c relative z-[1] w-full lg:mt-0 pt-32 lg:pt-48 pb-28 lg:pb-18">
<div class="jsx-255009a5b212df4c flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:page-section-container mx-auto sm:px-10 space-y-12 lg:space-y-0">
    <div class="jsx-255009a5b212df4c lg:w-7/12 space-y-6 px-4 lg:px-0 max-w-none md:max-w-[460px] lg:max-w-none text-center lg:text-left">
        <h1 class="font-extrabold text-hero-main-sm md:text-hero-main-md lg:text-hero-main-lg">Designed to boost your YouTube views</h1>
        <h2 class="px-2 lg:px-0 max-w-none lg:max-w-[490px] font-normal lg:font-medium text-hero-sub-sm md:text-hero-sub-md lg:text-hero-sub-lg">Get free insights and guidance to keep your YouTube channel growing.</h2>
    </div>
    <div class="jsx-255009a5b212df4c lg:w-5/12 page-section-container lg:max-w-[422px]">
        <form class="w-full flex flex-col space-y-3 lg:space-y-4 max-w-none md:max-w-[424px] lg:max-w-none mx-0 md:mx-auto lg:mx-0 w-full flex flex-col space-y-3 lg:space-y-4 lg:pt-4 max-w-none md:max-w-[424px] lg:max-w-none mx-0 md:mx-auto lg:mx-0 lg:pt-4">
            <button type="button" class="appearance-none text-center rounded-full flex items-center shadow-button text-sm md:text-base font-medium focus:outline-none focus:ring-4 disabled:opacity-50 transition duration-150 ease-in-out bg-white/10 border-blue-400 text-white hover:bg-white hover:text-brand-black border-2 py-3 px-4 justify-center w-full h-[52px]">
                <div class="flex items-center mx-auto gap-2 lg:gap-3">
                    <div class="w-5 h-5 lg:w-7 lg:h-7">
                        <svg viewBox="0 0 18 18" class="css-0">
                            <g fill="#000" fill-rule="evenodd">
                                <path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path>
                                <path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path>
                                <path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path>
                                <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path>
                                <path fill="none" d="M0 0h18v18H0z"></path>
                            </g>
                        </svg>
                    </div>
                    <span class="inline-block">Sign up with your Google account</span>
                </div>
            </button>
            <div class="w-full text-center font-medium text-white text-base">
                <span class="block -my-1">OR</span>
            </div>
            <div class="field">
                <input type="email" placeholder="Enter your email address" autocomplete="email" class="w-full rounded-full focus:text-brand-black text-base font-medium focus:outline-none transition duration-300 ease-in-out bg-white/10 hover:bg-white/20 focus:bg-white px-4 py-3 border-blue-400 border-2 text-center text-white focus:ring-4 placeholder-white focus:placeholder-brand-black/60">
            </div>
            <div class="field">
                <input type="password" placeholder="Enter a password" autocomplete="new-password" class="w-full rounded-full focus:text-brand-black text-base font-medium focus:outline-none transition duration-300 ease-in-out bg-white/10 hover:bg-white/20 focus:bg-white px-4 py-3 border-blue-400 border-2 text-center text-white focus:ring-4 placeholder-white focus:placeholder-brand-black/60">
            </div>
            <button type="submit" class="inline-flex items-center justify-center shadow-button rounded-full focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out appearance-none text-center font-bold text-base text-white hover:text-white px-3 py-2 md:px-6 md:py-3 bg-blue-400 hover:bg-blue-450 disabled:hover:bg-blue-400 transform-gpu h-[52px] -translate-y-hero-form-field-sm lg:-translate-y-hero-form-field-lg">
                Sign up
                <span class="inline-flex items-center ml-3">
                    <style data-emotion-css="orecyf">
                        .css-orecyf {
                            -webkit-flex-shrink: 0;
                            -ms-flex-negative: 0;
                            flex-shrink: 0;
                            -webkit-backface-visibility: hidden;
                            backface-visibility: hidden;
                        }

                        .css-orecyf:not(:root) {
                            overflow: hidden;
                        }
                    </style>
                    <svg fill="none" viewBox="0 0 20 21" width="20" class="css-orecyf">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path>
                    </svg>
                </span>
            </button>
            <div class="max-w-[80%] mx-auto text-gray-400 text-center transform-gpu transition duration-300 ease-in-out -translate-y-hero-form-field-sm lg:-translate-y-hero-form-field-lg text-sm">
                <p>
                    By signing up, I agree to vidIQ’s<br>
                    <a href="/terms/" class="text-white hover:text-white/80 underline">Terms of Service</a>
                    and <a href="/privacy/" class="text-white hover:text-white/80 underline">Privacy Policy</a>
                </p>
            </div>
        </form>
    </div>
</div> */}