import React from 'react'
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
import ContactViaSelect from './MultiselectContact'
function FormStep5({ formData, onChange, nextStep, prevStep, setFormData }) {
    return (
        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto space-y-6'>
            <div className='flex flex-col justify-between items-center gap-6 '>
                <h1 className='text-[18px] sm:text-[20px] md:text-[24px] font-bold text-center  '>Thanks for showing interest in Dawood Proud <br /> One Step services to grow your business.</h1>
                {/* <h2 className='text-[20px] font-semibold text-center '>Nice to meet you😊</h2> */}
                <h2 className='text-[16px] md:text-[24px] font-semibold text-center '>How would you like us to contact you?</h2>
            </div>
            <label htmlFor="name"></label>
            <div>
                <ContactViaSelect value={formData.contactvia} setFormData={setFormData} formData={formData} />
            </div>

            <div className='flex justify-center items-center gap-4'>
                <button type="button" onClick={prevStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                    <FiArrowLeft size={30} />
                </button>
                <button type="button" onClick={nextStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                    <FiArrowRight size={30} />
                </button>

            </div>

        </div >
    )
}

export default FormStep5