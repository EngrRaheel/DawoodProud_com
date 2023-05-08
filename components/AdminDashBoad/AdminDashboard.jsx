import React, { useState } from 'react';
import AdminTable from './AdminTable';
import ClientInfoTable from './ClientInfoTable';
import ApplicantInfoTable from './ApplicantInfoTable';
import Navbar from '../common/Navbar';
import Image from 'next/image';
import { RiAdminFill } from "react-icons/ri"
import { FaUser } from "react-icons/fa"
import { HiOutlineLogout } from "react-icons/hi"
// import DashBoardSidebar from './DashBoardSidebar';

function AdminDashboard({onclick}) {
    const [activeTab, setActiveTab] = useState('admin');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'admin':
                return <AdminTable />;
            case 'client':
                return <ClientInfoTable />;
            case 'applicant':
                return <ApplicantInfoTable />;
            default:
                return null;
        }
    };

    return (
        <div className='font-inter'>
            <div className='text-black bg-[white] grid grid-cols-12 min-h-screen '>
                <div className='w-full flex flex-col justify-between items-center bg-[#001e2b]  text-white col-span-2 '>
                    <div className='w-full p-3 text-base font-bold   space-y-8'>
                        <div className='w-[90px] h-[90px] relative mx-auto'>
                            <Image src={"/Images/logo.png"} fill className='rounded-full object-contain' />
                        </div>
                        <div div className='mt-6 text-xl md:text-2xl lg:text-2xl font-bold abdal_color mx-auto'>
                            <h1>Admin Pannel</h1>
                            <hr className='w-full h-[1px] text-[gray] mt-3' />
                        </div>

                        <ul className='mt-12 space-y-4'>
                            <li className='flex justify-start items-center gap-2 text-lg'>
                                <RiAdminFill size={20} />
                                <button onClick={() => handleTabChange('admin')} >
                                    Admin
                                </button>
                            </li>
                            <li className='flex justify-start items-center gap-2 text-lg'>
                                <FaUser size={20} className="text-[pink]" />
                                <button onClick={() => handleTabChange('client')}>
                                    Client Info
                                </button>
                            </li>
                            <li className='flex justify-start items-center gap-2 text-lg'>
                                <FaUser size={20} className="text-[pink]" />
                                <button onClick={() => handleTabChange('applicant')}>
                                    Applicant Info
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* log out button */}

                    <button 
                    onClick={onclick}
                     className=' flex gap-2 items-center justify-center py-2 self-start ml-2 font-semibold'>
                        <p>Log out </p>
                        <HiOutlineLogout size={15}/>
                    </button>
                </div>
                {/* <DashBoardSidebar /> */}
                <div className="flex flex-col justify-start col-span-10 w-full">
                    <div className=' flex justify-between items-center bg-[white] border-b border-[gray]/50 h-[64px] w-full  mx-auto px-4'>
                        <div className='text-xl text-[gray] font-semibold'>
                            Welcome to Admin Pannel
                        </div>
                        <div className='w-[50px] h-[50px] relative'>
                            <Image src={"/Images/TeamMembers/CEO/ceodawoodproud3.jpg"} fill className='rounded-full object-contain' />
                        </div>
                    </div>
                    <div className='mx-auto w-full'>
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
