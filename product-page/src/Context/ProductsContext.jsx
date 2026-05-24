import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const ProductData=createContext()
const ProductsContext = ({children}) => {
  const [product, setproduct] = useState({})
  const fetchData=async()=>{
    const data=await axios('https://fakestoreapi.com/products');
    if(!data)return
    setproduct(data);
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div>
      <ProductData.Provider value={product}>
        {children}
      </ProductData.Provider>
    </div>
  )
}

export default ProductsContext
