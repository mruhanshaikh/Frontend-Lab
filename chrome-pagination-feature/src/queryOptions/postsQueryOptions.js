import {queryOptions} from "@tanstack/react-query"
import { paginationData } from "../api/paginationData"

export const postsQueryOptions = (page)=>{
    return queryOptions({
        queryKey:['post',page],
        queryFn:()=>paginationData(page),
        placeholderData: (prev) => prev,
    }) 
}