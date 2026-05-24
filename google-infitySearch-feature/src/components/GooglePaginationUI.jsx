import { useState } from "react";
import { postsQueryOptions } from "../queryOptions/postsQueryOptions";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react"

export default function GooglePaginationUI() {
    const observerRef = useRef(null)
    const {
        data,
        isPending,
        isError,
        error,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage
    } = useInfiniteQuery(postsQueryOptions())

    useEffect(() => {
   const observer = new IntersectionObserver(
      (entries) => {
         const entry = entries[0]

         if (
            entry.isIntersecting &&
            hasNextPage &&
            !isFetchingNextPage
         ) {
            fetchNextPage()
         }
      },
      {
         threshold: 1,
      }
   )

   if (observerRef.current) {
      observer.observe(observerRef.current)
   }

   return () => observer.disconnect()
}, [fetchNextPage, hasNextPage, isFetchingNextPage])
    return (
        <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 md:p-10">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                        Infinity Feed
                    </h1>
                    <p className="text-zinc-500 text-sm md:text-base">
                        TanStack useInfinityQuery UI Demo.
                    </p>
                </div>
                {isPending && (
                    <div className="space-y-5">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="rounded-2xl h-24 bg-gray-200 animate-pulse"
                            />
                        ))}
                    </div>
                )}
                {isError && (
                    <div className="text-center py-16 text-red-400 text-sm">
                        ❌ Failed to load Results || {error.message}
                    </div>
                )}
                {!isPending && !isError && data && (
                    <div className="space-y-5">
                        {data.pages.flatMap((page) => page.posts.map((result) => (
                            <div
                                key={result.id}
                                className="border border-zinc-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300"
                            >

                                <h2 className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer mb-2 capitalize line-clamp-2">
                                    {result.title}
                                </h2>

                                <p className="text-zinc-600 leading-relaxed line-clamp-3">
                                    {result.body}
                                </p>
                            </div>
                        ))
                        )}
                    </div>
                )}
                {/* {data && 
                <div className="flex  justify-center  mt-10">
                    <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage} className="px-4 py-2 rounded-xl text-2xl border border-zinc-300 hover:bg-zinc-100 transition disabled:text-gray-500 disabled:cursor-not-allowed">
                        {isFetchingNextPage
                            ? "Loading..."
                            : hasNextPage
                                ? "Load More..."
                                : "No More Posts"}
                    </button>
                </div>
                } */}
                <div ref={observerRef} className="h-10" />
            </div>
        </div>
    );
}
