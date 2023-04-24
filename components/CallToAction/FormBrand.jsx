import React from 'react'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"


function FormStep3({ formData, onChange, nextStep, prevStep }) {
    return (
        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto gap-3'>
            <div className='flex flex-col justify-between items-center gap-8 '>
                <h1 className='text-[24px] font-bold text-center '>Thanks for showing interest in Dawood Proud <br /> One Step services to grow your business.</h1>
                <h2 className='text-[20px] font-semibold text-center '>{`Great! Let\'s Talk Brand...`}</h2>
                <h2 className='text-[20px] font-semibold text-center '>What is the name of your brand?</h2>

            </div>
            <label htmlFor="name"></label>
            <input
                type="text"
                id="name"
                placeholder="Your Brand Name"
                // className="block px-4 py-3  placeholder-gray-500"
                style={{
                    border: 'none',
                    borderBottom: "2px solid #139dff",
                    borderRadius: "0px",
                    padding: "16px",
                    marginBottom: "12px",
                    outline: 'none',


                }}
                name="name"
                value={formData.name}
                onChange={onChange}

            />
            <div className='flex justify-center items-center gap-4'>
                <button type="button" onClick={prevStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                    <FiArrowLeft size={30} />
                </button>
                <button type="button" onClick={nextStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                    <FiArrowRight size={30} />
                </button>

            </div>

        </div>
    )
}

export default FormStep3


