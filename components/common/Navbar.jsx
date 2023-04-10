// import React from "react";
import Image from "next/image";
import Link from "next/link";
// import component 👇
import Drawer from "react-modern-drawer";
import { Spin as Hamburger } from 'hamburger-react';// hamburger 
import { RxCross2 } from "react-icons/rx";
// import { Sling as Hamburger } from 'hamburger-react'
//import styles 👇
import "react-modern-drawer/dist/index.css";
// assets
import { IoMdArrowDropdown } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";


import React, { useState } from "react";


const navItems = [
  {
    id: 1,
    Name: "Home",
    Route: "/",
  },
  {
    id: 2,
    Name: "Services",
    Route: "#Services",
    hasDropdown: true,
    selected: true,
    // dropdownItems: ["YouTube Keywords Research", "My Coach", "Keyword Tools", "Competitors Tools", "Channel Audit Tools", "All Feature"]
    dropdownItems: [
      {
        name: "YouTube Consultation",
        path: "/youtube-consultation"
      },
      {
        name: "YouTube SEO",
        path: "/youtube-seo"
      },
      {
        name: "YouTube Keyword Research",
        path: "/youtube-keyword-research"
      },
      {
        name: "YouTube Automation",
        path: "/youtube-automation"
      },
      {
        name: "YouTube Monetization",
        path: "/youtube-monetization"
      },
      {
        name: "YouTube Promotion / Ads",
        path: "/youtube-promotion-ads"
      },


      {
        name: "YouTube Channel Managment",
        path: "/youtube-channel-managment"
      },


    ]
  },
  {
    id: 3,
    Name: "Portfolio",
    Route: "/portfolio",
  },
  {
    id: 4,
    Name: "Our Channels",
    Route: "/Our-Channels",
  },
  {
    id: 5,
    Name: "Team",
    Route: "/team",
  },

  {
    id: 6,
    Name: "Blog",
    Route: "/blog",
    // hasDropdown: false,
    // selected: true,
    // dropdownItems: [
    //   {
    //     name: "Views",
    //     path: "/views"
    //   },
    //   {
    //     name: "Monetization",
    //     path: "/monetization"
    //   },
    //   {
    //     name: "Analytics",
    //     path: "/analytics"
    //   },
    //   {
    //     name: "All Tips and Insights",
    //     path: "/tipandinsights"
    //   },

    // ]

  },
  {
    id: 7,
    Name: "Contact Us",
    Route: "/contact-Us",

  },
];





function Navbar({ bg_color, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className={`w-full min-h-[4.1rem] px-4 lg:px-10 font-Inter font-bold ${position} top-0 z-10 ${bg_color} `}>
      <div className="mx-w-[1172px] mx-auto min-h-full flex items-center text-[#FFFFFF] justify-between lg:justify-around mt-[3px] ">
        {/* Logo here... */}
        <div className="relative w-12 h-14 ">
          <Link href={'/'} alt='home'> <Image src={"/Images/logo.png"} alt="" fill className="object-contain" /></Link>
        </div>

        {/* nav items here......... */}
        <div className="lg:flex  hidden justify-center items-center text-sm gap-8 relative z-50">
          {navItems.map((item, index) => (
            <Link href={item.Route} key={index}>
              <div className="relative  main list-none flex justify-center items-start">
                <div key={index} className="cursor-pointer">{item.Name}</div>
                {(index === 1) && <IoMdArrowDropdown size={20} className="block" />}
                {item.hasDropdown && (

                  <div className="hidden absolute top-[24px] left-[0px] w-[233px] shadow-2xl rounded-md border-1 border-white/10 border-solid span_dropdown bg-gray-gradient item ">
                    {item.dropdownItems.map((service, index) => (
                      <Link href={`${service.path}`} className="list-none px-3  py-1 text-[14px] leading-5 inline-block text-white/90 font-normal glow_text  " key={index}>{service.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
          <button className='flex flex-col justify-center items-center px-3 py-[3px] ml-2 rounded-3xl text-sm font-bold text-white bg-[#139dff] hover:bg-[#3b82f6] mt-0 text-[13px] '>
            <div className="flex justify-center items-center">{`Let${"'"}s Start`}<BsArrowRightShort className="text-[25px]  text-white" /></div>
            <p className="">A New Project Together</p>
          </button>
        </div>






        {/* Hamburgur */}
        <div className="lg:hidden ">
          <Hamburger
            toggled={isOpen} toggle={setIsOpen} color='#ffffff' size={25}>

          </Hamburger>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="drawer"
          >
            <div className="w-full flex flex-col text-white !font-Inter">
              {/* =========>top bar */}
              <div className="w-full flex justify-between items-center px-2  h-[70px] bg-blue/90  ">
                <div className="relative w-10 h-10 ">
                  <Link href={'/'} alt='home'> <Image src={"/Images/logo.png"} alt="" fill className="object-contain" /></Link>
                </div>
                <RxCross2 onClick={toggleDrawer} size={30} />
              </div>
              {/* button for the order now in mobile view */}
              <button className='text-base font-bold flex gap-4 justify-center items-center px-5 py-3 w-[90%] mx-auto mt-4 rounded-full text-white bg-[rgb(19,157,255)] glow_text'>
                <div className="flex justify-center items-center ">{`Let${"'"}s Start`}<BsArrowRightShort className=" text-white" size={20} /></div>
                <p>A New Project Together</p>
              </button>

              {navItems.map((item, index) => (
                <Link href={item.Route} key={index} className="w-full flex flex-col justify-start items-start  px-4 py-2 text-sm relative">
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full  flex justify-start items-start ">
                      <div key={index} className="cursor-pointer w-full flex justify-between items-center">
                        <p>{item.Name}</p>
                        {(index === 0 || index === navItems.length - 2) && <IoMdArrowDropdown size={25} className="" />}

                      </div>


                    </div>
                    {/* =====> sub items */}
                    <div className="w-full py-4">
                      {item.hasDropdown &&

                        <div className="w-full flex gap-1 flex-col justify-start items-start pl-8  ">
                          {item.dropdownItems.map((item, index) => {
                            return <Link key={index} href="#">{item.name}</Link>
                          })}
                        </div>
                      }
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Drawer>
        </div >

      </div>
    </div>


  );
}

export default Navbar;
