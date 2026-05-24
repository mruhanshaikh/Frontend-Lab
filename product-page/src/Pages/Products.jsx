import React, { useContext } from 'react'
import { ProductData } from '../Context/ProductsContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const data=useContext(ProductData); 
  const navigator=useNavigate();
  return (
    <div className='flex flex-wrap gap-[1rem] p-[1rem]  mt-[5rem]'>
     { data?.data?.length>0 &&
        data.data.map((elem)=>(
        <div onClick={()=>navigator(`${elem.id-1}`)}className='flex flex-1 active:scale-95 hover:rotate-3 transition duration-300 ease-in cursor-pointer min-w-[300px] flex-col justify-between items-center bg-black text-white px-2 py-4 rounded-[1rem]'>
        <img className='w-[200px] object-contain bg-no-repeat aspect-[1/1.2] ' src={elem.image}/>
        <h1 className='font-bold text-xl capitalize text-center'>{elem.title}</h1>
        </div>
        )
        )
     }
    </div>
  )
}

export default Products
