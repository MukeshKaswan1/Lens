import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='bg-hero bg-cover bg-center h-screen w-full flex justify-center items-center px-8 md:px-20 lg:px-32'>
      <div className='text-black w-full md:w-1/2 text-center md:text-left'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-medium font-raleway leading-tight'>We are at the forefront of AI</h1>
        <p className='text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 lg:mt-10'>From Conserving Wildlife to Automatically Generating Caricatures- <b>We Do It All</b></p>
        <div className="mt-8 md:mt-12">
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
