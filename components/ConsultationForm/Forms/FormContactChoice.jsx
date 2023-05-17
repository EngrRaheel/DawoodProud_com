import React from 'react'
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
import ContactViaSelect from '../SelectMui/ContactSelectAnt'
function FormStep5({ formData, onChange, nextStep, prevStep, setFormData }) {
    return (
        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto space-y-1'>
            <div className='flex flex-col justify-between items-center gap-6 '>
                <h1 className='text-[14px] sm:text-[16px] md:text-[18px] font-medium text-center '>Thank you for Showing Interest in Dawood Proud Services <br /> to take your YouTube Channel to New Heights</h1>
                <h2 className='text-[14px] sm:text-[16px] md:text-[18px] font-medium text-center text-[#139dff] '>We can&#39;t wait to connect with you!</h2>
                <h2 className='text-[14px] sm:text-[16px] md:text-[18px] font-medium text-center '>How would you like us to contact you?</h2>
            </div>
            <label htmlFor="name"></label>
            <div>
                <ContactViaSelect value={formData.contactvia} setFormData={setFormData} formData={formData} />
            </div>
            <div className='text-[12px] font-normal text-center  '>
                Your contact details will NOT be used for unsolicited calls and messages. <br />
                Your Contact Information will be handled securely because Your privacy matters! <br />
                We will respectfully reach out to schedule a consultation at a time that suits you best.
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button type="button" onClick={prevStep} className="bg-[#139dff] px-6 py-1 rounded-2xl text-white">
                    <FiArrowLeft size={30} />
                </button>
                <button type="button" onClick={nextStep} className="bg-[#139dff] px-6 py-1 rounded-2xl text-white">
                    <FiArrowRight size={30} />
                </button>

            </div>

        </div >
    )
}

export default FormStep5