import {infiniteQueryOptions} from "@tanstack/react-query"
import { paginationData } from "../api/paginationData"

export const postsQueryOptions = ()=>{
    return infiniteQueryOptions({
        queryKey:['post'],
        queryFn:({pageParam})=>paginationData(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
        const nextSkip =
         lastPage.skip + lastPage.limit

       return nextSkip < lastPage.total
         ? nextSkip
         : undefined
   },
    }) 
}