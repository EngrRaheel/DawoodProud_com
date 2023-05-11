
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
                    <a href="https://twitter.com/i/flow/signup" target="_blank">
                        <div class="whitespace-pre-line">
                            <TwitterTweet
                                name="Alux.com"
                                username="@aluxcom"
                                text={`Hey Twitter fam! So many of you have been asking about our YouTube content strategy and services,

                                        and we're happy to reveal that we've been using Dawood Proud Services for a while now!
                                        They're doing an amazing job, and we're grateful for their expertise.`}
                                img="/Images/Portfolio/TwitterDP/alux.jpg"
                                date="9:18 PM · December 15, 2022"
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
            "Imageurl": "/Images/Portfolio/Analytics/channelanalytics1.png",
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
                    <a href="https://twitter.com/i/flow/signup" target="_blank">
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
                    We&#39;re excited to share that our YouTube services agency has been working with <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@WatchMojo" target="_blank" >Watch Mojo</a></span>  Channel to help them grow their channel
                    and increase their views. Our team of experts has provided personalized solutions to help Watch Mojo Channel achieve their goals,
                    and the results have been impressive. We&#39;re thrilled to see that Watch Mojo Channel has seen significant growth in their viewership and engagement.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/channelanalytics2.png",
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
                            likes="2,337"
                            img="/Images/Portfolio/InstaDP/zhc.jpg"
                            post="/Images/Portfolio/Instapost/post1.jpg"
                        />
                    </a>
                </div>
            ),
            "para": (
                <p>
                    <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@zhccrafts" target="_blank" >ZHC Crafts</a></span>  Channel has been working with our YouTube services agency to achieve their growth objectives,
                    and we&#39;re proud to say that we&#39;ve helped them achieve great success. Our team of professionals has
                    provided tailored solutions to ZHC Crafts Channel, resulting in substantial growth in their viewership and subscribers.
                    We&#39;re happy to report that our collaboration with ZHC Crafts Channel has been a resounding success.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/channelanalytics3.png",
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
                    <a href='https://www.instagram.com/accounts/login/' target="_blank">
                        <InstagramPost
                            name="linustech"
                            para="As a YouTube content creator, I knew that optimizing my videos for search engines was crucial for success. Most of my videos are now dominating Google & YouTube Search Results only because of Dawood. Thanks to my beloved YouTube SEO specialists! "
                            img="/Images/Portfolio/InstaDP/linustech.jpg"
                            likes="21.3k"
                            post="/Images/Portfolio/Instapost/post2.jpg"
                        />
                    </a>
                </div>
            ),
            "para": (
                <p>
                    As a leading YouTube services agency, we&#39;ve been working closely with  <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@LinusTechTips" target="_blank" >Linus Tech Tips</a></span>  Channel to help them grow their channel and achieve their goals.
                    With our expert team of professionals, we&#39;ve provided customized solutions to help Linus Tech Tips Channel increase their viewership and engagement.
                    We&#39;re pleased to report that Linus Tech Tips Channel has seen significant growth and success thanks to our partnership.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/channelanalytics4.png",
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
                    <a href="https://twitter.com/i/flow/signup" target="_blank">
                        <div className='whitespace-pre-line'>
                            <TwitterTweet
                                name="emmymade"
                                username="@emmymadeinjapan"
                                text={`Thanks to my amazing YouTube Keywords Researcher, I have discovered the perfect keywords to help my food content thrive in the USA.
                                 
                                 Their expertise has helped me optimize my videos for search, resulting in increased visibility and engagement. I highly recommend their services to any content creator looking to improve their discoverability on YouTube. Thank you🤗`}

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
                    <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@emmymade" target="_blank" >EmmyMade</a></span> Channel has partnered with our YouTube services agency to help grow their channel and increase their viewership.
                    With our expertise and experience, we&#39;ve provided tailored solutions to help EmmyMade Channel achieve their goals.
                    We&#39;re thrilled to see that our partnership with EmmyMade Channel has been a success, with significant growth in their subscribers and views.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/channelanalytics6.png",
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
                    <a href="https://twitter.com/i/flow/signup" target="_blank">
                        <div className='whitespace-pre-line'>
                            <TwitterTweet
                                name="Ian Plummer"
                                username="@IanJPlummer"
                                text={`Thanks to your amazing services, TechAltar has been transformed! Your guidance has given my channel a clear direction and purpose, resulting in significant growth and engagement from my audience.
                              
                            I am so grateful for your expertise in the YouTube space and highly recommend your services
                              to anyone looking to take their channel to the next level.`}

                                img="/Images/Portfolio/TwitterDP/Ian_Plummer.jpg"
                                likes="19"
                                read="7"
                            />
                        </div>
                    </a>
                </div>
            ),
            "para": (
                <p>
                    We&#39;ve been working with  <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@AutoTraderTV" target="_blank" >AutoTrader</a></span>  Channel at our YouTube services agency to help them achieve their growth goals on the platform.
                    With our expert team of professionals,
                    we&#39;ve provided customized solutions to help AutoTrader Channel increase their viewership and subscribers.
                    We&#39;re pleased to report that our partnership with AutoTrader Channel has been a success, resulting in substantial growth
                    and increased engagement on the channel.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/channelanalytics7.png",
        },

        {
            "SectionId": "Marton_Barcza",

            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/channel/UCtZO3K2p8mqFwiKWb9k7fXA" target="_blank">
                        TechAltar
                    </a>
                </div>
            )
            ,
            "TweetComponent": (
                <div>
                    <a href='https://www.instagram.com/accounts/login/' target="_blank">
                        <InstagramPost
                            name="techaltar"
                            para="Thank you for your amazing services, which have truly been a Godsend for TechAltar! 
                        With your expert guidance, my channel now has a clear direction and purpose. As a result,
                        I have seen a significant increase in engagement and growth.
                        Your dedication and expertise have been invaluable, and I cannot recommend your services enough. Thank you again!"
                            img="/Images/Portfolio/InstaDP/techaltar.jpg"
                            likes="347"
                        />
                    </a>
                </div>
            ),
            "para": (
                <p>
                    Our YouTube services agency has been working with  <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/channel/UCtZO3K2p8mqFwiKWb9k7fXA" target="_blank" >TechAltar</a></span>  Channel to help them achieve their growth objectives,
                    and we&#39;re happy to report that we&#39;ve helped them achieve remarkable success. Our team of experts has provided personalized solutions to TechAltar Channel,
                    resulting in substantial growth in their subscribers and viewership. We&#39;re proud to have played a role in TechAltar Channel&#39;s success on the platform.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/Analytics/channelanalytics5.png",
        },
    ]

    return (
        <div>
            {portfolioData.map((item, index) => (
                <div key={index} className="mb-20">
                    <PorftfoliCard image={item.Imageurl} ChannelName={item.ChannelName} para={item.para} tweet={item.TweetComponent} SectionId={item.SectionId} />
                </div>
            ))}
        </div>
    )
}

export default PorfolioPage

