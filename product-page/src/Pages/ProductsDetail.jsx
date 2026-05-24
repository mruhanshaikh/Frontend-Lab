  import React, { useContext } from 'react'
  import { useParams } from 'react-router-dom'
  import { ProductData } from '../Context/ProductsContext';
  import NotFound from './NotFound'; 
  const ProductsDetail = () => {
    const data=useContext(ProductData); 
    const {id}=useParams();
    const index=Number(id);
    const product=data?.data?.[index];
    if(!product){
      return <NotFound/>
    } 
    return (
        <div>
        { data?.data?.length>0 &&
          <div className='flex mt-18 sm:mt-0 min-h-screen transition duration-300 ease-in cursor-pointer flex-col justify-center items-center bg-black text-white p-2 gap-5 sm:gap-7'>
          <img className='object-contain w-[300px] sm:w-[400px] aspect-square bg-no-repeat ' src={product.image}/>
          <h1 className='font-bold text-2xl sm:text-3xl capitalize text-center'>{product.title}</h1>
          <h2 className='font-light text-xl sm:w-[80%] leading-[1.5] capitalize text-justify sm:text-center'>{product.description}</h2>
          <div className='px-4 py-1 rounded-lg bg-gray-300 transition duration-300 ease-in active:scale-75 text-2xl text-black font-bold font-mono pointer-none: cursor-pointer'>${product.price}</div>
          </div>
      }
      </div>
    )
  }

  export default ProductsDetail
