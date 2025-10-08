'use client'
import { TypeAnimation } from 'react-type-animation';


    const TypeAnimationComponent = ({text1, text2, text3, text4, time, className, speed}) => {
      
        return (
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `${text1}`,
        time || 1000, // wait 1s before replacing "Mice" with "Hamsters"
        `${text2}`,
        time || 1000,    
        `${text3}`,
        time || 1000,
        `${text4}`,
        time || 1000,
      ]}
      wrapper="span"
      speed={speed || 50}
      className={className}
      repeat={Infinity}
    />
    )
  }
  
export default TypeAnimationComponent;