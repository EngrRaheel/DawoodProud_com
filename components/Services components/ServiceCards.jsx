import React from 'react'
import ServiceCard from './ServiceCard'
import Link from 'next/link'
import ReviewSlider from "../../components/ReviewSlider/RatingsSlider";
import TrustPilotReview from '../TrustPilot/TrustPilotReview';
import YtSlider from "../YtSlider/Slider"

function ServiceCards() {
    return (
        <div className="flex flex-col space-y-14 p-2 gap-8">
            {/* <YtSlider /> */}

            {/* Channel${"'"}s */}

            <ServiceCard heading={"Certified YouTube Consultant"}
                heading2={`Unlock Your YouTube  Potential with a Certified YouTube Strategist`}
                para={`Unleash your channel${"'"}s potential with YouTube Content Strategy. Get a comprehensive channel evaluation and a tailored strategy that help you unlock the secrets to YouTube Channel Growth , connect with your audience, and build your brand on this exciting platform. Ready to take your channel to new heights? `}
                btntext={`Let${"'"}s get started`} link={"/youtube-consultation"} images={"/Images/Services/Certified YouTube Consultant.png"} />

            <ServiceCard heading={"YouTube SEO"}
                heading2={"Supercharge Your Videos with YouTube SEO Services"}
                para={`Get Your Videos Ranked on YouTube Search Results to drive consistent traffic and engaged subscribers. Take your YouTube presence to the next level by ranking high on World${"'"}s Second Largest Search Engine using Winning YouTube Video Optimization Strategies.`}
                btntext={"Dominate YouTube Search Now"} bgColor={""} link={"/youtube-seo"} images={"/Images/Services/Youtube SEO.png"} />


            {/* rating of the gogle clietns review section */}

            <ReviewSlider />


            {/* </div> */}


            <ServiceCard heading={"YouTube Keywords Research"}
                heading2={"Crush the Competition with Winning YouTube Keywords"}
                para={`Get ahead of the competition and unlock your Channel${"'"}s potential with Winning YouTube Keywords having high search volume, low competition, and rising future trend that help boost organic growth and visibility on YouTube.`}
                btntext={"Elevate your YouTube Game"} bgColor={""} link={"/youtube-keyword-research"} images={"/Images/Services/YouTube keywords Research.png"} />

            {/* Automated  */}

            <ServiceCard heading={"YouTube Automation"}
                heading2={"Unleash Passive Income with Faceless Videos on YouTube Channel"}
                para={"Take the first step towards effortless YouTube success with YouTube Automation! Our innovative service offers Winning niche selection, Channel Set Up, Faceless Video Creation, and Expert Channel Management, all designed to help you generate Passive Income from your Automated YouTube channel."}
                btntext={"Get started today"} bgColor={""} link={"/youtube-automation"} images={"/Images/Services/YouTube Automation.webp"} />

            {/* <div className="bg-cover bg-center bg-[url('/Images/blob_bg_2.png')]"> */}

            <ServiceCard heading={"YouTube Monetization"}
                heading2={"Unlock Your YouTube Earnings Potential with Organic Monetization"}
                para={`Get your YouTube Channel Monetized Sustainably with winning content strategy! Boost your earnings potential and maximize your content${"'"}s value without relying on third-class promotions that harm your channel${"'"}s performance.`}
                btntext={"Skyrocket Your Profits Today"} bgColor={""} link={"/youtube-monetization"} images={"/Images/Services/YouTube Monetization.png"} />

            <ServiceCard heading={"YouTube Promotion "}
                heading2={"Supercharge Your YouTube Presence with Our Pro Promotion Services"}
                para={"Effectively target and engage with the right audience to not only Grow your YouTube Channel but also to Generate Leads and boost your online presence."}
                btntext={"Promote your Channel Now"} bgColor={""} link={"/youtube-promotion-ads"} images={"/Images/Services/YouTube Promotion_1.png"} />


            <ServiceCard heading={" Overall YouTube Channel Management"}
                heading2={"Transform Your YouTube Channel with Expert Management Services"}
                para={"Take your YouTube channel to the next level with our YouTube Automation Services. We handle everything from YouTube Content Creation to YouTube Channel Management, allowing you to grow your brand without ever having to appear on camera. Let us help you grow your audience, engage your viewers, and achieve your YouTube goals with ease."}
                btntext={"Let us Help us Grow"} bgColor={""} link={"/youtube-channel-managment"} images={"/Images/Services/Overall YouTube Channel Management.png"} />

            <TrustPilotReview />

        </div>

    )
}

export default ServiceCards