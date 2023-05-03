import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab2 from "../../components/JobsTab/JobsTab"
import Tab from "../../components/Careers/CareersTab"
import Image from 'next/image'
import Link from 'next/link'
import JobClosedBtn from '../../components/JobsTab/JobClosedPop'
import HiringRecruttie from '../../components/JobsTab/HiringRecruttie'
function careers() {

    const tabs = [
        {
            label: "Who we are",

            link: "/about-us"
        },
        {
            label: "Our team",
            link: "/team"
        },
        {
            label: "Jobs",
            link: "/jobs"
        },
        {
            label: "Media Kit",
            link: "/media-kit"
        },
        {
            label: "Legal Info",
            link: "/legal-info"
        }
    ];

    const tabs2 = [
        {
            label: "Job details",
            link: "/job-details"
        },
        {
            label: "Apply",
            link: "/apply"
        }
    ]
    const jobsClosed = [
        {
            "Job": "Multimedia Designers",
            "Location": "March 2023 • In-Office • G-11/2, Sachal Sarmast Road, Islamabad"
        },
        {
            "Job": "Corporate Video Editors",
            "Location": "January 2023 • In-Office • G-11/2, Islamabad"

        },
        {
            "Job": "Graphic Designers",
            "Location": "Jan 2022 • Remote"

        },
        {
            "Job": "Content Writer",
            "Location": "Jan 2022 • In-Office • G-11, Islamabad"

        },

        {
            "Job": "Multimedia Designers",
            "Location": "December 2022 • In-Office • G-11, Islamabad"

        },
        {
            "Job": "Commercial Video Editors",
            "Location": "September • Remote "

        },
        {
            "Job": "Voice-Over Artists (American Accent) ",
            "Location": "August 2022 • Remote"

        },

        {
            "Job": "Content Writers",
            "Location": "June 2022 • Remote"

        },

        {
            "Job": "SEO Experts",
            "Location": "May 2022 • Remote"

        },

        {
            "Job": "Voice-Over Artists (American Accent) ",
            "Location": "April 2022 • Remote"

        },

        {
            "Job": "Video Editors",
            "Location": "February 2022 • Remote"

        },
        {
            "Job": "Video Content Creator",
            "Location": "December 2021 • Remote"
        },

    ]

    return (
        <div className='w-full  font-Inter text-white bg-white min-h-screen h-full'>
            <div className="w-full bg-[#121521]  h-[40vh] md:h-[55vh]">
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1172px] mx-auto'>
                    <div className='flex flex-col justify-center items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[12%] mt-3 md:mt-6'>
                        <h1 className=' text-[30px] md:text-[65px] lg:text-[70px] font-bold font-inter text-[#1ecce4] abdal_color '>
                            Join the Team
                        </h1>
                        <h2 className='text-[12px] sm:text-[16px] md:text-[20px] abdal_color1 font-bold'>First do it, then do it right, then do it better.</h2>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-start max-w-[1172px] mx-auto '>
                <div className='ml-[4%] md:ml-[10%] lg:ml-[11%]'>
                    <Tab tabs={tabs} />
                </div>

                <hr className='w-[30%]' />
                <div className='flex flex-col justify-center items-center text-[#333333] font-Inter max-w-[900px] gap-2 mx-auto ml-[0%] md:ml-[10%] lg:ml-[12%]'>
                    <div className='flex flex-col justify-center items-start gap-3 w-full self-start px-4'>
                        <h2 className='font-semibold text-[24px] sm:text-[44px] md:text-[44px] text-center sm:text-left' >Why Work at Dawood Proud Agency?</h2>
                        <p className='font-normal text-[12px] sm:text-[14px] md:text-[16px] font-Inter px-3'>Our Motto is &quot;Stand Out from the Crowd&quot;. That&#39;s why we offer our Employees much more than just a job —

                            We offer them a chance to be a part of something bigger. For starters, we offer highly Competitive Salaries that are way above the industry average. But that&#39;s not all - We also provide our employees with home-like facilities that make coming to work a joy. Our office environment is designed to encourage creativity and innovation.
                            <br />
                            <br />

                            At our Company, we pride ourselves on having a flat hierarchy. This means that everyone has a voice, and everyone&#39;s ideas are valued. We&#39;re always exploring new growth opportunities, which means there&#39;s plenty of potential for our employees to take on new tasks and help shape the company. We believe in empowering our employees to make informed, independent decisions that add real value to our business.
                            <br />
                            <br />
                            If you&#39;re looking for a job that offers much more than just a paycheck, then this is the Right place for you !
                        </p>
                    </div>
                    <div className='w-[250px] xs:w-[400px] sm:w-[500px] md:w-[680px] h-[300px] xs:h-[300px] sm:h-[300px] md:h-[400px] relative '>
                        <Image src={"/Images/jobs.png"} fill className='object-contain' alt='jobimage'></Image>
                    </div>
                </div>
                <div className='mx-auto flex flex-col justify-start items-start gap-12 mb-6  md:ml-[10%] lg:ml-[15%] max-w-[900px] p-3'>
                    <div className=''>
                        <h3 className='text-[black] text-[24px] sm:text-[32px] md:text-[44px] font-semibold'>Open positions</h3>
                    </div>
                    <div className='text-[black] max-w-[600px]'>
                        <div className='border-2 border-solid border-[black]/20 grid grid-cols-[2fr_1fr] justify-between items-start sm:items-center px-3 md:px-3 py-3 md:py-6 shadow-md'>
                            <div className='flex flex-col '>
                                <p className='text-[16px] md:text-[20px] font-semibold'>YouTube Growth Strategis</p>
                                <p className='text-[14px] md:text-[16px] font-normal'>May 2023 • In-Office • G-11, Islamabad</p>
                            </div>
                            <div className='mx-auto '>
                                <Link href={"/job-details"}
                                    type="button"
                                    class="border border-indigo-500 text-[12px] md:text-[14px] bg-[black] text-white rounded-md  px-3 md:px-6 py-2 md:py-3  md:m-2  focus:outline-none focus:shadow-outline">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto flex flex-col justify-start items-start gap-12   md:ml-[10%] lg:ml-[15%] max-w-[900px] p-3 '>
                    <h3 className='text-[black] text-[24px] sm:text-[32px] md:text-[44px] font-semibold'>Closed positions</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 text-[black] mx-auto gap-4 md:gap-8' >
                        {jobsClosed.map((data, index) => {
                            return (
                                <div key={index} className='border-1 border-solid border-[black] flex flex-col gap-2 md:grid md:grid-cols-[2.2fr_1fr]  px-3 md:px-2 py-3 md:py-4 shadow-md '  >
                                    <div className='flex flex-col ' >
                                        <p className='text-[16px] md:text-[20px] font-semibold' >{data.Job}</p>
                                        <p className='text-[14px] md:text-[16px] font-normal'>{data.Location}</p>
                                    </div>
                                    <JobClosedBtn />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            {/* <div>
                <g clip-path="url(#__lottie_element_34)">
                    <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: 'block' }}>
                        <rect width="1000" height="1000" fill="#ffffff"></rect>
                    </g><g transform="matrix(5.705113410949707,0,0,5.705113410949707,72.11649322509766,-11.59874439239502)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,75,52.11800003051758)">
                            <path fill="rgb(233,237,249)" fill-opacity="1" d=" M50.7760009765625,10.793999671936035 C50.7760009765625,10.793999671936035 -50.7760009765625,10.793999671936035 -50.7760009765625,10.793999671936035 C-52.98500061035156,10.793999671936035 -54.7760009765625,9.003000259399414 -54.7760009765625,6.794000148773193 C-54.7760009765625,6.794000148773193 -54.7760009765625,-6.794000148773193 -54.7760009765625,-6.794000148773193 C-54.7760009765625,-9.003000259399414 -52.98500061035156,-10.793999671936035 -50.7760009765625,-10.793999671936035 C-50.7760009765625,-10.793999671936035 50.7760009765625,-10.793999671936035 50.7760009765625,-10.793999671936035 C52.98500061035156,-10.793999671936035 54.7760009765625,-9.003000259399414 54.7760009765625,-6.794000148773193 C54.7760009765625,-6.794000148773193 54.7760009765625,6.794000148773193 54.7760009765625,6.794000148773193 C54.7760009765625,9.003000259399414 52.98500061035156,10.793999671936035 50.7760009765625,10.793999671936035z"></path></g>
                        <g opacity="1" transform="matrix(1,0,0,1,83.63200378417969,52.11800003051758)"><path fill="rgb(255,204,0)" fill-opacity="1" d=" M34.06999969482422,4.993000030517578 C34.06999969482422,4.993000030517578 -34.06999969482422,4.993000030517578 -34.06999969482422,4.993000030517578 C-36.827999114990234,4.993000030517578 -39.0620002746582,2.757999897003174 -39.0620002746582,0 C-39.0620002746582,-2.757999897003174 -36.827999114990234,-4.993000030517578 -34.06999969482422,-4.993000030517578 C-34.06999969482422,-4.993000030517578 34.06999969482422,-4.993000030517578 34.06999969482422,-4.993000030517578 C36.827999114990234,-4.993000030517578 39.0620002746582,-2.757999897003174 39.0620002746582,0 C39.0620002746582,2.757999897003174 36.827999114990234,4.993000030517578 34.06999969482422,4.993000030517578z"></path></g>
                        <g opacity="1" transform="matrix(1,0,0,1,30.44300079345703,50.50699996948242)"><path fill="rgb(255,204,0)" fill-opacity="1" d=" M1.3869999647140503,4.7729997634887695 C1.3869999647140503,4.7729997634887695 -1.3869999647140503,4.7729997634887695 -1.3869999647140503,4.7729997634887695 C-1.3869999647140503,4.7729997634887695 -1.3869999647140503,-4.7729997634887695 -1.3869999647140503,-4.7729997634887695 C-1.3869999647140503,-4.7729997634887695 1.3869999647140503,-4.7729997634887695 1.3869999647140503,-4.7729997634887695 C1.3869999647140503,-4.7729997634887695 1.3869999647140503,4.7729997634887695 1.3869999647140503,4.7729997634887695z"></path></g>
                        <g opacity="1" transform="matrix(1,0,0,1,30.44300079345703,57.645999908447266)"><path fill="rgb(255,204,0)" fill-opacity="1" d=" M1.3869999647140503,1.4479999542236328 C1.3869999647140503,1.4479999542236328 -1.3869999647140503,1.4479999542236328 -1.3869999647140503,1.4479999542236328 C-1.3869999647140503,1.4479999542236328 -1.3869999647140503,-1.4479999542236328 -1.3869999647140503,-1.4479999542236328 C-1.3869999647140503,-1.4479999542236328 1.3869999647140503,-1.4479999542236328 1.3869999647140503,-1.4479999542236328 C1.3869999647140503,-1.4479999542236328 1.3869999647140503,1.4479999542236328 1.3869999647140503,1.4479999542236328z"></path></g></g>
                    <g transform="matrix(7.497448921203613,0,0,7.497448921203613,-62.308685302734375,181.25601196289062)" opacity="1" style={{ display: 'block' }}><g opacity="1" transform="matrix(1,0,0,1,75,25.767000198364258)"><path fill="rgb(233,237,249)" fill-opacity="1" d=" M41.263999938964844,8.918999671936035 C41.263999938964844,8.918999671936035 -41.26499938964844,8.918999671936035 -41.26499938964844,8.918999671936035 C-43.4739990234375,8.918999671936035 -45.26499938964844,7.127999782562256 -45.26499938964844,4.919000148773193 C-45.26499938964844,4.919000148773193 -45.26499938964844,-4.919000148773193 -45.26499938964844,-4.919000148773193 C-45.26499938964844,-7.127999782562256 -43.4739990234375,-8.918999671936035 -41.26499938964844,-8.918999671936035 C-41.26499938964844,-8.918999671936035 41.263999938964844,-8.918999671936035 41.263999938964844,-8.918999671936035 C43.472999572753906,-8.918999671936035 45.263999938964844,-7.127999782562256 45.263999938964844,-4.919000148773193 C45.263999938964844,-4.919000148773193 45.263999938964844,4.919000148773193 45.263999938964844,4.919000148773193 C45.263999938964844,7.127999782562256 43.472999572753906,8.918999671936035 41.263999938964844,8.918999671936035z"></path></g>
                        <g opacity="1" transform="matrix(1,0,0,1,82.13300323486328,25.767000198364258)"><path fill="rgb(75,234,215)" fill-opacity="1" d=" M28.15399932861328,4.125999927520752 C28.15399932861328,4.125999927520752 -28.15399932861328,4.125999927520752 -28.15399932861328,4.125999927520752 C-30.433000564575195,4.125999927520752 -32.279998779296875,2.2790000438690186 -32.279998779296875,0 C-32.279998779296875,-2.2790000438690186 -30.433000564575195,-4.125999927520752 -28.15399932861328,-4.125999927520752 C-28.15399932861328,-4.125999927520752 28.15399932861328,-4.125999927520752 28.15399932861328,-4.125999927520752 C30.433000564575195,-4.125999927520752 32.27899932861328,-2.2790000438690186 32.27899932861328,0 C32.27899932861328,2.2790000438690186 30.433000564575195,4.125999927520752 28.15399932861328,4.125999927520752z"></path></g>
                        <g opacity="1" transform="matrix(1,0,0,1,40.375999450683594,25.413999557495117)"><path fill="rgb(104,239,218)" fill-opacity="1" d=" M-2.197000026702881,5.159999847412109 C-2.197000026702881,5.159999847412109 -6.502999782562256,0.8539999723434448 -6.502999782562256,0.8539999723434448 C-6.502999782562256,0.8539999723434448 -4.881999969482422,-0.7670000195503235 -4.881999969482422,-0.7670000195503235 C-4.881999969482422,-0.7670000195503235 -2.197000026702881,1.9170000553131104 -2.197000026702881,1.9170000553131104 C-2.197000026702881,1.9170000553131104 4.88100004196167,-5.159999847412109 4.88100004196167,-5.159999847412109 C4.88100004196167,-5.159999847412109 6.502999782562256,-3.5390000343322754 6.502999782562256,-3.5390000343322754 C6.502999782562256,-3.5390000343322754 -2.197000026702881,5.159999847412109 -2.197000026702881,5.159999847412109z"></path></g></g>
                    <g transform="matrix(6.53000020980835,0,0,6.53000020980835,10.249984741210938,64.24998474121094)" opacity="1" style={{ display: 'block' }}><g opacity="1" transform="matrix(1,0,0,1,105.66200256347656,99.29900360107422)"><path fill="rgb(153,204,51)" fill-opacity="1" d=" M-2.4539999961853027,-28.020999908447266 C-3.746999979019165,-22.969999313354492 -6.349999904632568,-18.444000244140625 -9.895999908447266,-14.842000007629395 C-6.493000030517578,-10.420999526977539 -4.464000225067139,-4.889999866485596 -4.464000225067139,1.1100000143051147 C-4.464000225067139,6.257999897003174 -5.959000110626221,11.062999725341797 -8.534000396728516,15.11400032043457 C-9.270999908447266,16.273000717163086 -9.27400016784668,17.753999710083008 -8.588000297546387,18.944000244140625 C-8.588000297546387,18.944000244140625 -6.89300012588501,21.881000518798828 -6.89300012588501,21.881000518798828 C-6.89300012588501,21.881000518798828 -4.797999858856201,25.51099967956543 -4.797999858856201,25.51099967956543 C-3.4579999446868896,27.83099937438965 -0.20399999618530273,28.020999908447266 1.4359999895095825,25.902000427246094 C6.738999843597412,19.04800033569336 9.895999908447266,10.449000358581543 9.895999908447266,1.1100000143051147 C9.895999908447266,-10.321000099182129 5.163000106811523,-20.65399932861328 -2.4539999961853027,-28.020999908447266z"></path></g>
                        <g opacity="1" transform="matrix(1,0,0,1,44.20600128173828,99.35299682617188)"><path fill="rgb(218,8,0)" fill-opacity="1" d=" M4.698999881744385,-1.2979999780654907 C5.142000198364258,-6.380000114440918 7.065000057220459,-11.050000190734863 10.02400016784668,-14.888999938964844 C6.497000217437744,-18.479000091552734 3.8940000534057617,-22.98699951171875 2.6010000705718994,-28.01300048828125 C-4.752999782562256,-20.888999938964844 -9.442000389099121,-11.019000053405762 -9.748000144958496,-0.10599999874830246 C-10.02400016784668,9.722000122070312 -6.802999973297119,18.784000396728516 -1.2410000562667847,25.93400001525879 C0.37700000405311584,28.01300048828125 3.6070001125335693,27.740999221801758 4.923999786376953,25.459999084472656 C4.923999786376953,25.459999084472656 7.021999835968018,21.82699966430664 7.021999835968018,21.82699966430664 C7.021999835968018,21.82699966430664 8.715999603271484,18.889999389648438 8.715999603271484,18.889999389648438 C9.402000427246094,17.701000213623047 9.401000022888184,16.219999313354492 8.663000106811523,15.060999870300293 C5.697999954223633,10.39900016784668 4.163000106811523,4.736000061035156 4.698999881744385,-1.2979999780654907z"></path></g><g opacity="1" transform="matrix(1,0,0,1,75.00800323486328,72.0770034790039)">
                            <path fill="rgb(255,204,0)" fill-opacity="1" d=" M-0.6309999823570251,-12.218000411987305 C-11.293999671936035,-12.062000274658203 -21.020999908447266,-7.710000038146973 -28.201000213623047,-0.7429999709129333 C-28.201000213623047,-0.7429999709129333 -28.201000213623047,-0.7369999885559082 -28.201000213623047,-0.7369999885559082 C-26.909000396728516,4.289000034332275 -24.304000854492188,8.79699993133545 -20.777000427246094,12.38700008392334 C-16.35700035095215,6.64300012588501 -9.614999771118164,2.7720000743865967 -2.010999917984009,2.2100000381469727 C7.242000102996826,1.5230000019073486 15.58899974822998,5.669000148773193 20.757999420166016,12.380000114440918 C24.304000854492188,8.777999877929688 26.909000396728516,4.251999855041504 28.201000213623047,-0.7990000247955322 C20.759000778198242,-8.003999710083008 10.576000213623047,-12.38700008392334 -0.6309999823570251,-12.218000411987305z"></path></g></g>
                    <g transform="matrix(4.981858730316162,4.221609115600586,-4.221609115600586,4.981858730316162,624.2465209960938,-69.80792236328125)" opacity="1" style={{ display: 'block' }}><g opacity="1" transform="matrix(1,0,0,1,75,117.94999694824219)"><path fill="rgb(29,35,39)" fill-opacity="1" d=" M-3.8519999980926514,0 C-3.8519999980926514,-2.127000093460083 -2.128000020980835,-3.8510000705718994 -0.0010000000474974513,-3.8510000705718994 C2.125999927520752,-3.8510000705718994 3.8519999980926514,-2.127000093460083 3.8519999980926514,0 C3.8519999980926514,2.127000093460083 2.125999927520752,3.8510000705718994 -0.0010000000474974513,3.8510000705718994 C-2.128000020980835,3.8510000705718994 -3.8519999980926514,2.127000093460083 -3.8519999980926514,0z"></path></g><g opacity="1" transform="matrix(1,0,0,1,75,100.15499877929688)"><path fill="rgb(29,35,39)" fill-opacity="1" d=" M3.197000026702881,13.36299991607666 C2.2990000247955322,12.717000007629395 1.190999984741211,12.331000328063965 0,12.331000328063965 C-1.1920000314712524,12.331000328063965 -2.299999952316284,12.717000007629395 -3.197000026702881,13.36299991607666 C-3.197000026702881,13.36299991607666 0,-13.36299991607666 0,-13.36299991607666 C0,-13.36299991607666 3.197000026702881,13.36299991607666 3.197000026702881,13.36299991607666z"></path></g></g></g>
            </div> */}

            <HiringRecruttie />


            <Footer />
        </div>
    )
}

export default careers

