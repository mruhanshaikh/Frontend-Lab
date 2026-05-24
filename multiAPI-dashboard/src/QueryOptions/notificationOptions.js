import { notificationAPI } from "../API/notificationAPI";
import {queryOptions} from "@tanstack/react-query";

export const notificationOptions=()=>{
    return queryOptions({
        queryKey:["notification"],
        queryFn:notificationAPI,
        staleTime: 1000 * 60 * 5
    })
}