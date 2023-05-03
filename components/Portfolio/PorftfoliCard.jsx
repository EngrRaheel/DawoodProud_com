import React from 'react'
import Image from 'next/image'
import TwitterTweet from './TwitterTweet'
function PorftfoliCard() {


    return (
        <>
            <div className='grid grid-cols-3 grid-col-[2fr_1fr-2fr] text-blue p-5 mx-auto'>
                <div className='flex flex-col px-16 py-4'>
                    <h2>Youtube channel name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque placeat libero tempore,
                        molestiae repellendus porro reprehenderit, fuga dolore repudiandae eos quidem assumenda, omnis officia vitae
                        rerum aliquid dolor enim voluptates?
                    </p>
                </div>
                <div>
                    <div className='relative w-[400px] h-[300px]' >
                        <Image src={"/Images/Portfolio/5a3a1075-4a47-49b9-b94c-3f7a73a36491.gif"} fill />
                    </div>
                </div>
                <div>
                   
                </div>
            </div>
        </>
    )
}

export default PorftfoliCard
