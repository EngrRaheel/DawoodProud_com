
import React, { useEffect } from 'react';
import PorftfoliCard from './PortfoliCard'
import TwitterTweet from './TwitterTweet'
import InstagramPost from './InstagramPost';

function PorfolioPage() {



    const portfolioData = [

        {
            "SectionId": "Emil_Anton",
            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@alux" target="_blank">
                        Alux.com
                    </a>
                </div>
            )
            ,
            "TweetComponent": (
                <div>
                    <a href="https://twitter.com/i/flow/signup" >
                        <div class="whitespace-pre-line">
                            <TwitterTweet
                                name="Alux.com"
                                username="@aluxcom"
                                text={`Hey Twitter fam! So many of you have been asking about our YouTube content strategy and services,

                                        we're happy to reveal that we've been using  @DawoodProud Services for a while now!
                                        They're doing an amazing job, and we're grateful for their expertise.`}
                                img="/Images/Portfolio/TwitterDP/alux.jpg"
                                date="9:18 PM · Dec 15, 2022"
                                likes="373"
                                read="23" />
                        </div>
                    </a>

                </div>
            ),
            "para": (
                <p>
                    At our YouTube services agency, we take great pride in helping our clients like <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@alux" target="_blank" >Alux.com</a></span> Channel to grow their presence on the platform.
                    We offer customized solutions to help our clients achieve their goals, and we have a proven track record of success.
                    We&#39;re happy to report that Alux.com Channel has seen significant growth in their viewership and subscribers thanks to our expert team of professionals.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/alux.com.jpg",
        },

        {
            "SectionId": "Ashkan_Karbasfrooshan",

            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@WatchMojo" target="_blank">
                        Watch Mojo
                    </a>
                </div>
            )
            ,
            "TweetComponent": (
                <div>
                    <a href="https://twitter.com/i/flow/signup" >
                        <div className='whitespace-pre-line'>
                            <TwitterTweet
                                name="Ashkan Karbasfrooshan"
                                username="@ashkan"
                                text={`DP${"'"}s YouTube Services have been a game-changer for Watch Mojo! Thanks to your algorithm expertise, because of which our channel has seen explosive growth. 
                                
                                Your dedication and knowledge have helped us reach new heights and engage with our audience in meaningful ways. We appreciate your hard work and commitment to helping us succeed on YouTube!`}
                                date="9:18 PM · Jan 18, 2023"
                                img="/Images/Portfolio/TwitterDP/ashkan.jpg"
                                likes="157"
                                read="34"
                            />
                        </div>
                    </a>
                </div>
            ),
            "para": (
                <p>

                    Ashkan Karbasfrooshan, CEO of WatchMojo Company and YouTube Channel, highly recommends DP&#39;s YouTube services.
                    According to him, Our YouTube Algorithm expertise has been a game-changer
                    for <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@WatchMojo" target="_blank" >Watch Mojo</a></span> ,
                    resulting in explosive growth for their channel. This endorsement is a testament to the effectiveness of DP&#39;s services and their ability
                    to help any YouTube channel looking to grow.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/watchmojo.jpg",
        },

        {
            "SectionId": "Zach_Hsieh",

            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@zhccrafts" target="_blank">
                        ZHC Crafts
                    </a>
                </div>
            )
            ,
            "TweetComponent": (
                <div>
                    <a href='https://www.instagram.com/accounts/login/' target="_blank">
                        <InstagramPost
                            name="zhccrafts"
                            para={`Thanks to my incredible Content Ideas Guru Dawood, because of him, my art channel is now bursting with fresh and exciting video ideas that my subscribers love! With ${'@Dawoodproud'} and his team${"'"}s help, I${"'"}ve been able to take my content to the next level and provide my viewers with high-quality, engaging videos that keep them coming back for more. Their ability to understand my niche and provide me with unique and creative ideas has been invaluable. I${"'"}m so grateful for their expertise and support!`}
                            likes="9,781"
                            img="/Images/Portfolio/InstaDP/zhc.jpg"
                            post="/Images/Portfolio/Instapost/post1.jpg"
                            followers="3.4M"
                            comments="149"
                        />
                    </a>
                </div>
            ),
            "para": (
                <p>

                    It&#39;s always a pleasure to see my clients succeed and thrive, especially when I can play a part in helping them reach new heights.
                    Recently, I had the pleasure of working with Zach Hsieh, the talented artist and content creator behind the <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@zhccrafts" target="_blank" >ZHC Crafts</a></span> YouTube channel.
                    I&#39;m thrilled to share the review he kindly posted on Instagram.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/zhscraft.jpg",
        },

        {
            "SectionId": "Linus_Sebastian",

            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@LinusTechTips" target="_blank">
                        Linus Tech Tips
                    </a>
                </div>
            )
            ,
            "TweetComponent": (
                <div>
                    <a href="https://twitter.com/i/flow/signup" >
                        <div className='whitespace-pre-line'>
                            <TwitterTweet
                                name="Linus Tech Tips"
                                username="@LinusTech"
                                text={`As a YouTube content creator, I knew that optimizing my videos for search engines was crucial for success. 
                            
                            Most of my videos are now dominating Google & YouTube Search Results only because of Dawood. Thanks to my beloved YouTube SEO specialists! `}
                                date="9:18 PM · Jan 18, 2023"
                                img="/Images/Portfolio/TwitterDP/linustech.jpg"
                                likes="21.47K"
                                read="234"
                            />
                        </div>
                    </a>
                </div>
            ),
            "para": (
                <p>

                    Linus Sebastian, a prominent tech YouTuber, recently gave a glowing review of our YouTube SEO services.
                    In his tweet, he credited us for helping his videos dominate Google and YouTube search results.
                    We are honored to have worked with Linus and to have contributed to his success on YouTube.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/linustechtips.jpg",
        },

        {
            "SectionId": "Emmeline_Mayline",

            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@emmymade" target="_blank">
                        EmmyMade
                    </a>
                </div>
            )
            ,
            "TweetComponent": (
                <div>
                    <a href="https://twitter.com/i/flow/signup" >
                        <div className='whitespace-pre-line'>
                            <TwitterTweet
                                name="emmymade"
                                username="@emmymadeinjapan"
                                text={`As a content creator, I know how important it is to use the right keywords to make your videos stand out on YouTube.

                                Luckily, I found @DawoodProud, Thanks to my amazing YouTube Keywords Researcher, Dawood helped me discover Perfect Keywords that helped my food content thrive in the USA.`}

                                img="/Images/Portfolio/TwitterDP/emmymade.jpg"
                                likes="1,431"
                                read="17"
                            />
                        </div>
                    </a>
                </div>
            ),
            "para": (
                <p>
                    I am thrilled to share a glowing review from one of my valued clients, Emmeline.
                    She is a successful YouTuber known for her delicious cooking videos, and
                    I am honored to have played a role in her continued success.
                    Thank you, Emmy, for your support and trust in our services.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/emmymade.jpg",
        },

        {
            "SectionId": "Ian_Plummer",


            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@AutoTraderTV" target="_blank">
                        AutoTrader
                    </a>
                </div>
            )
            ,
            "TweetComponent": (
                <div>
                    <a href='https://www.instagram.com/accounts/login/' target="_blank">
                        <InstagramPost
                            name="autotraderuk"
                            para={`We chose @dawoodproud to help us increase sales and reach more customers. Their strategic video marketing engaged car buyers and sellers across the UK, leading to increased brand recognition and sales. Dawood${"'"}s team is professional, creative, and responsive, taking the time to understand our business and target audience. We highly recommend Dawood for their innovative and strategic approach that drives results.`}
                            img="/Images/Portfolio/InstaDP/autotrader.jpg"
                            likes="147"
                            post="/Images/Portfolio/Instapost/post2.jpg"
                            followers="124K"
                            comments="151"

                        />
                    </a>
                </div>
            ),
            "para": (
                <p>

                    <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@AutoTraderTV" target="_blank" >AutoTrader</a></span> appreciated our innovative video marketing
                    strategies that helped them increase sales.
                    They even posted about our collaboration on their official Instagram page, thanking us for our creativity and professionalism.
                    We&#39;re thrilled with the success of our partnership and can&#39;t wait to help more businesses achieve their goals!
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/autotrader.jpg",
        },


    ]

    return (
        <div>
            {portfolioData.map((item, index) => (
                <div key={index} className="mb-36">
                    <PorftfoliCard image={item.Imageurl} ChannelName={item.ChannelName} para={item.para} tweet={item.TweetComponent} SectionId={item.SectionId} />
                </div>
            ))}
        </div>
    )
}

export default PorfolioPage

