import { useState } from "react";
import { postsQueryOptions } from "../queryOptions/postsQueryOptions";
import { useQuery } from "@tanstack/react-query";

export default function GooglePaginationUI() {
    const [page, setpage] = useState(0)
    const { data, isPending, isError, error } = useQuery(postsQueryOptions(page))
    return (
        <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 md:p-10">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                        Google Style Pagination
                    </h1>
                    <p className="text-zinc-500 text-sm md:text-base">
                        TanStack Query pagination UI Demo.
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
                    {data.map((result) => (
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
                    ))}
                </div>
                )}
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                    <button disabled={page === 0} onClick={() => { setpage((prev) => prev - 10) }} className="px-4 py-2 rounded-xl border border-zinc-300 hover:bg-zinc-100 transition disabled:text-gray-500 disabled:cursor-not-allowed">
                        Prev
                    </button>

                    {[...Array(10)].map((_, id) => (
                        <button
                            key={id}
                            onClick={() => setpage(id * 10)}
                            className={`w-11 h-11 rounded-xl font-medium transition-all duration-300 
                    ${page === id * 10
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "border border-zinc-300 hover:bg-zinc-100"
                                }`}
                        >
                            {id + 1}
                        </button>
                    ))}

                    <button onClick={() => { setpage((prev) => prev + 10) }} disabled={page === 90} className="px-4 py-2 rounded-xl border border-zinc-300 hover:bg-zinc-100 transition disabled:text-gray-500 disabled:cursor-not-allowed">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
