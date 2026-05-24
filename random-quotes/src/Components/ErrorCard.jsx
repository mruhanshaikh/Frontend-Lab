import React from "react";

const ErrorCard = ({ message }) => {
  return (
    <div className="space-y-3">

      <h2 className="text-red-400 text-2xl font-bold">
        Request Failed
      </h2>

      <p className="text-zinc-300">
        {message}
      </p>

    </div>
  );
};

export default ErrorCard;