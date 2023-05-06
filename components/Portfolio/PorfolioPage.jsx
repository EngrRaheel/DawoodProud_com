
import React, { useEffect } from 'react';
import PorftfoliCard from './PortfoliCard'
import TwitterTweet from './TwitterTweet'
import InstagramPost from './InstagramPost';

function PorfolioPage() {



    const portfolioData = [

        {
            "SectionId": "Emil_Anton",
            "ChannelName": "Alux.com",
            "TweetComponent": (
                <div>
                    <TwitterTweet
                        name="Emil Anton"
                        username="@EmilAnton"
                        text=" Dawood&#39;s expertise in providing a personalized content strategy was invaluable in helping me grow my brand
                                on YouTube. With his guidance, I was able to connect with my audience in meaningful ways and increase my reach on the platform.
                               I highly recommend his services to anyone looking to improve their YouTube presence,
                                as he truly understands the nuances of the platform and how to make your content stand out. Thank you, Dawood!"
                        img="/Images/Portfolio/TwitterDP/Emil_Anton.jpeg"
                        likes="373"
                        read="23" />
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
                    <TwitterTweet
                        name="Ashkan Karbasfrooshan"
                        username="@ashkan"
                        text="&quot;DP's YouTube Services have been a game-changer for Watch Mojo! Thanks to your algorithm expertise, because of which our channel has seen explosive growth. Your dedication and knowledge have helped us reach new heights and engage with our audience in meaningful ways. We appreciate your hard work and commitment to helping us succeed on YouTube!&quot;"
                        // date="{ fsaf}"
                        img="/Images/Portfolio/TwitterDP/ashkan.jpg"
                        likes="157"
                        read="34"
                    />
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
                    <InstagramPost
                        name="zhccrafts"
                        para="Thanks to my incredible Content Ideas Guru, my art channel is now bursting with fresh and exciting video ideas that my subscribers love! 
                        Their expertise in understanding my niche and target audience has helped me grow my channel and engage with my viewers in new and exciting ways.
                         I highly recommend their services to any content creator looking to take their channel to the next level. Thank you, Content Ideas Guru!"
                        likes="2,337"
                        img="/Images/Portfolio/InstaDP/zhc.jpg"
                    />
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
                    <InstagramPost
                        name="linustech"
                        para="Thanks to my beloved YouTube SEO, most of my videos are now dominating Google & YouTube search results!
                         It&#39;s amazing to see my content rise to the top and reach a wider audience, all thanks to the power of search engine optimization.
                          If you&#39;re looking to improve your YouTube presence, I highly recommend investing in your YouTube SEO strategy. 
                          It can make all the difference in getting your content noticed and growing your channel."
                        img="/Images/Portfolio/InstaDP/linustech.jpg"
                        likes="21.3k"
                    />
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
                    <TwitterTweet
                        name="emmymade"
                        username="@emmymadeinjapan"
                        text="Thanks to my amazing YouTube Keywords Researcher, 
                        I have discovered the perfect keywords to help my food content thrive in the USA.
                         Their expertise has helped me optimize my videos for search, resulting in increased visibility and engagement.
                         I highly recommend their services to any content creator looking to improve their discoverability on YouTube. Thank you🤗"

                        img="/Images/Portfolio/TwitterDP/emmymade.jpg"
                        likes="1,431"
                        read="17"
                    />
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
                    <TwitterTweet
                        name="Ian Plummer"
                        username="@IanJPlummer"
                        text="Thanks to your amazing services, TechAltar has been transformed! Your guidance has given my channel a clear direction and purpose, 
                              resulting in significant growth and engagement from my audience.
                              I am so grateful for your expertise in the YouTube space and highly recommend your services
                              to anyone looking to take their channel to the next level."

                        img="/Images/Portfolio/TwitterDP/Ian_Plummer.jpg"
                        likes="19"
                        read="7"
                    />
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
                    <InstagramPost
                        name="techaltar"
                        para="Thank you for your amazing services, which have truly been a Godsend for TechAltar! 
                        With your expert guidance, my channel now has a clear direction and purpose. As a result,
                        I have seen a significant increase in engagement and growth.
                        Your dedication and expertise have been invaluable, and I cannot recommend your services enough. Thank you again!"
                        img="/Images/Portfolio/InstaDP/techaltar.jpg"
                        likes="347"
                    />
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

