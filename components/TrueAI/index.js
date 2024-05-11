import Image from 'next/image'
import React from 'react'
import Button from '../Button'

function TrueAI() {
  return (
    <div className='bg-black h-full'>
        <div className="relative w-full h-[600px] overflow-hidden mt-24">
            <div className=" inset-0 overflow-hidden ">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[#242424] transform origin-top-right -skew-y-6">

            </div>
            <div className="relative z-10 grid grid-cols-3 items-center justify-center h-full pt-40 ">
            <div className='md:ml-20 hidden md:block'>
              <Image src={'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=750&q=75'} height={239} width={320} alt="network" />
            </div>
            <div className='flex flex-col justify-center items-center text-center text-white'>
  <div className='flex text-4xl md:text-6xl font-semibold'>
    <div>Meet</div>
    <div className='ml-2 md:ml-4 bg-gradient-to-r from-blue-500 via-[#2f80ed] to-[#ee216b] bg-clip-text text-transparent'>Tru-AI</div>
  </div>
  <div className='text-lg md:text-2xl my-6 md:my-8 font-light'>Design. Create. Deploy.</div>
  <div className='flex items-center text-base md:text-xl mb-4 md:mb-6'>
    <div>_</div>
    <div className='ml-2 md:ml-4 mb-1 md:mb-6 bg-gradient-to-r from-blue-500 via-[#2f80ed] to-[#ee216b] bg-clip-text text-transparent'>the Future of AI | Power to EDIT</div>
  </div>
  <div className='text-sm md:text-base mb-4 md:mb-6'>Based On Your Website & Traffic Trends, Tru-AI Optimizes Your Website</div>
  <div className='mt-4 md:mt-8'>
    <Button />
  </div>
</div>

                <div className='w-[425px] h-[240px] md:ml-20 hidden md:block rounded-l-full overflow-hidden ml-20 '>
                    <video src='https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4' autoPlay loop muted width={425} height={240} />
                </div>
            </div>
            </div>

        </div>
    </div>
   
  )
}

export default TrueAI