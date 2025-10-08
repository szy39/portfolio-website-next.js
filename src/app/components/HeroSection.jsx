import React from 'react'
import Image from 'next/image'
import TypeAnimationComponent from '../Utils/TypeAnimation'


const HeroSection = () => {
  return (

    <section>
   <div className="grid grid-cols-1 sm:grid-cols-12">
     <div className="col-span-7 place-self-center text-center sm:text-left ">
       <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
      
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600'>
        Hi, I'm 
        </span>
        <br />
        <TypeAnimationComponent 
        text1="Eymen" 
        text2="React/Next.js Developer" 
        text3="Vue.js Developer" 
        text4="Frontend Web Developer"
        time={1000}
        className='text-2xl font-bold' />
        </h1>
       <p className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
         Javascript / Typescript / React / Next.js / Vue.js / Node.js / SCSS / CSS Frameworks / API Integration
         </p>
         <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-semibold '>Hire Me !</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3 font-semibold'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
         </div>
     </div>
     <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div
         className="rounded-full bg-[#181818] 
         w-[250px] h-[250px] relative lg:w-[250px] lg:h-[250px]">
          <Image src="/images/hero-image.png"
           alt="hero-image"
           className='absolute transform 
           -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
           w-full h-full object-cover rounded-full
           '
           width={250} height={250}
            />
        </div>
     </div>
   </div>
   </section>
  )
}

export default HeroSection