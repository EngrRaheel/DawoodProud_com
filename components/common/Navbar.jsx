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
    <div className={`w-full min-h-[4.1rem]  font-Inter font-bold ${position} top-0 z-10 ${bg_color} `}>
      <div className="mx-w-[1172px] mx-auto min-h-full flex items-center text-[#FFFFFF] justify-between lg:justify-around  ">
        {/* Logo here... */}
        <div className="relative w-12 h-14 ">
          <Link href={'/'} alt='home'> <Image src={"/Images/logo.png"} alt="" fill className="object-contain" /></Link>
        </div>

        {/* nav items here......... */}
        <div className="lg:flex  hidden justify-center items-center text-sm gap-6 relative z-50 mt-2">
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
          <Link href={"/cutomerpage"} className="text-xs">
            <button className='flex flex-col justify-center items-center px-3 py-[1px] ml-2 rounded-xl text-sm font-bold text-white bg-[#139dff] hover:bg-[#3b82f6] '>
              <div className="flex justify-center items-center">{`Let${"'"}s Start`}<BsArrowRightShort className="text-[25px]  text-white" /></div>
              A New Project Together
            </button>
          </Link>
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
            <div className="w-full flex flex-col text-white font-Inter gap-6 justify-center items-start ">
              {/* =========>top bar */}
              <div className="w-full flex justify-between items-center px-2 h-[70px] bg-gradient-to-b from-[#121521] to-[#121521]/0 ">
                <div className="relative w-10 h-10 ">
                  <Link href={'/'} alt='home'> <Image src={"/Images/logo.png"} alt="" fill className="object-contain" /></Link>
                </div>
                <RxCross2 onClick={toggleDrawer} size={30} />
              </div>
              {/* button for the order now in mobile view */}
              <button className='text-base font-medium flex gap-3 justify-center items-center px-3 py-3  mx-auto mt-4 rounded-3xl text-white bg-[rgb(19,157,255)]'>
                <div className="flex justify-center items-center ">{`Let${"'"}s Start`}<BsArrowRightShort className=" text-white" size={30} /></div>
                <Link href={"/cutomerpage"}>A New Project Together</Link>
              </button>

              {navItems.map((item, index) => (
                <Link href={item.Route} key={index} >
                  <div className="w-full flex flex-col justify-center items-center px-4 py-1 ml-2">
                    <div className="w-full  flex justify-start items-start ">
                      <div key={index} className="cursor-pointer w-full flex justify-between items-center ">
                        <p>{item.Name}</p>
                        {(index === 1) && <IoMdArrowDropdown size={30} />}
                      </div>
                    </div>
                    {/* =====> sub items */}
                    <div className="w-full py-0">
                      {item.hasDropdown &&

                        <div className="w-full flex gap-1 flex-col justify-start items-start pl-8 space-y-1 mt-6 text-base font-normal ">
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
