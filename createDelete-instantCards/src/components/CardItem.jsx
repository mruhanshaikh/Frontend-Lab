const colors = [
  "#e0f2fe", "#fef9c3", "#dcfce7",
  "#fce7f3", "#ede9fe", "#ffedd5",
];  
const getColor = (id) => colors[id % colors.length];

export default function CardItem({ card, onDelete, isDeleting }) {
  return (
    <div
      onClick={() => onDelete(card.id)}
      style={{ background: getColor(card.id) }}
      className={`
        rounded-2xl p-4 cursor-pointer border border-black/5
        hover:opacity-70 hover:scale-95 transition-all duration-150
        ${isDeleting ? "opacity-40 pointer-events-none" : ""}
      `}
    >
      <p className="font-semibold text-sm text-slate-800 break-words">
        {card.title || `Card #${card.id}`}
      </p>
      <p className="text-xs text-slate-500 mt-2">× click to delete</p>
    </div>
  );
}