import { useCards, useCreateCard, useDeleteCard } from "../hooks/useCards";
import CardItem from "./CardItem";
import CreateCardInput from "./CreateCardInput";

export default function CardBoard() {
  const { data: cards = [], isPending, isFetching, isError } = useCards();
  const createCard = useCreateCard();
  const deleteCard = useDeleteCard();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            My Cards
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Powered by TanStack Query + MockAPI
          </p>
        </div>

        {/* Input */}
        <CreateCardInput
          onCreate={(title) => createCard.mutate(title)}
          isCreating={createCard.isPending}
        />

        {/* Status bar */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-slate-400">
            {cards.length} {cards.length === 1 ? "card" : "cards"}
          </p>
          {isFetching && (
            <span className="text-xs text-blue-400 animate-pulse">
              ↻ syncing...
            </span>
          )}
        </div>

        {/* States */}
        {isPending && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl h-24 bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-16 text-red-400 text-sm">
            ❌ Failed to load cards. Check your URL.
          </div>
        )}

        {!isPending && !isError && cards.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm">
            No cards yet. Create your first one above!
          </div>
        )}

        {/* Cards grid */}
        {!isPending && !isError && cards.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cards.map((card) => (
              <CardItem
                key={card.id}
                card={card}
                onDelete={(id) => deleteCard.mutate(id)}
                isDeleting={deleteCard.isPending}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}