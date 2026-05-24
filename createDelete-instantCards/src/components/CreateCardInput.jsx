import { useState } from "react";

export default function CreateCardInput({ onCreate, isCreating }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const title = input.trim();
    if (!title) return;
    onCreate(title);
    setInput("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Enter card title..."
        className="
          flex-1 border border-gray-200 rounded-xl px-4 py-3
          text-sm outline-none focus:ring-2 focus:ring-blue-400
          transition placeholder:text-gray-400
        "
      />
      <button
        onClick={handleSubmit}
        disabled={isCreating || !input.trim()}
        className="
          bg-blue-500 hover:bg-blue-600 active:scale-95
          text-white text-sm font-medium
          px-6 py-3 rounded-xl transition-all
          disabled:opacity-50 disabled:cursor-not-allowed
          whitespace-nowrap
        "
      >
        {isCreating ? "Creating..." : "+ Create Card"}
      </button>
    </div>
  );
}