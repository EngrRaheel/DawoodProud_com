import React, { useState } from "react";
import FormName from "./Forms/FormName";
import FormServices from "./Forms/FormServices";
import FormBrand from "./Forms/FormChannelName";
import FormSubs from "./Forms/FormSubs";
import FormContact from "./Forms/FormContactChoice";
import FormPhone from "./Forms/FormInputPhone";
import FormEmail from "./Forms/FormEmail";
import FormRev from "./Forms/RevenueForm"
import ProgressBar from "./ProgressBar";
import FormUrl from "./Forms/FormURL";
import FormAbout from "./Forms/HearAboutFrom"
import axios from "axios";
import Loader from '../Loader/Loader'
// import { url } from "inspector";
import url from "../Assets/Api";
import { toast } from "react-toastify";
import Link from "next/link";

import { useRouter } from 'next/router'

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        YoutubeName: "",
        URL: "",
        subs: "",
        revenue: "",
        email: "",
        phone: "",
        services: [],
        contactvia: [],
        hearaboutus: "",




    });


    const handleFormSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
        const clientObject = {
            name: formData.name,
            YoutubeName: formData.YoutubeName,
            URL: formData.URL,
            subs: formData.subs,
            revenue: formData.revenue,
            email: formData.email,
            phone: formData.phone,
            services: formData.services,
            contactvia: formData.contactvia,
            hearaboutus: formData.hearaboutus,
        }
        axios.post(`${url}/api/client/info`, clientObject).then(res => {
            setOpen(false);
            router.push('/')
            toast.success("Succesfully Submited")

        }).catch(err => {
            setTimeout(() => {
                setOpen(false)
                toast.warning("Please Submit Again")
            }, 10000
            )
                ;
        })

        console.log(formData)
    };

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
        console.log(formData.YoutubeName)
    };

    const nextStep = () => {
        setStep(step + 1);

    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const calculateProgress = (currentStep) => {
        return Math.floor((currentStep / 10) * 100);
    };

    return (
        <>
            <Loader open={open} message={message} />
            <div className="max-w-[900px] grid grid-cols-1 mx-auto border-1 p-6 border-[gray] shadow-xl drop-shadow-sm  gap-8 ">
                <div className="w-full max-w-[900px] px-4 ">
                    <ProgressBar progress={calculateProgress(step)} />
                </div>
                <form >
                    {step === 1 && (
                        <FormName formData={formData} onChange={handleFormChange} nextStep={nextStep} />
                    )}
                    {step === 2 && (
                        <FormServices formData={formData} setFormData={setFormData} onChange={handleFormChange} prevStep={prevStep} nextStep={nextStep} />
                    )}
                    {step === 3 && (
                        <FormBrand formData={formData} onChange={handleFormChange} prevStep={prevStep} nextStep={nextStep}>
                        </FormBrand>
                    )}
                    {step === 4 && (
                        <FormUrl formData={formData} onChange={handleFormChange} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}>
                        </FormUrl>
                    )}

                    {step === 5 && (
                        <FormSubs formData={formData} onChange={handleFormChange} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}>
                        </FormSubs>
                    )}
                    {step === 6 && (
                        <FormRev formData={formData} onChange={handleFormChange} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}>
                        </FormRev>
                    )}

                    {step === 7 && (
                        <FormAbout formData={formData} onChange={handleFormChange} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}>
                        </FormAbout>
                    )}
                    {step === 8 && (
                        <FormContact formData={formData} onChange={handleFormChange} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}>
                        </FormContact>
                    )}

                    {step === 9 && (
                        <FormPhone formData={formData} onChange={handleFormChange} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}>
                        </FormPhone>
                    )}

                    {step === 10 && (
                        <FormEmail formData={formData} onChange={handleFormChange} prevStep={prevStep} submit={handleFormSubmit}>
                        </FormEmail>
                    )}


                </form>
            </div>
        </>
    );
}

export default MultiStepForm;
