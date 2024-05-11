import React from "react";

const cardContent = [
  {
    serial_no: 1,
    title: "Biometrics",
    content: "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.",
    color: "#01C99B",
  },
  {
    serial_no: 2,
    title: "Image Analysis",
    content: "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.",
    color: "#3fbdf1",
  },
  {
    serial_no: 3,
    title: "Cross-Media Translation",
    content: "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.",
    color: "#FF605F",
  },
  {
    serial_no: 4,
    title: "3D Modelling and Design.",
    content: "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.",
    color: "#FF9F31",
  },
];

function Services() {
  return (
    <div className="bg-services bg-cover min-h-screen flex flex-col items-center text-white pb-16">
      <div className="text-lg">SERVICES</div>
      <div className="rounded-lg mt-2 bg-gradient-to-r from-[#0091ff] to-[#9cfeff] w-20 h-1 text-black">_</div>
      <div className="text-[58px] md:text-4xl w-[70%] text-center my-16 font-[400]">
        We provide Artificial Intelligence Services
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {cardContent.map((card) => {
          return (
            <div
              className={`min-h-[345px] bg-[#1b1c1e] rounded-lg px-12 py-4 font-poppins group hover:bg-transparent hover:border-2 hover:border-${card.color}`}
              key={card.title}
            >
              <div className="flex items-center">
                <div className="text-[#707070] text-4xl md:text-7xl leading-[1.5] font-[600]">0</div>
                <div className={`text-[#707070] text-4xl md:text-7xl font-[600] group-hover:text-[${card.color}] leading-[1.5]`}>{card.serial_no}</div>
                <div className={`text-lg md:text-4xl font-sans mt-2 -ml-6 leading-[1.3] transition-transform duration-300 ease-in-out group-hover:translate-x-8`} style={{ color: `${card.color}` }}>{card.title}</div>
              </div>
              <div className="text-[#8A8A8A] text-base md:text-xl mt-12">{card.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
