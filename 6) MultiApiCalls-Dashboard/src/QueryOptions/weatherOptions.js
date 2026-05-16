import { weatherAPI } from "../API/weatherAPI";
import {queryOptions} from "@tanstack/react-query";

export const weatherOptions=(q)=>{
    return queryOptions({
        queryKey:["weather",q],
        queryFn:()=>weatherAPI(q),
        staleTime: 1000 * 60 * 5
    })
}