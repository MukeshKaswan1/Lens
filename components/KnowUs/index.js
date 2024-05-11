import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { accord } from '@/constants'


function KnowUs() {
  return (
    <div className='bg-black text-white flex flex-col items-center pt-20 px-28'>
        <div className='font-semibold w-100 '>
            <h1 >
                GET TO KNOW US
            </h1>
        </div>
        <div className='  rounded-lg mt-2 bg-gradient-to-r from-[#0091ff] to-[#9cfeff] w-20 h-1 text-black'>_</div>
        <div className='text-6xl py-12'>
            Frequently Asked Questions
        </div>
        <div className='pb-36 grid grid-cols-2 gap-8 '>
            {
                accord.map((item)=>{
                    return(
                            <Accordion key = {item.question} type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <div className='border-[1px] border-white min-w-full px-4 rounded-lg'>
                                        <AccordionTrigger  className='w-[560px]'>{item.question}</AccordionTrigger>
                                    </div>
                                    <AccordionContent className="text-[#FFFFFF99] pt-4">
                                    {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                    )
                })
            }
        </div>
    </div>
  )
}

export default KnowUs