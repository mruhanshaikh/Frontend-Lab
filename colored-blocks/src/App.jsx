import React, { useState } from 'react'
import LoadingScreen from './Componenets/LoadingScreen'
import ErrorScreen from "./Componenets/ErrorScreen"
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const App = () => {

  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)},
              ${Math.floor(Math.random() * 255)},
              ${Math.floor(Math.random() * 255)})`
  }
  const getData = async () => {
    // dummy delay to see loader
    await new Promise((resolve) => { setTimeout(resolve, 1000) })
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (!Array.isArray(response.data)) {
       throw new Error("Data is not an Array")
      }
      return response.data
    } catch (error) {
      throw error
    }
  }

   const {data, isFetching, isError, error,refetch} = useQuery({
   queryKey:["blogs"],
   queryFn:getData,
   retry:false,
   enabled: false,
 })

  return (
    <div>
      <button className="px-2 py-1 bg-gray-500 rounded-lg mx-2 my-1 font-bold text-3xl active:scale-95 transition duration-300 ease-in" onClick={refetch}>Submit</button>
       
      {isFetching && <LoadingScreen />}

      {isError && (
        <ErrorScreen message={error.message} />
      )}

      {
        data?.map((e) => (
          <div className="w-full px-2 py-5 rounded-lg mt-2" style={{ backgroundColor: randomColor() }} key={e.id}>
            <h1>{e.name}</h1>
            <p>{e.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
