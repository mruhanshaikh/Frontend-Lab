import React, { useEffect } from 'react'
import {motion, useMotionValue, useSpring} from "motion/react"

const App = () => {
  const left=useMotionValue(0);
  const top=useMotionValue(0);
  const smoothLeft=useSpring(left);
  const smoothTop=useSpring(top);

  useEffect(() => {
    const handleMove = (e) => {
      left.set(e.clientX);
      top.set(e.clientY);
    };

    document.addEventListener('mousemove', handleMove);
     return () => {
     document.removeEventListener('mousemove', handleMove);
    };
  }, [])

  return (
    <div>
      <motion.span style={{x:left,y:top}} id="cursorFollower" className="cursorFollower"></motion.span>
      <motion.span style={{x:smoothLeft,y:smoothTop}} id="cursorFollowerDot" className="cursorFollowerDot"></motion.span>
    </div>
  )
}

export default App
