import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import {weatherOptions} from '../QueryOptions/weatherOptions'
import { useCoords } from '../HelperFn/useCoords'
import { Loader } from './Loader'
import { Error } from './Error'

const DateTime = () => {
    const {coords,err} = useCoords();

    const {data,error,isError,isFetching}=useQuery({
        ...weatherOptions(coords),
        enabled:!!coords
    })
    const [time, settime] = useState(null)
    useEffect(()=>{
        if(!data) return
        const interval= setInterval(()=>{
            settime(new Date().toLocaleTimeString("en",{
                timeZone:data.location.tz_id,
            }))
        },1000)
        return ()=>clearInterval(interval)
    },[data])

    if(err) return <Error message={err}/>
    if(isFetching||!data) return <Loader/>
    if(isError) return <Error message={error.message}/>

    const [date] = data.location.localtime.split(" "[0])

    return (
            <div className="flex-1">
            <div className="w-30 py-2 px-2 bg-zinc-700 rounded mb-2">{time}</div>
            <div className="w-60 py-2 px-2 bg-zinc-700 rounded">{date}</div>
            </div>
    )
}

export default DateTime
