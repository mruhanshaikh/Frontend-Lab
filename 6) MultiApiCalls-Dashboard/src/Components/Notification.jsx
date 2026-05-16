import React from 'react'
import { useSuspenseQuery } from "@tanstack/react-query";
import { notificationOptions } from "../QueryOptions/notificationOptions"
const Notification = () => {
    const {data}=useSuspenseQuery(notificationOptions())
    
    return (
    <div
    className="mt-1 bg-zinc-800 rounded-2xl p-2 line-clamp-2 leading-relaxed"
    >
   {data.title}
    </div> 
    )
}

export default Notification
