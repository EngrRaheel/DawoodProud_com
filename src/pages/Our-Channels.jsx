import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SiderBar from '../../components/Our Channels/Sidebar';
import ChannelPage from '../../components/Our Channels/ChannelsPage';

function ourChannels() {
    return (
        <div className="w-full min-h-screen grid grid-cols-1">
            <Navbar bg_color={"bg-blue"} position={'fixed'} />
            <div className='grid  grid-cols-1 md:grid-cols-12  mt-6 bg-white'>
                <div className=' mx-[4%] col-span-3 '>
                    <div className='sticky top-12'>
                        <SiderBar />
                    </div>
                </div>
                <div className='col-span-7 overflow-auto mt-20 '>
                    <p className='px-3 text-sm md:text-base lg:text-lg font-normal'>
                        Welcome to &quot;Our Channels&quot; page, where we showcase our expertise in YouTube growth strategies. We don&#39;t just talk the talk, we walk the walk. Our channels are the living proof of our ability to apply winning YouTube content strategies that help channels grow. As a wise person once said, &quot;Don&#39;t tell me, show me.&quot; And that&#39;s exactly what we&#39;re doing here.
                        We specialize in not only understanding the <strong>YouTube Algorithm</strong>, but also in applying those strategies to grow our channels. We believe that success is not a one-size-fits-all approach, which is why we offer <strong>customized growth strategies</strong> tailored to each channel&#39;s unique needs.
                        While we have channels in various niches, we&#39;ve highlighted a few examples here to give you a taste of what we can do. Whether you&#39;re a beauty guru, a gaming enthusiast, or a business owner, we&#39;ve got you covered.
                        Also, If you&#39;re interested in promoting your brand on our channels, please don&#39;t hesitate to reach out to us at our official email address or contact number.
                    </p>
                    <div>
                        <ChannelPage />
                    </div>
                    <p className='px-3 text-sm md:text-base lg:text-lg font-normal mb-6'>
                        If you&#39;re interested in exploring our complete list of YouTube channels across various niches for promotional purposes, please don&#39;t hesitate to contact us at our official number. 
                        We&#39;ll work with you to identify the most relevant channel for your needs and help you achieve your YouTube Growth goals.
                    </p>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default ourChannels