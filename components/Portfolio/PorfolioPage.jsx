
import React, { useEffect } from 'react';
import PorftfoliCard from './PortfoliCard'
import TwitterTweet from './TwitterTweet'
function PorfolioPage() {



    const portfolioData = [

        {
            "SectionId": "Emil_Anton",
            "ChannelName": "Alux.com",
            "TweetComponent": (
                <div>
                    <TwitterTweet />
                </div>
            ),
            "para": (
                <p>
                    At our YouTube services agency, we take great pride in helping our clients like <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@alux" target="_blank" >Alux.com</a></span> Channel to grow their presence on the platform.
                    We offer customized solutions to help our clients achieve their goals, and we have a proven track record of success.
                    We&#39;re happy to report that Alux.com Channel has seen significant growth in their viewership and subscribers thanks to our expert team of professionals.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/channelanalytics1.png",
        },

        {
            "SectionId": "Ashkan_Karbasfrooshan",
            "ChannelName": "Watch Mojo",
            "TweetComponent": (
                <div>
                    <TwitterTweet />
                </div>
            ),
            "para": (
                <p>
                    We&#39;re excited to share that our YouTube services agency has been working with <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@WatchMojo" target="_blank" >Watch Mojo</a></span>  Channel to help them grow their channel
                    and increase their views. Our team of experts has provided personalized solutions to help Watch Mojo Channel achieve their goals,
                    and the results have been impressive. We&#39;re thrilled to see that Watch Mojo Channel has seen significant growth in their viewership and engagement.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/channelanalytics2.png",
        },

        {
            "SectionId": "Zach_Hsieh",
            "ChannelName": "ZHC Crafts",
            "TweetComponent": (
                <div>
                    <TwitterTweet />
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
            "Imageurl": "/Images/Portfolio/channelanalytics3.png",
        },

        {
            "SectionId": "Linus_Sebastian",
            "ChannelName": "Linus Tech Tips",
            "TweetComponent": (
                <div>
                    <TwitterTweet />
                </div>
            ),
            "para": (
                <p>
                    As a leading YouTube services agency, we&#39;ve been working closely with  <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@LinusTechTips" target="_blank" >Linus Tech Tips</a></span>  Channel to help them grow their channel and achieve their goals.
                    With our expert team of professionals, we&#39;ve provided customized solutions to help Linus Tech Tips Channel increase their viewership and engagement.
                    We&#39;re pleased to report that Linus Tech Tips Channel has seen significant growth and success thanks to our partnership.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/channelanalytics4.png",
        },

        {
            "SectionId": "Emmeline_Mayline",
            "ChannelName": "EmmyMade",
            "TweetComponent": (
                <div>
                    <TwitterTweet />
                </div>
            ),
            "para": (
                <p>
                    <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@emmymade" target="_blank" >EmmyMade</a></span> Channel has partnered with our YouTube services agency to help grow their channel and increase their viewership.
                    With our expertise and experience, we&#39;ve provided tailored solutions to help EmmyMade Channel achieve their goals.
                    We&#39;re thrilled to see that our partnership with EmmyMade Channel has been a success, with significant growth in their subscribers and views.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/channelanalytics6.png",
        },

        {
            "SectionId": "Ian_Plummer",
            "ChannelName": "AutoTrader",
            "TweetComponent": (
                <div>
                    <TwitterTweet />
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
            "Imageurl": "/Images/Portfolio/channelanalytics7.png",
        },

        {
            "SectionId": "Marton_Barcza",
            "ChannelName": "TechAltar",
            "TweetComponent": (
                <div>
                    <TwitterTweet />
                </div>
            ),
            "para": (
                <p>
                    Our YouTube services agency has been working with  <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/channel/UCtZO3K2p8mqFwiKWb9k7fXA" target="_blank" >TechAltar</a></span>  Channel to help them achieve their growth objectives,
                    and we&#39;re happy to report that we&#39;ve helped them achieve remarkable success. Our team of experts has provided personalized solutions to TechAltar Channel,
                    resulting in substantial growth in their subscribers and viewership. We&#39;re proud to have played a role in TechAltar Channel&#39;s success on the platform.
                </p>
            ),
            "Imageurl": "/Images/Portfolio/channelanalytics5.png",
        },
    ]

    return (
        <div>
            {portfolioData.map((item, index) => (
                <div key={index}>
                    <PorftfoliCard image={item.Imageurl} ChannelName={item.ChannelName} para={item.para} tweet={item.TweetComponent} SectionId={item.SectionId} />
                </div>
            ))}
        </div>
    )
}

export default PorfolioPage

