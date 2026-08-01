import { create } from "zustand";

import {
  createContactSlice,
  type ContactSlice,
} from "@/store/contact-slice";

export type AppStore = ContactSlice;

export const useAppStore = create<AppStore>()((...args) => ({
  ...createContactSlice(...args),
}));
