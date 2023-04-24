import React from 'react'
import { FiArrowRight } from "react-icons/fi"
function FormStep1({ formData, onChange, nextStep, handleFormSubmit }) {
    return (
        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto gap-3'>
            <div className='flex flex-col justify-between items-center gap-8 '>
                <h1 className='text-[24px] font-bold text-center '>Thanks for showing interest in Dawood Proud <br /> One Step services to grow your business.</h1>
                <h2 className='text-[20px] font-semibold text-center '>{`Let\'s get started... What\'s your full name?`}</h2>
            </div>
            <label htmlFor="name"></label>
            <input
                type="text"
                id="name"
                placeholder="Enter your name"
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
            <button type="button" onClick={nextStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                <FiArrowRight size={30} />
            </button>
            <button type="button" onClick={handleFormSubmit} className="bg-[#139dff] px-5 py-1 rounded-full text-white text-[20px]">
                Submit
            </button>
        </div>
    )
}

export default FormStep1


