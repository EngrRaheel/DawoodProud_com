import React from 'react'

function ApplicantInfoTable() {
    return (
        <div className=''>
            <div className='w-full max-w-[1172px] '>
                <div class=" mx-auto px-5 bg-blue min-h-sceen">
                    <div class="flex flex-col items-center">
                        <h2 class="font-bold text-5xl mt-5 abdal_color">
                         Applicant Data
                        </h2>

                    </div>
                    <div class="grid divide-y  max-w-[1172px] mx-auto mt-8 bg-white rounded-lg mb-1">
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>Applicant Data here  </span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    We are in the process of heavy expansion, we are in need of many talented individuals to join our team. So, don&#39;t worry about the number of slots available.
                                    If you think you have the skills and qualifications we are looking for, don&#39;t hesitate to apply. We are looking for multiple candidates, and we will consider each application carefully.
                                </p>
                            </details>
                        </div>
                    </div>
                    <div class="grid divide-y  max-w-[1172px] mx-auto mt-8 bg-white rounded-lg mb-1">
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>Applicant Data  </span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    We are in the process of heavy expansion, we are in need of many talented individuals to join our team. So, don&#39;t worry about the number of slots available.
                                    If you think you have the skills and qualifications we are looking for, don&#39;t hesitate to apply. We are looking for multiple candidates, and we will consider each application carefully.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ApplicantInfoTable