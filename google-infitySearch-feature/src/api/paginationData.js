import axios from "axios"

export async function paginationData(pageParam){
        const response=await axios.get(`https://dummyjson.com/posts?limit=10&skip=${pageParam}`)
         if(!Array.isArray(response.data.posts)){
         throw new Error("Data is not an Array")
         }
         return response.data
}