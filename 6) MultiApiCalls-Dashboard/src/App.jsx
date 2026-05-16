import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FeatureContent from "./Components/FeatureContent";
import { Error } from "./Components/Error"
import { Loader } from "./Components/Loader"
import Notification from "./Components/Notification";
import Weather from "./Components/Weather";
import DateTime from "./Components/DateTime";
import UserCount from "./Components/UserCount";
import Analytics from "./Components/Analytics";

export default function App() {

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 md:p-6">
      {/* Header */}
      <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            API Dashboard
          </h1>
          <p className="text-zinc-400 mt-2 text-sm md:text-base">
            Multiple API responses displayed in a responsive bento layout.
          </p>
        </div>

        <button onClick={()=>{window.location.reload()}}className="bg-white text-black px-5 py-3 rounded-2xl font-medium hover:scale-105 transition">
          Refresh Data
        </button>
      </header>

      {/* Bento Grid */}
      <main className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4">
        {/* Featured Card */}
        <section
          className="md:col-span-2 md:row-span-2 bg-zinc-900 border border-zinc-800 
        rounded-3xl p-6 flex flex-col justify-between overflow-hidden"
        >
          <div>
            <p className="text-zinc-400 text-sm mb-2">Trending API</p>
            <h2 className="text-2xl md:text-4xl font-bold">Featured Content</h2>
          </div>
          {
            <ErrorBoundary fallbackRender={({ error }) => {
              return <Error message={error.message} />
            }}>
              <Suspense fallback={<Loader />}>
                <FeatureContent />
              </Suspense>
            </ErrorBoundary>
          }
        </section>
        {/* Stats Card */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col justify-between">
          <div>
            <p className="text-zinc-400 text-sm">Users API</p>
            <h3 className="text-xl font-semibold mt-2">Total Users</h3>
          </div>
          <ErrorBoundary fallbackRender={({ error }) => {
            return <Error message={error.message} />
          }}>
            <Suspense fallback={<Loader />}>
              <UserCount />
            </Suspense>
          </ErrorBoundary>
        </section>

        {/* DayTime */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">DAY & TIME</h3>
            <span className="text-xs text-zinc-500">Live</span>
          </div>

          <div className="space-y-3">
            {<DateTime />}
          </div>
        </section>

        {/* Analytics */}
        <section className="md:col-span-2 row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">Analytics Animation</p>
              <h3 className="text-2xl font-semibold mt-2">
               Overview
              </h3>
            </div>

            <div className="bg-zinc-800 px-4 py-2 rounded-xl text-sm">
              Last 10 Seconds
            </div>
          </div>

          {/* Chart */}
          <Analytics/>
        </section>

        {/* Notifications */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col justify-between overflow-hidden">
          <div>
            <p className="text-zinc-400 text-sm">Notifications API</p>
            <h3 className="text-xl font-semibold mt-2">Alerts</h3>
          </div>
          <ErrorBoundary fallbackRender={({ error }) => {
            return <Error message={error.message} />
          }}>
            <Suspense fallback={<Loader />}>
              <Notification />
            </Suspense>
          </ErrorBoundary>
        </section>

        {/* Weather*/}
        <section className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-5 flex flex-col justify-between">
          <Weather />
        </section>
      </main>
    </div>
  );
}