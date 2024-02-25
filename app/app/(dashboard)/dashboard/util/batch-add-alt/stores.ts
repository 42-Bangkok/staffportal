"use client";

import { create } from "zustand";

interface State {
  errLogins: string[];
  ids: string[];
  isChecking: boolean;
  isCommitting: boolean;
}

interface Action {
  clear: () => void;
}

export const useBatchAddAltStore = create<State & Action>((set) => ({
  errLogins: [],
  ids: [],
  isChecking: false,
  isCommitting: false,
  clear: () => {
    set({
      errLogins: [],
      ids: [],
    });
  },
}));
