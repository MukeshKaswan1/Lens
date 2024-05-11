import Image from 'next/image'
import React from 'react'

function Clients() {
  return (
    <div className='font-raleway bg-black flex flex-col items-center justify-center'>
        <div className='text-white text-3xl mt-16'>
           We Work With Amazing Clients
        </div>
        <div>
            <div  className='flex mt-4 py-8 animate-slide-animation'>
                <Image src={'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrov.97a72987.png&w=256&q=75'} width={192} height={128}alt='grove'/>
                <Image src={'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_2.7e06895b.png&w=640&q=75'} width={192} height={128}alt='zkt'/>
                <Image src={'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=640&q=75'} width={200} height={96}alt='coreIP'/>
                <Image src={'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=640&q=75'} width={123} height={73}alt='global'/>
            </div>
        </div>
        
    </div>
  )
}

export default Clients