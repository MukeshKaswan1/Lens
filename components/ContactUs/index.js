import Image from 'next/image'
import React from 'react'

function ContactUs() {
    return (
        <div>
            <div className='flex text-white border-t-2 border-b-[1px] border-[#242424]'>
                <div className='w-[50%] bg-[#242424] px-28 flex flex-col justify-center '>
                    <div className='text-6xl'>
                        Get in touch with us
                    </div>
                    <div className='py-12 text-xl'>
                        Send your enquiry now!
                    </div>
                    <div className='flex w-[80%] relative bg-black rounded-3xl'>
                        <input className='outline-none bg-black h-12 px-4 rounded-3xl placeholder-gray-500 '
                            placeholder='Enter Email Address'
                        />
                        <div className='h-10 px-4 rounded-3xl absolute text-white bg-[#272E5C] flex items-center right-[4px] top-[4px] cursor-pointer'>
                            Request Demo
                        </div>
                    </div>
                </div>
                <div className='w-[50%] bg-black '>
                    <Image src={'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=1920&q=75'} width={703} height={538} alt="map" />
                </div>
            </div>
            <div className='flex justify-between bg-black text-white py-16 px-32'>
                <div>
                    <Image src={'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75'} height={70} width={80} alt="eye" />
                    <div>
                        Tomorrow&apos;s Vision, Today!
                    </div>
                   
                </div>
                <div>
                    <div className='mb-8'>SITEMAP</div>
                    <div className='py-[6px]'>MakeMyWeb.</div>
                    <div className='py-[6px]'>Services</div>
                    <div className='py-[6px]'>Products</div>
                    <div className='py-[6px]'>Blogs</div>
                    <div className='py-[6px]'>Life at LENS</div>
                </div>
                <div>
                    <div className='mb-8'>CONNECT</div>
                    <div className='py-[6px]'>+1-517-9300-792</div>
                    <div className='py-[6px]'>+91-9990-736-796</div>
                    <div className='py-[6px]'>solutions@lenscorp.ai</div>
                </div>

            </div>
            <div className='bg-[#242424] text-white flex justify-between px-16 py-8'>
                <span style={{ color: 'rgb(153, 153, 153)' }}>
                    "2023 "
                    <span style={{ color: 'white' }}>LENS, Inc. </span>
                    "All rights reserved."
                </span>

                <div className='flex justify-center gap-6'>
                    <p>
                        Code of conduct
                    </p>
                    <p>
                        Sustainability Goals
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ContactUs