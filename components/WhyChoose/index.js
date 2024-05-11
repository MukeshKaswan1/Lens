import React from "react";
import Image from "next/image";

const list1 = [
  "State-of-the-art solutions",
  "Fast & Efficient",
  "No extra computation fee",
  "No licensing fee",
];
const list2 = [
  "Lifetime support & upgrades",
  "Plug-and-Play",
  "24x7 Progress Monitoring",
  "Incremental Updates",
];

const cardItems = [
  {
    title: "Exclusive Rights",
    image:
      "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=640&q=75",
    alt_text: "Exclusive Rights",
    desc: "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belong to you.",
    height: "91",
    width: "250",
  },
  {
    title: "Research Driven",
    image:
      "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=384&q=75",
    alt_text: "Research Driven",
    desc: "We regularly benchmark our solutions via comparing industry-wide evaluations so our partners only get the best that AI can offer.",
    height: "138",
    width: "138",
  },
  {
    title: "Plug-and-Play",
    image:
      "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=256&q=75",
    alt_text: "Plug-and-Play",
    desc: "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
    height: "160",
    width: "125",
  },
  {
    title: "Lifetime Support",
    image:
      "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=384&q=75",
    alt_text: "Support",
    desc: "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
    height: "148",
    width: "171",
  },
];

function Why() {
  return (
    <div className="bg-whychoose min-h-screen  text-white flex flex-col items-center text-center px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="mt-16 text-2xl md:text-xl lg:text-xl  ">
        WHY CHOOSE LENS
      </div>
      <div className=' rounded-lg mt-2 bg-gradient-to-r from-[#0091ff] to-[#9cfeff] w-16 h-1 text-black'>_</div>
        <div className='text-5xl w-[65%] mt-16 mb-12'>
        AI-driven solutions backed by science
        </div>
        <div className='w-[52%] text-xl text-[#8A8A8A] mb-20'>
        Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-3/4 lg:w-2/3 xl:w-1/2 mb-12">
        <div>
          {list1.map((item, index) => (
            <div className="flex items-center mt-3 text-lg" key={index}>
              <div className="w-3 h-2 border-t-2 border-r-2 border-white transform rotate-[135deg]"></div>
              <div className="ml-4">{item}</div>
            </div>
          ))}
        </div>
        <div>
          {list2.map((item, index) => (
            <div className="flex items-center mt-3 text-lg" key={index}>
              <div className="w-3 h-2 border-t-2 border-r-2 border-white transform rotate-[135deg]"></div>
              <div className="ml-4">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:w-3/4 lg:w-2/3 xl:w-4/5 md:h-3/4">
        {cardItems.map((card, index) => (
          <div
            className="h-[435px] bg-[#1B1C1E] rounded-[18px] px-6 py-8 text-left hover:bg-transparent hover:border-2"
            key={index}
          >
            <div className="text-lg font-semibold">{card.title}</div>
            <div className="mt-4 mb-6">
              <Image
                src={card.image}
                height={card.height}
                width={card.width}
                alt={card.alt_text}
              />
            </div>
            <div className="text-sm">{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Why;
