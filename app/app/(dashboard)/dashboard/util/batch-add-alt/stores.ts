"use client";

import { create } from "zustand";

export interface User {
  id: number;
  login: string;
}

interface State {
  errLogins: string[];
  users: User[];
  isChecking: boolean;
  isCommitting: boolean;
}

interface Action {
  clear: () => void;
}

const initialState: State = {
  errLogins: [],
  users: [],
  isChecking: false,
  isCommitting: false,
};

export const useBatchAddAltStore = create<State & Action>((set) => ({
  ...initialState,
  clear: () => {
    set({
      ...initialState,
    });
  },
}));
