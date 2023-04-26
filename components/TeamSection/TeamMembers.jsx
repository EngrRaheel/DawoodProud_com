import React from 'react'
import TeamsMemberCard from './TeamsMemberCard'
function TeamMembers() {
    return (
        <div className='flex flex-col justify-center items-center mx-auto space-y-16 gap-10 px-4 min-h-screen'>

            <div className='flex flex-col font-Inter justify-center items-center bg-white  mx-auto'>
                <h1 className='text-[black] text-xl font-bold '>Our Team Members</h1>
                <p className='text-base font-normal'>Meet Our Team!</p>
            </div>



            <div className='flex flex-col justify-center items-center gap-10 mx-auto'>
                <p className='font-bold text-3xl'>Office Coordinators</p>
                <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                    <TeamsMemberCard
                        name="Ahmed Raza"
                        position="Cheif Coordinator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs of Ahrefs innovations and developments.
                             He is the one  running alive through each and every team member."
                        imageUrl="/Images/TeamMembers/Coordinators/Coordinator2.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Momal Zahravi"
                        position="SEO Coordinator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs of Ahrefs innovations and developments.
                             He is the one  running alive through each and every team member."
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
                <h2 className='font-bold text-3xl'>Editors</h2>
                <div className='grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center'>
                    <TeamsMemberCard
                        name="Umair Khan Niazi"
                        position="Cheif Editor"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one  running alive through each and every team member."
                        imageUrl="/Images/TeamMembers/Editors/EditorInCheif.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Muhammad Jarjees"
                        position="Premier Pro Expert"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team, and every team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor2.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Haroon Khan"
                        position="Expert Editor"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team, each and every team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor3.jpg"
                        site="In-Office" />
                    <TeamsMemberCard
                        name="Ayesha Gul"
                        position="Video Animator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor4.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Safina Naz"
                        position="Video Animator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor5.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Tabish Qureshi"
                        position="Video Animator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor6.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Zubair Aslam"
                        position="Video Animator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor7.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Ammir Khan"
                        position="Video Animator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor8.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Anmol Hussain"
                        position="Video Animator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor9.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Hira Khan"
                        position="Video Animator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor10.jpg"
                        site="Remote" />
                    <TeamsMemberCard
                        name="Rana Moubeen"
                        position="Video Animator"
                        bio="Author of idea and founder of Ahrefs. Dmitry performs deep intuitive control on all aspects of Ahrefs innovations and developments.
                             He is the one driving the team,  team member."
                        imageUrl="/Images/TeamMembers/Editors/Editor11.jpg"
                        site="Remote" />
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