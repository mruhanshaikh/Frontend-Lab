import React from 'react'
import { Outlet } from 'react-router-dom'
const Blogs = () => {
  return (
    <div>
      <h1 className='text-6xl font-bold text-center px-2 py-4 '>My Blogs</h1>
      <Outlet/>
    </div>
  )
}

export default Blogs
