import React from 'react'
import TeamsMemberCard from './TeamsMemberCard'
import CEOCard from './CeoCard'
function TeamMembers() {
    return (
        <div className='flex flex-col justify-center items-center mx-auto space-y-14 gap-8 px-4 min-h-screen'>

            <div className='bg-white  mx-auto'>
                {/* <h1 className='text-[black] text-xl font-bold '>Our Team Members</h1> */}
                <h2 className='text-[black] text-4xl font-semibold '>Meet Our Team!</h2>
            </div>

            <div className='w-full mx-auto max-w-[1080px]'>
                <CEOCard
                    name="Muhammad Dawood"
                    position="CEO, Founder"
                    bio="Author of idea and founder of this Company. Dawood is the one driving the team, 
                        and keeping constant motivation running alive through each and every team member. 
                        Dawood's leadership is like a fresh cup of coffee - it wakes us up, keeps us energized,
                         and makes us feel like we can conquer the world... Or at least the next company meeting :)"
                />
            </div>

            <div className='flex flex-col justify-center items-center gap-10 mx-auto'>
                <p className='font-bold text-3xl'>Administrative Coordinator</p>
                <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                    <TeamsMemberCard
                        name="Rimsha Shaheen"
                        position="Cheif Coordinator"
                        bio="Rimsha, is like a superhero who communicates with different teams faster than the speed of light.
                         Her email game is so strong, it&#39;s rumored that she once received a response before hitting send!"
                        imageUrl="/Images/TeamMembers/Optimization experts/SeoExpert02.avif"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Muhammad Raheel"
                        position="Sales Coordinator"
                        bio="Raheel is like a magician who can sell ice to an Eskimo. 
                        He's so good at closing deals, some say he once sold a pen to a pencil factory."
                        imageUrl="/Images/TeamMembers/Coordinators/Coordinator1.jpg"
                        site="In-Office" />
                    {/* <TeamsMemberCard
                        name="komail Khan"
                        position="Administrative coordinator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs of Ahrefs innovations and developments.
                             He is the one  running alive through each and every team member."
                        imageUrl="/Images/TeamMembers/Coordinators/CheifCoord.jpg"

                        site="In-Office" />
                    <TeamsMemberCard
                        name="Behroz Saleem"
                        position="Sales coordinator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs of Ahrefs innovations and developments.
                             He is the one  running alive through each and every team member."
                        imageUrl="/Images/TeamMembers/Coordinators/Coordinator3.jpg"
                        site="In-Office" /> */}
                </div>
            </div>

            {/* Optimzation experts 🔶 */}
            <div className='flex flex-col justify-center items-center gap-10 mx-auto'>
                <p className='font-bold text-3xl'>Optimzation Experts</p>
                <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                    <TeamsMemberCard
                        name="Muhammad Younis Ali"
                        position="Cheif Optimization Expert"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one  running alive through each and every team member."
                        imageUrl="/Images/TeamMembers/Optimization experts/SeoExpert01.jpeg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Rimsha Shaheen"
                        position="Optimzation Expert"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team, and every team member."
                        imageUrl="/Images/TeamMembers/Optimization experts/SeoExpert02.avif"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Ammara Shaheen"
                        position="Optimzation Expert"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                            He is the one driving the team, each and every team member."
                        imageUrl="/Images/TeamMembers/Optimization experts/SeoExpert03.avif"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Muhammad Hamza"
                        position="Optimzation Expert"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Optimization experts/SeoExpert4.jpg"
                        site="Remote" />
                </div>
            </div>

            {/* Editiors🔶*/}
            <div className='flex flex-col justify-center items-center gap-10 mx-auto'>
                <h2 className='font-bold text-3xl'>Video Editors</h2>
                <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                    <TeamsMemberCard
                        name="Umair Khan"
                        position="Chief Video Editor"
                        bio="Umair is the chief video editor at our company, but he&#39;s also known as the &quot;Master of Cuts&quot; because he can make any footage look like a Hollywood blockbuster. Just don&#39;t ask him to edit his own TikTok videos."
                        imageUrl="/Images/TeamMembers/Editors/EditorInCheif.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Muhammad Jarjees"
                        position="Commercial Editor"
                        bio="Meet Jarjees, our commercial video editor who can make a boring ad look like a Hollywood blockbuster. He&#39;s so good at commercial editing, he can even make us excited about vacuum cleaners!"
                        imageUrl="/Images/TeamMembers/Editors/jarjees.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Haroon Khan"
                        position="Corporate video editor"
                        bio="Haroon Khan can make even the dullest meeting look like a blockbuster event. With his magic touch, your quarterly reports will have more drama than a Game of Thrones episode."
                        imageUrl="/Images/TeamMembers/Editors/haroon.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Ayesha Gul"
                        position="VFX Editor"
                        bio="Ayesha can make anything possible with a few clicks and some movie magic. From exploding buildings to flying unicorns, she's got your visual effects needs covered. (at least on screen)."
                        imageUrl="/Images/TeamMembers/Editors/Editor4.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Sana Zulqarnain"
                        position="Video Animator"
                        bio="Meet Sana, our video animator who can bring even the most lifeless objects to life. With her creativity, a spoon can become a superhero, a stapler can breakdance, and a pencil can fly."
                        imageUrl="/Images/TeamMembers/Editors/sana.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Tanveer Hassan"
                        position="Assistant Editor"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Tanveer.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Zubair Aslam"
                        position="Assistant Editor"
                        bio="Zubair can make a blooper reel look like an Oscar-winning masterpiece. He&#39;s so good at editing, he can even make our CEO&#39;s awkward & cringy dance moves look like a viral sensation. "
                        imageUrl="/Images/TeamMembers/Editors/zubair.jpg"
                        site="Remote" />
                    {/* <TeamsMemberCard
                        name="Ammir Khan"
                        position="Video Animator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor8.jpg"
                        site="Remote" /> */}
                    <TeamsMemberCard
                        name="Anmol Hussain"
                        position="Video Animator"
                        bio="Watch out Hollywood, we&#39;ve got a video editing superstar in our midst - she can make even the most mundane footage look like a blockbuster hit!"
                        imageUrl="/Images/TeamMembers/Editors/Editor9.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Hira Zaheer"
                        position="Assistant Editor"
                        bio="Hira is the master of both pixels and lipsticks. She ensures that every frame is not only flawlessly edited, but also looks stunning enough to make the Kardashians jealous."
                        imageUrl="/Images/TeamMembers/Editors/hira.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Moubeen Dawood"
                        position="Assistant Editor"
                        bio="Meet Moubeen Dawood, our Assistant Video Editor who is definitely NOT the Son of our CEO Dawood (or is he? We&#39;re still investigating). He&#39;s got an eye for detail and a knack for making us laugh."
                        imageUrl="/Images/TeamMembers/Editors/moubeen.jpg"
                        site="In-Office" />
                </div>
            </div>


            {/* Content Writes 🔶*/}
            <div className='flex flex-col justify-center items-center gap-10 mx-auto'>
                <p className='font-bold text-3xl'>Content Writer</p>
                <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                    <TeamsMemberCard
                        name="Farhan ALi Khan"
                        position="Expert Content Writer"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                            He is the one  running alive through each and every team member."
                        imageUrl="/Images/TeamMembers/ContentWrites/Contentwriter1.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Hurain Fatima"
                        position="Scriptwriter"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                            He is the one driving the team, and every team member."
                        imageUrl="/Images/TeamMembers/ContentWrites/Contentwriter2.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Kamran Shahid"
                        position="Expert Copywriter"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team, each and every team member."
                        imageUrl="/Images/TeamMembers/ContentWrites/Contentwriter3.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Zunaira Chaudhary"
                        position="SEO Content Writer"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/ContentWrites/Contentwriter4.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Zainab Abbas"
                        position="SEO Content Writer"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/ContentWrites/Contentwriter5.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Huma Khan"
                        position="SEO Content Writer"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/ContentWrites/Contentwriter6.jpg"
                        site="Remote" />
                </div>
            </div>


            {/* Thumbnail Designers 🔶*/}
            <div className='flex flex-col justify-center items-center gap-10 mx-auto'>
                <p className='font-bold text-3xl'>Thumbnail Designers</p>
                <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                    <TeamsMemberCard
                        name="Muhammad Zeeshan "
                        position="Cheif Tumnail Designer"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one  running alive through each and every team member."
                        imageUrl="/Images/TeamMembers/Thumbnail/Thumbnail1.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Ubaid Raza"
                        position="Photoshop Expert"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                            He is the one driving the team, and every team member."
                        imageUrl="/Images/TeamMembers/Thumbnail/Thumbnail2.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Muhammad Khalil"
                        position="Tech Thumnail Expert"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team, each and every team member."
                        imageUrl="/Images/TeamMembers/Thumbnail/Thumbnail3.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Nasir Hussain"
                        position="Conceptualist"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Thumbnail/Thumbnail4.jpg"
                        site="In-Office" />
                </div>
            </div>

            {/* expert voice artist */}
            <div className='flex flex-col justify-center items-center gap-10 mx-auto'>
                <p className='font-bold text-3xl'>Voice Artist</p>
                <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                    <TeamsMemberCard
                        name="Urvaha Karim"
                        position="Voice Artist (Asian)"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one  running alive through each and every team member."
                        imageUrl="/Images/TeamMembers/Voice Artist/VoiceArtist1.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Amelia"
                        position="Voice Artist (US)"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                            He is the one driving the team, and every team member."
                        imageUrl="/Images/TeamMembers/Voice Artist/VoiceArtist2.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Cameron S."
                        position="Voice Artist (US)"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team, each and every team member."
                        imageUrl="/Images/TeamMembers/Voice Artist/VoiceArtist3.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Irshad Akram"
                        position="Voice Artist (Asian)"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Voice Artist/VoiceArtist4.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Emma Watkins"
                        position="Voice Artist (US)"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team, each and every team member."
                        imageUrl="/Images/TeamMembers/Voice Artist/VoiceArtist5.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Liam Sant"
                        position="Voice Artist (UK)"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team, each and every team member."
                        imageUrl="/Images/TeamMembers/Voice Artist/VoiceArtist6.jpg"
                        site="Remote" />
                </div>
            </div>
        </div>




    )
}

export default TeamMembers