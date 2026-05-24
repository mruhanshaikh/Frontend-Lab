import React from 'react'
import { easeIn, easeOut, motion } from "motion/react"
const App = () => {
  return (
    <div className='box'>
      <motion.img 
       src="/walkingchild.jpg"
       alt="walking person"
       className='card'
      //  initial={{
        // y:100,
        // x:10
      //  }}
      whileHover={{
        scale:1.5
      }}
      // whileTap={{
        // scale:1.5
      // }}
      drag
      whileDrag={{
        sclae:2
      }}
      dragConstraints={{
        left:0,
        top:0,
        right:1200,
        bottom:500
      }}
      dragDirectionLock="true"
       animate={{
        x:[0,1200,1200,0,0],
        y:[0,0,500,500,0],
        rotate:360,
        transition:{
         duration:5,
         delay:1,
         ease:'linear',
        //  repeat:Infinity
       }  
      }}
       >

      </motion.img>
    </div>
  )
}

export default App
