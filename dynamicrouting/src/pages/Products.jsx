import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1 className='text-6xl font-bold text-center px-2 py-4 '>My Products</h1>
      <Outlet/>
    </div>
  )
}

export default Products
