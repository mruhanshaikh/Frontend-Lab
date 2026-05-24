import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center gap-4">

      <div className="w-14 h-14 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>

      <p className="text-zinc-300 text-sm tracking-wide">
        Fetching Data...
      </p>

    </div>
  );
};

export default Loader;