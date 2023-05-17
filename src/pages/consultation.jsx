import { useState } from 'react'
import UserInput from '../../components/ConsultationForm/UserInput'
import Navbar from '../../components/common/Navbar'



function cutomerpage() {


   

    return (
        <>
           
            <div className='grid grid-cols-1 w-full min-h-screen font-Inter text-white bg-white h-full'>
                <div className='w-full bg-[#121521]  h-[100%] md:h-[100%] '>
                    <Navbar bg_color={"white"} position={"sticky"}/>
                    <div className=' max-w-[1172px] mx-auto mt-2'>
                        <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[10%] mt-2 md:mt-6'>
                            <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold abdal_color'>
                                <span className='text-[#1ecce4]'>We Think big,</span> <br />
                                <span className="text-[#ead941]">start small,</span> <br />
                                <span className="text-white">and move fast</span>
                            </h1>
                        </div>
                    </div>  
                </div>
                <div className='text-[black] min-h-screen mx-auto mt-16 max-w-[1172px] w-full'>
                    <UserInput />
                </div>
            </div>
        </>
    )
}

export default cutomerpage