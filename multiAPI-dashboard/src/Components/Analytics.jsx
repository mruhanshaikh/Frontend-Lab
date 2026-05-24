import React, { useEffect, useState } from 'react'

const Analytics = () => {
    const [height, setheight] = useState([40, 70, 55, 90, 65, 80, 50])
    useEffect(() => {
    const interval = setInterval(() => {       
        setheight(prev => prev.map(()=>        
            Math.floor(Math.random() * 80) + 20
        ))
    }, 10000)
    return () => clearInterval(interval)
}, [])
   return (
     <div className="flex items-end gap-3 h-40 mt-6">
     {height.map((e, index) => (
     <div
       key={index}
       className="flex-1 bg-white/90 rounded-t-2xl"
       style={{ height: `${e}%`,transition: 'height 0.5s ease' }}
     ></div>
     ))}
    </div>
  )
}

export default Analytics
