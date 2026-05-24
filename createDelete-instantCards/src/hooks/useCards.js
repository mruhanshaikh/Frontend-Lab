import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { cardsApi } from "../api/cardsApi";

export const CARDS_KEY = ["cards"];

export function useCards() {
  return useQuery({
    queryKey: CARDS_KEY,
    queryFn: cardsApi.getAll,
  });
} 

export function useCreateCard() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (title) => cardsApi.create(title),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: CARDS_KEY });
    },
  });
}

export function useDeleteCard() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => cardsApi.remove(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: CARDS_KEY });
    },
  });
}