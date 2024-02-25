"use client";

import { create } from "zustand";

interface State {
  errLogins: string[];
  ids: string[];
}

interface Action {
  clear: () => void;
}

export const useBatchAddAltStore = create<State & Action>((set) => ({
  errLogins: [],
  ids: [],
  clear: () => {
    set({
      errLogins: [],
      ids: [],
    });
  },
}));
