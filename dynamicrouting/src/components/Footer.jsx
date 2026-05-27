import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className='flex absolute bottom-0 justify-between items-center w-full px-2 py-4 bg-blue-950'>
      <div className='text-white font-bold capitalize text-2xl'>&copy;All Rights Reserved</div>
      <button onClick={()=>{
        navigate('/products')
      }} className='active:scale-85 transition duration-300 ease-in px-2 py-3 bg-black text-2xl text-white rounded-lg'>Explore Products</button>
    </div>
  )
}

export default Footer
