import React from 'react'

const NotFound = () => {
  return (
    <div className='absolute inset-0 bg-black flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold text-white'>Not Found || 404 Error</h1>
      <h2 className='mt-4 text-3xl font-light text-white'>Ensure Url is Correct !!</h2>
    </div>
  ) 
}

export default NotFound
