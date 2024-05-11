import React from 'react';

function Blogs() {
  return (
    <div className='bg-black min-h-screen text-white flex flex-col items-center'>
      <div className='mt-20 text-4xl md:text-6xl'>OUR BLOGS</div>
      <div className='rounded-lg mt-2 bg-gradient-to-r from-[#0091ff] to-[#9cfeff] w-20 h-1 text-black'>_</div>
      <div className='my-8 text-2xl md:text-4xl text-center'>Inhouse Mindscape</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='w-full bg-[#1B1C1E] rounded-2xl p-5 group overflow-hidden hover:bg-[#F4F1DF]'>
          <div className='text-[#F86360] transform transition-transform duration-300 ease-in-out group-hover:-translate-y-14'>
            New!
          </div>
          <div className='mt-4 mb-12 text-xl md:text-2xl transition-transform duration-300 ease-in-out group-hover:-translate-y-12'>
            The Evolution of AI in Games
          </div>
          <div className='w-90 h-[224px] bg-[#FFF6CD] rounded-2xl p-4 text-[#828282] flex items-center transition-transform duration-300 ease-in-out group-hover:-translate-y-12'>
            The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...
          </div>
          <div className='mt-6 text-[#FF5D5B] hidden group-hover:block'>Read More &gt;&gt;</div>
        </div>
        <div className='w-90 bg-[#1B1C1E] rounded-2xl p-5 group overflow-hidden hover:bg-[#F1F2F8]'>
          <div className='text-[#656565] transform transition-transform duration-300 ease-in-out group-hover:-translate-y-14'>
            April 18, 2024
          </div>
          <div className='mt-4 mb-12 text-xl md:text-2xl transition-transform duration-300 ease-in-out group-hover:-translate-y-12'>
            Unmasking the Misconceptions of Artificial Intelligence in the Workplace
          </div>
          <div className='w-90 h-[224px] bg-[#E2F2FF] rounded-2xl p-4 text-[#828282] flex items-center transition-transform duration-300 ease-in-out group-hover:-translate-y-12'>
            The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....
          </div>
          <div className='mt-6 text-[#FF5D5B] hidden group-hover:block'>Read More &gt;&gt;</div>
        </div>
        <div className='w-90 bg-[#1B1C1E] rounded-2xl p-5 group overflow-hidden hover:bg-[#f2e7e6] mt-4'>
          <div className='text-[#656565] transform transition-transform duration-300 ease-in-out group-hover:-translate-y-14'>
            April 18, 2024
          </div>
          <div className='mt-4 mb-12 text-xl md:text-2xl transition-transform duration-300 ease-in-out group-hover:-translate-y-12'>
            Unmasking the Misconceptions of Artificial Intelligence in the Workplace
          </div>
          <div className='w-90 h-[224px] bg-[#FFECEB] rounded-2xl p-4 text-[#828282] flex items-center transition-transform duration-300 ease-in-out group-hover:-translate-y-12'>
            The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....
          </div>
          <div className='mt-6 text-[#FF5D5B] hidden group-hover:block'>Read More &gt;&gt;</div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
