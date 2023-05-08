import React from 'react'
import Image from 'next/image'
import { HiArrowSmRight } from "react-icons/hi"
function SignIn() {
    return (

        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0  ">

                <div className='w-[80px] h-[80px] relative mx-auto'>
                    <Image src={"/Images/logo.png"} fill className='object-contain' />

                </div>
                <div className="grid grid-cols-1 w-full px-6 py-4 mt-6  bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>
                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-[#616161]"
                            >
                                Username
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className=" w-full mt-1 border-[#E0E0E0] rounded-md shadow-sm focus:border-[#7986CB] focus:ring focus:ring-[#9FA8DA] focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-[#616161]"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className=" w-full mt-1 border-[1px] p-2  border-[#E0E0E0] rounded-md shadow-sm focus:border-[#7986CB] focus:ring focus:ring-[#9FA8DA] focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className=' self-center mt-4'>
                            <button className="transition duration-200  w-full  px-5 py-3 cursor-pointer  rounded-lg text-[white] bg-[#139dff] hover:bg-[#EEEEEE] focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-[#c6d3e6] focus:ring-opacity-50 ring-inset">
                                <div className='flex justify-center items-center gap-2'>
                                    <div>
                                        <span className="text-lg font-medium">Login</span>
                                    </div>

                                    <div className='mt-1'>
                                        <HiArrowSmRight size={25} />
                                    </div>

                                </div>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn