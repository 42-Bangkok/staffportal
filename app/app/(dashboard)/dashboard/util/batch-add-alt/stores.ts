"use client";

import { create } from "zustand";

export interface User {
  id: number;
  login: string;
}

interface State {
  errLogins: string[];
  users: User[];
}

interface Action {
  clear: () => void;
}

export const useBatchAddAltStore = create<State & Action>((set) => ({
  errLogins: [],
  users: [],
  isChecking: false,
  isCommitting: false,
  clear: () => {
    set({
      errLogins: [],
      users: [],
    });
  },
}));
