import React, { useState } from "react";
import FormStep1 from "./FormName";
import FormStep2 from "./FormServices";
import FormStep3 from "./FormBrand";
import FormStep4 from "./FormValue";
import FormStep5 from "./FormContactChoice";
import FormStep6 from "./FormInputPhone";
import FormStep7 from "./FormEmail";

import ProgressBar from "./ProgressBar";

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        services: "",
        city: "",

    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleFormChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
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
                    <FormStep1 formData={formData} onChange={handleFormChange} nextStep={nextStep} />
                )}
                {step === 2 && (
                    <FormStep2 formData={formData} onChange={handleFormChange} prevStep={prevStep} nextStep={nextStep} />
                )}
                {step === 3 && (

                    <FormStep3 formData={formData} onChange={handleFormChange} prevStep={prevStep} nextStep={nextStep}>
                    </FormStep3>

                )}

                {step === 4 && (

                    <FormStep4 formData={formData} onChange={handleFormChange} prevStep={prevStep} nextStep={nextStep}>
                    </FormStep4>

                )}

                {step === 5 && (

                    <FormStep5 formData={formData} onChange={handleFormChange} prevStep={prevStep} nextStep={nextStep}>
                    </FormStep5>

                )}

                {step === 6 && (

                    <FormStep6 formData={formData} onChange={handleFormChange} prevStep={prevStep} nextStep={nextStep}>
                    </FormStep6>

                )}

                {step === 7 && (

                    <FormStep7 formData={formData} onChange={handleFormChange} prevStep={prevStep} onClick={handleFormSubmit}>
                    </FormStep7>

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
