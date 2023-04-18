import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai"

import Nodemialer from '../Nodemialer';



function ApplicationForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [cv, setCv] = useState(null);
    const [answers, setAnswers] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    });



    const [recipientEmail, setRecipientEmail] = useState('');

    useEffect(() => {
        const uploadElement = document.getElementById('upload');
        if (uploadElement) {
            uploadElement.style.display = 'none';
        }
    }, []);

    function handleClick() {
        const uploadElement = document.getElementById('upload');
        if (!cv) {
            uploadElement.click();

        }
        handleFileChange();
    }


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setCv(event.target.result);
            setCvType(file.type);
        };
        reader.readAsDataURL(file);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setCv(file);
            setFileUploaded(true);
        }
    };
    const handleFileRemove = () => {
        setCv(null);
        setFileUploaded(false);
    };

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setRecipientEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleCoverLetterChange = (event) => {
        setCoverLetter(event.target.value);
    };

    const handleAnswerChange = (event) => {
        const { name, value } = event.target;
        setAnswers({ ...answers, [name]: value });
    };





    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = [fullName, email, phone, coverLetter, cv, answers]
        console.log(formData)
    };
    return (

        <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col justify-start items-start space-y-8 text-blue">

                <div className="text-blue space-y-4">
                    <h1 className="font-Inter text-xl font-bold">CV or resume</h1>
                    <p className="text-lg font-medium">Upload your CV or resume file</p>
                    <div className="ma-w-[150px] h-[150px] border-2 border-[gray] text-center p-3"
                        onClick={handleClick}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnter={(e) => e.preventDefault()}
                        onDrop={handleDrop}>
                        <label htmlFor="upload">
                            <span className={cv ? 'hidden' : ''}> <strong>Upload a file</strong>  or drag and drop here
                                Accepted files: <br /> PDF, DOC, DOCX, JPEG and PNG up to 50MB.
                            </span>
                            {cv ? (
                                <div>

                                    <p>File Uploaded:</p>
                                    <p>{cv.name}</p>
                                    <div className="flex justify-center items-center gap-2">

                                        <button aria-live="polite" type="button" className="text-white px-2 py-2 border-1 border-blue rounded-xl bg-[black]" onClick={handleFileRemove}>
                                            <AiFillDelete />
                                        </button>
                                    </div>

                                </div>
                            ) : (

                                <input
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                                    onChange={(e) => setCv(e.target.files[0])}
                                    required
                                    id="upload"
                                    placeholder="Upload A file here: "
                                    aria-hidden='true'
                                    style={{ display: 'none', top: '50px' }} />
                            )}
                        </label>
                    </div>
                </div>
                {/* line break  */}
                <hr className="w-full" />

                <div className="flex flex-col justify-start items-start space-y-6  text-[black] font-semibold text-[20px] w-full">
                    <h1 className="font-Inter text-xl font-bold">Personal information</h1>
                    <p className="text-lg font-medium">Fill out the information below</p>

                    <label className="flex flex-col justify-start items-start gap-1">
                        <div className="flex gap-2">
                            Full Name
                            <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>
                        <input type="text" value={fullName} onChange={handleFullNameChange} placeholder="Full name " required />
                    </label >

                    <label className="flex flex-col justify-start items-start gap-1">
                        <div className="flex gap-2">
                            Email
                            <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>
                        <input type="email" onChange={handleEmailChange} placeholder="Your email address " required />
                    </label>

                    {/* 
                    <label className="flex flex-col justify-start items-start gap-1">

                        <div className="flex gap-2">
                            Adress
                            <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>

                        </div>
                        <input type="email" value={email} onChange={handleEmailChange} placeholder="Your current address" required />
                    </label> */}

                    <label className="flex flex-col justify-start items-start gap-1 min-w-[50vw] w-full">
                        <div className="flex gap-2">
                            Phone number
                            <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>
                        <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="Enter your personal number" required />
                    </label>
                </div>

                <hr className="w-full" />


                <label className="flex flex-col justify-start items-start gap-1 w-full">
                    <div className="flex gap-2">
                        Cover Letter
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>
                    <textarea value={coverLetter} onChange={handleCoverLetterChange} placeholder="Coverletter" required className="max-w-[60%] w-full" />
                </label>
                <br />


                <hr className="w-full" />
                {/* Questionaire is here , here are the quesiton */}
                <div className="flex flex-col ">
                    <h4 className="text-xl font-bold">Questions</h4>
                    <p className="text-base font-medium">Please fill in additional questions</p>
                </div>
                <label className="flex flex-col gap-[6px]">
                    Where are you located? Also, put a time zone, please.
                    <input
                        type="text"
                        name="answer1"
                        value={answers.answer1}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What is your requested annual fee (USD) - gross?
                    <input
                        type="text"
                        name="answer2"
                        value={answers.answer2}
                        onChange={handleAnswerChange}
                    />
                </label>



                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer3"
                        value={answers.answer3}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>
                <label className="flex flex-col gap-[6px]">
                    What other languages do you speak besides English?
                    <input
                        type="text"
                        name="answer4"
                        value={answers.answer4}
                        onChange={handleAnswerChange}
                    />
                </label>

                <button type="submit">Submit</button>
            </div>
        </form >


    )
}

export default ApplicationForm