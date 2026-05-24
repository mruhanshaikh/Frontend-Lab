import React, { useContext } from 'react'
import Button from './Button'
import {toast} from 'react-toastify';
const Navbar = () => {
  return (
    <div className='bg-black absolute top-0 w-full text-white flex justify-between items-center p-3'>
      <h1 className='text-5xl font-bold text-white '>ShopMe</h1>
      <Button onClick={()=>toast("Enjoy Shoping 🛒", {
      toastId: "sdsa",
      theme: "dark"
      })}>React Toast 🌟</Button>
    </div>
  )
}

export default Navbar
