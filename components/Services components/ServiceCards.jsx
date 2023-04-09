import React from 'react'
import ServiceCard from './ServiceCard'
import Link from 'next/link'
import ReviewSlider from "../../components/ReviewSlider/RatingsSlider";
function ServiceCards() {
    return (
        <div className='flex flex-col lg:gap-8'>
            <ServiceCard heading={"Certified YouTube Consultant"}
                heading2={`Unlock Your YouTube Channel${"'"}s Potential with a Certified YouTube Strategist`}
                para={`Unleash your channel${"'"}s potential with YouTube Content Strategy. Get a comprehensive channel evaluation and a tailored strategy that help you unlock the secrets to YouTube Channel Growth , connect with your audience, and build your brand on this exciting platform. Ready to take your channel to new heights? `}
                btntext={`Let${"'"}s get started`} bgColor={"bg_servicecard_main"} link={"/youtube-consultation"} />

            <ServiceCard heading={"YouTube SEO"}
                heading2={"Supercharge Your Videos with YouTube SEO Services"}
                para={`Get Your Videos Ranked on YouTube Search Results to drive consistent traffic and engaged subscribers. Take your YouTube presence to the next level by ranking high on World${"'"}s Second Largest Search Engine using Winning YouTube Video Optimization Strategies.`}
                btntext={"Dominate YouTube Search Now"} bgColor={"bg_BYT"} link={"/youtube-seo"} />

            <ServiceCard heading={"YouTube Keywords Research"}
                heading2={"Crush the Competition with Winning YouTube Keywords"}
                para={`Get ahead of the competition and unlock your Channel${"'"}s potential with Winning YouTube Keywords having high search volume, low competition, and rising future trend that help boost organic growth and visibility on YouTube.`}
                btntext={"Elevate your YouTube Game"} bgColor={"bg_card"} link={"/youtube-keyword-research"} />

            {/* rating of the gogle clietns review section */}
            <ReviewSlider />

            <ServiceCard heading={"YouTube Automation"}
                heading2={"Unleash Passive Income with Faceless Videos on Automated YouTube Channel"}
                para={"Take the first step towards effortless YouTube success with YouTube Automation! Our innovative service offers Winning niche selection, Channel Set Up, Faceless Video Creation, and Expert Channel Management, all designed to help you generate Passive Income from your Automated YouTube channel."}
                btntext={"Get started today"} bgColor={"bg_BYT"} link={"/youtube-automation"} />

            <ServiceCard heading={"YouTube Monetization"}
                heading2={"Unlock Your YouTube Earnings Potential with Organic Monetization"}
                para={`Get your YouTube Channel Monetized Sustainably with winning content strategy! Boost your earnings potential and maximize your content${"'"}s value without relying on third-class promotions that harm your channel${"'"}s performance.`}
                btntext={"Skyrocket Your Profits Today"} bgColor={"bg_card"} link={"/youtube-monetization"} />

            <ServiceCard heading={"YouTube Promotion "}
                heading2={"Write ABCDEF ABCDEF ABCDEF ABCDEF ABCDEF "}
                para={"Effectively target and engage with the right audience to not only Grow your YouTube Channel but also to Generate Leads and boost your online presence."}
                btntext={"Promote your Channel Now"} bgColor={"bg_BYT"} link={"/youtube-promotion-ads"} />


            <ServiceCard heading={" Overall YouTube Channel Management"}
                heading2={"Revolutionize Your YouTube Presence with Expert YouTube Channel Management Services"}
                para={"Take your YouTube channel to the next level with our YouTube Automation Services. We handle everything from YouTube Content Creation to YouTube Channel Management, allowing you to grow your brand without ever having to appear on camera. Let us help you grow your audience, engage your viewers, and achieve your YouTube goals with ease."}
                btntext={"Let us Help us Grow"} bgColor={"bg_card"} link={"/youtube-channel-managment"} />

        </div>
    )
}

export default ServiceCards