import React from 'react'
import { FiArrowLeft } from "react-icons/fi"
function FormStep7({ formData, onChange, nextStep, prevStep, submit }) {
    return (
        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto space-y-2'>
            <div className='flex flex-col justify-between items-center gap-8  '>
                <h1 className='text-[14px] sm:text-[16px] md:text-[18px] font-medium text-center '>Thank you for Showing Interest in Dawood Proud Services <br /> to take your YouTube Channel to New Heights</h1>
                <h2 className='text-[14px] sm:text-[16px] md:text-[18px] font-medium '>Last Question... What is your email address?</h2>
            </div>
            <label htmlFor="name"></label>
            <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                // className="block px-4 py-3  placeholder-gray-500"
                style={{
                    border: 'none',
                    borderBottom: "2px solid #139dff",
                    borderRadius: "0px",
                    padding: "16px",
                    marginBottom: "12px",
                    outline: 'none',


                }}
                name="email"
                value={formData.email}
                onChange={onChange}
                required

            />
            <div className='text-[12px] font-normal text-center  '>
                Your contact details will NOT be used for unsolicited calls and messages. <br />
                Your Contact Information will be handled securely because Your privacy matters! <br />
                We will respectfully reach out to schedule a consultation at a time that suits you best.
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button type="button" onClick={prevStep} className="bg-[#139dff] px-6 py-1 rounded-2xl text-white">
                    <FiArrowLeft size={30} />
                </button>
                <button type="button" onClick={submit} className="bg-[#139dff] px-6 py-1 rounded-2xl text-white text-[20px]">
                    Submit
                </button>
            </div>

        </div>
    )
}

export default FormStep7


