import { useEffect, useState } from "react"

export const useCoords =()=>{
    const [coords, setcoords] = useState(null)
    const [err, seterr] = useState(null)

    useEffect(()=>{
         window.navigator.geolocation.getCurrentPosition((e)=>{
         setcoords({
           lat:e.coords.latitude,
           lon:e.coords.longitude 
        })
    },(error)=>{
         seterr(error.message)
        }
    )
    },[])
    return {coords,err}
}       