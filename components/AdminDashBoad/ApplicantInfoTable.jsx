import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md"





function ApplicantInfoTable() {
    return (
        <div className='grid  grid-cols-1 md:grid-cols-3 px-4 mt-8'>
            {/* <div className='w-full max-w-[1172px] '>
                <div className=" mx-auto px-5 bg-blue min-h-sceen">
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-5xl mt-5 abdal_color">
                         Applicant Data
                        </h2>

                    </div>
                    <div className="grid divide-y  max-w-[1172px] mx-auto mt-8 bg-white rounded-lg mb-1">
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>Applicant Data here  </span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    We are in the process of heavy expansion, we are in need of many talented individuals to join our team. So, don&#39;t worry about the number of slots available.
                                    If you think you have the skills and qualifications we are looking for, don&#39;t hesitate to apply. We are looking for multiple candidates, and we will consider each application carefully.
                                </p>
                            </details>
                        </div>
                    </div>
                    <div className="grid divide-y  max-w-[1172px] mx-auto mt-8 bg-white rounded-lg mb-1">
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>Applicant Data  </span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    We are in the process of heavy expansion, we are in need of many talented individuals to join our team. So, don&#39;t worry about the number of slots available.
                                    If you think you have the skills and qualifications we are looking for, don&#39;t hesitate to apply. We are looking for multiple candidates, and we will consider each application carefully.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>

            </div> */}
            <div className="flex flex-col  py-1 px-8  shadow-xl rounded-lg  bg-[white] text-[gray]  mt-8">
                <div className="w-20 h-20 relative self-end -mt-8 ">
                    <Image src="/Images/avatar.jpg" fill className=" object-contain rounded-full border-2 " alt='avatar' ></Image>
                </div>
                <div>
                    <h2 className=" text-3xl font-semibold">Applicant Name</h2>
                    <p className="mt-2 font-semibold">Email</p>
                    <p className="mt-2  font-semibold">Phone Number</p>
                    <p className="mt-2  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>
                <div className="flex justify-end items-center  mt-4 underline text-[#27a9f1]">
                    <Link href="#" className="text-xl font-medium  mb-1">
                        <button>
                            Details
                        </button>
                    </Link>
                    <MdKeyboardDoubleArrowRight size={20} />
                </div>
            </div>
        
        </div>
    )
}

export default ApplicantInfoTable