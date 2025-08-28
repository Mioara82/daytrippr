import { create } from "zustand";
import type { Place } from "@/features/places/schemas";

type PlacesState = {
  selected: Place[];
  add: (p: Place) => void;
  remove: (id: string) => void;
  has: (id: string) => boolean;
  clear: () => void;
};

export const usePlacesStore = create<PlacesState>((set, get) => ({
  selected: [],
  add: (p) =>
    set((s) =>
      s.selected.some((x) => x.id === p.id)
        ? s
        : { ...s, selected: [...s.selected, p] }
    ),
  remove: (id) =>
    set((s) => ({ ...s, selected: s.selected.filter((x) => x.id !== id) })),
  has: (id) => get().selected.some((x) => x.id === id),
  clear: () => set({ selected: [] }),
}));
