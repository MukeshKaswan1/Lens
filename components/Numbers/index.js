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
    <div className='bg-[#242424] flex flex-col items-center text-white text-lg md:text-3xl '>
        <div className='pt-16 font-poppins sans-serif text-2xl md:text-3xl'>By the numbers</div>

        <div className='grid grid-cols-1 md:grid-cols-3 w-full md:w-[70%] py-12'>
            {details.map((item, index) => (
                <div className='flex flex-col items-center md:flex-row md:text-left px-4 md:px-0' key={item.desc}>
                    <div className='flex flex-col items-center md:items-start md:mr-4'>
                        <div className='flex items-center'>
                            <div className='text-4xl md:text-5xl'>{item.number}</div>
                            <div className='text-[#585858] text-4xl md:text-5xl'>+</div>
                        </div>
                        <div className='text-base md:text-lg'>
                            {item.desc}
                        </div>
                    </div>
                    {index !== details.length - 1 && <div className='w-full md:w-[2px] h-12 md:h-auto bg-white md:ml-4 md:mr-4'>
                        <div className='my-2 md:my-0'>_</div>
                    </div>}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Numbers
