import React from 'react'
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
import MultipleSelect1 from '../SelectMui/MultiselectServices'
function FormStep2({ formData, onChange, nextStep, prevStep, handleFormSubmit, setFormData }) {
    return (
        <div className='flex flex-col justify-center items-center mx-w-[768px] mx-auto space-y-3 w-full'>
            <div className='flex flex-col justify-between items-center gap-6 '>
                <h2 className='text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-center '>Thank you for Showing Interest in Dawood Proud Services<br /> to take your YouTube Channel to New Heights</h2>
                <h2 className='text-[16] md:text-[20px] font-semibold text-center text-[#139dff]'>Nice to meet you😊</h2>
                <h2 className=' text-[16px] md:text-[24px] font-medium text-center '>What services are you looking for?</h2>
            </div>
            <label htmlFor="name"></label>
            <div >
                <MultipleSelect1 value={formData.services} setFormData={setFormData} formData={formData} />
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

export default FormStep2