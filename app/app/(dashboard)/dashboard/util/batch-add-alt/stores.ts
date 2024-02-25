"use client";

import { create } from "zustand";

interface State {
  errLogins: string[];
}

interface Action {
  addErrLogin: (logins: string) => void;
}

export const useBatchAddAltStore = create<State & Action>((set) => ({
  errLogins: [],
  addErrLogin: (login) => {
    set((state) => ({ errLogins: [...state.errLogins, login] }));
  },
}));
