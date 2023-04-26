import React, { useState } from "react";
import FormName from "./FormName";
import FormServices from "./FormServices";
import FormBrand from "./FormBrand";
import FormValue from "./FormValue";
import FormContact from "./FormContactChoice";
import FormPhone from "./FormInputPhone";
import FormEmail from "./FormEmail";

import ProgressBar from "./ProgressBar";


function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        value: [],
        phone: "",
        services: [],
        brandName: "",
    });


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
        console.log(formData.brandName)
    };

    const nextStep = () => {
        setStep(step + 1);

    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const calculateProgress = (currentStep) => {
        return Math.floor((currentStep / 7) * 100);
    };

    return (
        <div className="max-w-[1200px] flex flex-col justify-center items-center  mx-auto border-1 border-[gray] shadow-md p-12 gap-8">
            <div className="w-full max-w-[900px]">
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
                    <FormValue formData={formData} onChange={handleFormChange} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}>
                    </FormValue>
                )}

                {step === 5 && (
                    <FormContact formData={formData} onChange={handleFormChange} prevStep={prevStep} nextStep={nextStep}>
                    </FormContact>
                )}

                {step === 6 && (
                    <FormPhone formData={formData} onChange={handleFormChange} prevStep={prevStep} nextStep={nextStep}>
                    </FormPhone>
                )}

                {step === 7 && (
                    <FormEmail formData={formData} onChange={handleFormChange} prevStep={prevStep} onClick={handleFormSubmit}>
                    </FormEmail>
                )}
                {/* {step !== 1 && (
                <button type="button" onClick={prevStep}>
                    Previous
                </button>
            )}
            {step !== 3 && (
                <button type="button" onClick={nextStep} className="bg-blue">
                    Next
                </button>
            )} */}

            </form>
        </div>
    );
}

export default MultiStepForm;
