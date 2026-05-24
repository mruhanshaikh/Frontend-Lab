import React from 'react'
import {motion} from 'motion/react'

const App = () => {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
      <h1 className='title'>Refresh Page !!</h1>
      <motion.div initial={{x:0}} animate={{x:500}} transition={{type:"spring"}} className='card'></motion.div>
    </div>
  )
}

export default App
