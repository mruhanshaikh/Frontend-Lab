import React from 'react'
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between px-2 py-4 bg-blue-950 items-center'>
      <div className='text-4xl font-bold'>
        MyNavbar
      </div>
      <div className='flex gap-[1rem]  ease-in text-2xl'>
        {/* <Link className="active:scale-95 transition duration-300" to="/about">About</Link>
        <Link className="active:scale-95 transition duration-300" to="/blogs">Blogs</Link>
        <Link className="active:scale-95 transition duration-300" to="/products">Products</Link>
        <Link className="active:scale-95 transition duration-300" to="/contacts">Contact</Link> */}
        <NavLink style={({isActive})=>({color:isActive&&'red'})} className="active:scale-95 transition duration-300" to="/about">About</NavLink>
        <NavLink style={({isActive})=>({color:isActive&&'red'})}className="active:scale-95 transition duration-300" to="/blogs">Blogs</NavLink>
        <NavLink style={({isActive})=>({color:isActive&&'red'})}className="active:scale-95 transition duration-300" to="/products">Products</NavLink>
        <NavLink style={({isActive})=>({color:isActive&&'red'})}className="active:scale-95 transition duration-300" to="/contacts">Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar
