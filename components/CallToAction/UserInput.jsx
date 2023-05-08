import React, { useState } from "react";
import FormName from "./FormName";
import FormServices from "./FormServices";
import FormBrand from "./FormChannelName";
import FormSubs from "./FormSubs";
import FormContact from "./FormContactChoice";
import FormPhone from "./FormInputPhone";
import FormEmail from "./FormEmail";
import FormRev from "./RevenueForm"
import ProgressBar from "./ProgressBar";
import FormUrl from "./FormURL";
import FormAbout from "./HearAboutFrom"
import axios from "axios";


function MultiStepForm() {
    const [step, setStep] = useState(1);

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
        // debugger;
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
        axios.post("http://localhost:5000/api/client/info", clientObject).then(res => console.log(res))

        console.log(formData);
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
        <div className="max-w-[1200px] flex flex-col justify-center items-center  mx-auto border-1 border-[gray] shadow-2xl drop-shadow-lg p-12 gap-8">
            <div className="w-full max-w-[800px]">
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
    );
}

export default MultiStepForm;
