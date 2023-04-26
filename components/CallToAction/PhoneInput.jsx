import React from 'react'
import { MuiTelInput } from 'mui-tel-input'
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
const PhoneInput = (nextStep, preStep) => {
    const [phone, setPhone] = React.useState('')

    const handleChange = ({ setFormData, value, formData }) => {
        const handleChange = (event) => {
            const {
                target: { value },
            } = event;
            setFormData({ ...formData, phone: value })
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <MuiTelInput value={phone} onChange={handleChange} forceCallingCode />
        </div>

    )
}

export default PhoneInput;