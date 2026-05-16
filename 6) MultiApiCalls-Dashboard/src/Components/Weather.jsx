import { useQuery } from '@tanstack/react-query'
import React from 'react'
import {weatherOptions} from '../QueryOptions/weatherOptions'
import { useCoords } from '../HelperFn/useCoords'
import { Loader } from './Loader'
import { Error } from './Error'

const Weather = () => {
    const {coords,err} = useCoords();

    const {data,error,isError,isFetching}=useQuery({
        ...weatherOptions(coords),
        enabled:!!coords
    })

    if(err) return <Error message={err}/>
    if(isFetching||!data) return <Loader/>
    if(isError) return <Error message={error.message}/>

    return (
        <div>
            <div>
                <p className="text-sm text-white/70">Weather API</p>
                <h3 className="text-2xl font-semibold mt-2">{data.location.name}</h3>
            </div>

            <div className="flex items-end justify-between">
                <h2 className="text-6xl font-bold">{data.current.temp_c}°</h2>

                <div className="text-right">
                    <p className="text-white/80">{data.current.condition.text}</p>
                    <p className="text-white/60 text-sm">Humidity {data.current.humidity}%</p>
                </div>
            </div>
        </div>
    )
}

export default Weather
