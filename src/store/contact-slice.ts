import type { StateCreator } from "zustand";

export type ContactSlice = {
  contactOpen: boolean;
  openContact: () => void;
  setContactOpen: (open: boolean) => void;
};

export const createContactSlice: StateCreator<
  ContactSlice,
  [],
  [],
  ContactSlice
> = (set) => ({
  contactOpen: false,
  openContact: () => set({ contactOpen: true }),
  setContactOpen: (open) => set({ contactOpen: open }),
});
