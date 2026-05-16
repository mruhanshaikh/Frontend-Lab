export function Error({message}) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-red-400 text-lg font-semibold">
        Failed to load
      </h2>

      <p className="text-zinc-400 text-sm mt-1">
        {message}
      </p>
    </div>
  );
}