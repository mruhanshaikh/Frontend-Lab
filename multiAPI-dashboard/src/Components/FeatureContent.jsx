import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { featureContentOptions } from "../QueryOptions/featureContentOptions";

const FeatureContent = () => {
  const { data} = useSuspenseQuery(featureContentOptions())
  return (
      <div className="space-y-3">
        <h3
          className="text-xl md:text-2xl font-semi-bold leading-tight text-white line-clamp-1
          md:line-clamp-2"
        >
          {data.title}
        </h3>
        <p
          className="text-sm md:text-base text-zinc-400 leading-relaxed line-clamp-2 
          md:line-clamp-4"
        >
          {data.summary}
        </p>
      </div>
  );
};

export default FeatureContent;
