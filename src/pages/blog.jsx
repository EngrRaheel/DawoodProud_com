import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SignIn from '../../components/AdminDashBoad/SignIn';

function blog() {
    return (

        <div className="w-full  flex items-center justify-center flex-col bg-cover bg-center  bg-[url('/Images/main-bg1.jpg')]">
            <Navbar bg_color={"bg-blue"} position={'fixed'} />
            <div className='relative'>
                <SignIn />
            </div>
            <Footer />
        </div>

    )
}

export default blog