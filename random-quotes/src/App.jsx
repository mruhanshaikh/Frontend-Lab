import React, { useState } from "react";
import Loader from "./Components/Loader";
import ErrorCard from "./Components/ErrorCard";
import {useQuery} from "@tanstack/react-query";

const App = () => {
  const [quoteid, setquoteid] = useState(1)
  const getData =async(qi)=>{
     try{
        const res=await fetch(`https://dummyjson.com/quotes/${qi}`)
        if(!res.ok){
          throw new Error("Invalid URL")
        }
        const result=await res.json();
        return result

     }catch(error){
        throw error
     }
  }
  const{data,isPending,isError,error}=useQuery({
    queryKey:["quote",quoteid],
    queryFn:()=>getData(quoteid),
  })
  

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 relative overflow-hidden">

      <div className="absolute w-72 h-72 bg-purple-500/30 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl relative z-10">

        <div className="min-h-[250px] flex items-center justify-center text-center">

            {isPending && <Loader/>}
            {isError && <ErrorCard message={error.message}/>}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-white">
                {data?.author}
              </h1>

              <p className="text-zinc-300 leading-relaxed">
                {data?.quote}
              </p>
            </div>

        </div>

        <button
          // disabled={quoteid === 30} 
          onClick={()=>setquoteid(quoteid+1)}
          className="w-full mt-6 bg-white text-black font-semibold py-3 rounded-xl hover:scale-[0.98] active:scale-95 transition duration-300"
        >
          Fetch New Data
        </button>

      </div>
    </div>
  );
};

export default App;