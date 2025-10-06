import React from 'react'
import Image from 'next/image'


const HeroSection = () => {
  return (

    <section>
   <div className="grid grid-cols-1 lg:grid-cols-12">
     <div className="col-span-7 place-self-center">
       <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
        Hi, I'm Eymen
        </h1>
       <p className='text-[#adb7be] text-lg mb-6 lg:text-xl'>
         React / Next.js / Vue.js Frontend Developer
         </p>
     </div>
     <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div
         className="rounded-full bg-[#181818] 
         w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
          <Image src="/images/hero-image.png"
           alt="hero-image"
           className='absolute transform 
           -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
           w-full h-full object-cover rounded-full
           '
           width={200} height={200}
            />
        </div>
     </div>
   </div>
   </section>
  )
}

export default HeroSection