import React from 'react'
import { useParams } from 'react-router-dom'
const All = () => {
  const {random,all}=useParams()
  return (
    <div>
       <h1 className='text-6xl font-bold text-center px-2 py-4 '>First Dynamic Route :{random} Second Dynamic Route :{all}</h1>
    </div>
  )
}

export default All
