import { featureContentAPI } from "../API/featureContentAPI";
import {queryOptions} from "@tanstack/react-query";

export const featureContentOptions=()=>{
    return queryOptions({
        queryKey:["news"],
        queryFn:featureContentAPI,
        staleTime: 1000 * 60 * 5
    })
}