import React from 'react'


const details = [
    {
        number: 15,
        desc: "Solutions for Global crises"
    },
    {
        number: 10,
        desc: " University Collaborations"
    },
    {
        number: 25,
        desc: " Employees Worldwide"
    },
]
function Numbers() {
  return (
    <div className='bg-[#242424] flex flex-col items-center text-white text-3xl '>
        <div className='font-semibold pt-16 font-poppins '>By the numbers</div>

        <div className='grid grid-cols-3 font-semibold font-poppins w-[70%] py-12'>
            {details.map((item,index)=>{
            return(
            <div className=' flex text-center w-[80%]' key= {item.desc}>
                <div className='flex flex-col items-center px-20'>
                    <div className='flex'>
                        <div className='text-5xl'>{item.number}</div>
                        <div className='text-[#585858] text-5xl'>+</div>
                    </div>
                    <div className='text-xl'>
                    {item.desc}
                    </div>
                </div>
               {index !== details.length-1 && <div className='w-[2px] min-h-full bg-white text-[#242424] '>
                    <div className='ml-2'>
                    _
                    </div>
                </div>}
            </div>
)
            })}
        </div>
    </div>
  )
}

export default Numbers