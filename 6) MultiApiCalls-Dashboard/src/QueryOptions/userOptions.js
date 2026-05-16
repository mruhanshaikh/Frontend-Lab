import { userDataAPI } from "../API/usersDataAPI";
import {queryOptions} from "@tanstack/react-query";

export const userOptions=()=>{
    return queryOptions({
        queryKey:["userscount"],
        queryFn:userDataAPI,
        staleTime: 1000 * 60 * 5
    })
}