import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai"


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
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: "",
        answer8: "",
        answer9: "",
        answer10: "",
        answer11: "",
        answer12: "",
        answer13: "",
        answer14: "",
        answer15: "",
        answer16: "",
        answer17: "",
        answer18: "",
        answer19: "",
        answer20: "",
        answer21: "",

    });
    const [recipientEmail, setRecipientEmail] = useState("");
    const [fileUploaded, setFileUploaded] = useState(false);

    useEffect(() => {
        const uploadElement = document.getElementById("upload");
        if (uploadElement) {
            uploadElement.style.display = "none";
        }
    }, []);

    function handleClick() {
        const uploadElement = document.getElementById("upload");
        if (!cv) {
            uploadElement.click();
        }
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
        const formData = [fullName, email, phone, coverLetter, cv, answers];
        console.log(formData);
    };
    return (

        <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col justify-center sm:justify-start items-center sm:items-start space-y-8 text-blue ">

                <div className="text-blue space-y-4">
                    <h1 className="font-Inter text-xl font-bold">CV or resume  <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span></h1>
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
                <hr className="w-full text-[gray]/40" />

                <div className="flex flex-col justify-start items-start space-y-6  text-[black] font-semibold text-[20px] w-full">
                    <h1 className="font-Inter text-xl font-bold">Personal information</h1>
                    <p className="text-lg font-medium">Fill out the information below</p>

                    <label className="flex flex-col justify-start items-start gap-1">
                        <div className="flex gap-2">
                            Full Name
                            <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>
                        <input type="text" value={fullName} onChange={handleFullNameChange} placeholder="Full Name " required />
                    </label >

                    <label className="flex flex-col justify-start items-start gap-1">
                        <div className="flex gap-2">
                            Email
                            <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>
                        <input type="email" onChange={handleEmailChange} placeholder="youremail@gmail.com " required />
                    </label>



                    <label className="flex flex-col justify-start items-start gap-1 min-w-[50vw] w-full">
                        <div className="flex gap-2">
                            Personal Number
                            <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>
                        <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="+923XZ-YYYYYYY " required />
                    </label>
                </div>

                <hr className="w-full text-[gray]/40" />


                <label className="flex flex-col justify-start items-start gap-1 w-full">
                    <div className="flex gap-2">
                        Cover Letter
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>
                    <textarea value={coverLetter} onChange={handleCoverLetterChange} placeholder="Coverletter" required className="max-w-[70%] min-h-[300px] w-full" />
                </label>
                <br />


                <hr className="w-full text-[gray]/40" />
                {/* Questionaire is here , here are the quesiton */}
                <div className="flex flex-col justify-start items-start text-sm font-normal gap-5">
                    <h4 className="text-xl font-bold">Questions</h4>
                    <p className="text-base font-medium">Please fill in additional questions</p>

                    <div className="flex gap-2">
                        Address:
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>

                    <label className="flex flex-col gap-[6px]">
                        <div>
                            Write your Address Here: <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>

                        <input
                            type="text"
                            name="answer1"
                            value={answers.answer1}
                            onChange={handleAnswerChange}
                            // className="w-[700px]"
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        <div>
                            What is your current residential status in Islamabad / Rawalpindi? <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>

                        <textarea

                            type="text"
                            name="answer2"
                            value={answers.answer2}
                            onChange={handleAnswerChange}
                            placeholder="Permanent Resident, Living as Long Term Resident or Residing as an Outsider"
                            required
                        // className="w-[700px]"
                        />
                    </label>

                    <br />
                    <hr className="w-full text-[gray]/40" />
                    <br />

                    <div className="flex gap-2">
                        English Proficiency:
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>
                    <label className="flex flex-col gap-[6px]">
                        <div>
                            What is your level of proficiency in English? <br /><span className="text-[black]/80">(Beginner, Elementary, Intermediate, Upper Intermediate, Advanced)</span> <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>

                        <input
                            type="text"
                            name="answer3"
                            value={answers.answer3}
                            onChange={handleAnswerChange}

                            // className="w-[700px]"
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        Have you taken any English language proficiency tests?<span className="text-[black]/70">(such as TOEFL, IELTS, or Cambridge exams)</span> If so, what were your scores?
                        <input
                            type="text"
                            name="answer4"
                            value={answers.answer4}
                            onChange={handleAnswerChange}
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        <div>How often do you speak, read, or write in English? <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span></div>
                        <textarea
                            type="text"
                            name="answer5"
                            value={answers.answer5}
                            onChange={handleAnswerChange}
                            required

                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        Can you provide an example of a time when you had to communicate in English in a professional setting?
                        <textarea
                            type="text"
                            name="answer6"
                            value={answers.answer6}
                            onChange={handleAnswerChange}
                        />
                    </label>


                    <br />
                    <hr className="w-full text-[gray]/40" />
                    <br />
                    <div className="flex gap-2">
                        Digital Skills:
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>


                    <label className="flex flex-col gap-[6px]">
                        <div>
                            What is your level of proficiency in using various digital tools <span className="text-[black]/70">(e.g. Notion, Microsoft Office, Google Workspace, <br /> social media platforms, etc.)</span> ? <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>

                        <textarea
                            type="text"
                            name="answer7"
                            value={answers.answer7}
                            onChange={handleAnswerChange}
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        Do you have any digital skills? <span className="text-[black]/80">(e.g. Digital Marketing, Social Media Management, Online Coaching, Email Marketing, etc.)</span> If yes, please list them. Have you freelanced or worked independently in any capacity utilizing your digital skills? <br />If yes, please provide details about your experience, the type of work you did and the Outcomes you achieved.
                        <textarea
                            type="text"
                            name="answer8"
                            value={answers.answer8}
                            onChange={handleAnswerChange}
                        />
                    </label>


                    <br />
                    <hr className="w-full text-[gray]/40" />
                    <br />

                    <div className="flex gap-2">
                        Digital Quotient:
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>

                    <label className="flex flex-col gap-[6px]">
                        Have you ever developed a digital solution to a problem? If so, what was the problem and how did you <br />solve it? OR Can you provide an example of a digital project you worked on that required you to think creatively?
                        <textarea
                            type="text"
                            name="answer9"
                            value={answers.answer9}
                            onChange={handleAnswerChange}
                        />
                    </label>


                    <br />
                    <hr className="w-full text-[gray]/40" />
                    <br />

                    <div className="flex gap-2">
                        Quick learning abilities:
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>

                    <label className="flex flex-col gap-[6px]">
                        <div>Can you provide an example of a time when you had to learn a new skill quickly in order to complete a project? <br /> OR Can you provide an example of a time when you successfully learned something quickly under pressure?  <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span></div>

                        <textarea
                            type="text"
                            name="answer10"
                            value={answers.answer10}
                            onChange={handleAnswerChange}
                            required
                        />
                    </label>


                    <br />
                    <hr className="w-full text-[gray]/40" />
                    <br />

                    <div className="flex gap-2">
                        Problem solving:
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>

                    <label className="flex flex-col gap-[6px]">
                        <div>Can you provide an example of a difficult problem you solved in the past?  <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span></div>

                        <textarea
                            type="text"
                            name="answer11"
                            value={answers.answer11}
                            onChange={handleAnswerChange}
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        Have you ever had to make a difficult decision? If so, how did you approach it and what was the outcome?
                        <textarea
                            type="text"
                            name="answer12"
                            value={answers.answer12}
                            onChange={handleAnswerChange}
                        />
                    </label>


                    <br />
                    <hr className="w-full text-[gray]/40" />
                    <br />

                    <div className="flex gap-2">
                        Social Media Proficiency:
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>

                    <label className="flex flex-col gap-[6px]">

                        <div>What social media platforms do you actively use and why?  <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span></div>
                        <textarea
                            type="text"
                            name="answer13"
                            value={answers.answer13}
                            onChange={handleAnswerChange}
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        Have you created any social media content for yourself or for a brand? If yes, please provide links or examples.
                        <textarea
                            type="text"
                            name="answer14"
                            value={answers.answer14}
                            onChange={handleAnswerChange}
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        Can you describe a time when you used social media to achieve a specific business or personal goal?
                        <textarea
                            type="text"
                            name="answer15"
                            value={answers.answer15}
                            onChange={handleAnswerChange}
                        />
                    </label>

                    <br />
                    <hr className="w-full text-[gray]/40" />
                    <br />

                    <div className="flex gap-2">
                        Additional Questions:
                        <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                    </div>

                    <label className="flex flex-col gap-[6px]">
                        <div>Have you read Job Description, Job Requirements, and all the FAQs Carefully? If yes, Why do you want to work for our company?  <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span></div>

                        <textarea
                            type="text"
                            name="answer16"
                            value={answers.answer16}
                            onChange={handleAnswerChange}
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        <div>
                            What are your key strengths and weaknesses? In which areas do you think you need to improve the most, and why?  <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>

                        <textarea
                            type="text"
                            name="answer17"
                            value={answers.answer17}
                            onChange={handleAnswerChange}
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        <div>
                            What do you enjoy doing in your free time? How do you like to spend your weekends?   <span aria-hidden="true" className="text-[#fe6363]" title="This field is required">*</span>
                        </div>

                        <textarea
                            type="text"
                            name="answer18"
                            value={answers.answer18}
                            onChange={handleAnswerChange}
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        What was the most exciting activity or event you participated in, in the last year?
                        <textarea
                            type="text"
                            name="answer19"
                            value={answers.answer19}
                            onChange={handleAnswerChange}

                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        What are some of your favorite books, movies, or TV shows?
                        <textarea
                            type="text"
                            name="answer20"
                            value={answers.answer20}
                            onChange={handleAnswerChange}

                        />
                    </label>
                    <label className="flex flex-col gap-[6px]">
                        How did you hear about us? <br /> <span className="text-[black]/70">(Google Search, Facebook, Instagram, LinkedIn, <br /> WhatsApp Group, Referral, or You can Write Other Sources Here.)</span>
                        <input
                            type="text"
                            name="answer21"
                            value={answers.answer21}
                            onChange={handleAnswerChange}
                            placeholder="  "
                       
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form >


    )
}

export default ApplicationForm