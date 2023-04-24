import React from 'react'
import { MuiTelInput } from 'mui-tel-input'
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
const PhoneInput = () => {
    const [phone, setPhone] = React.useState('')

    const handleChange = (newPhone) => {
        setPhone(newPhone)
        console.log(phone)
    }

    return (
     
            <MuiTelInput value={phone} onChange={handleChange} forceCallingCode  defaultCountry='ca' />
      

    )
}

export default PhoneInput;