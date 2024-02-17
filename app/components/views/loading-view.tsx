"use client";

import { PacmanLoader } from "react-spinners";

export const LoadingView = () => {
  return (
    <div className="flex flex-col">
      <PacmanLoader color="#F6BE00" />
      <p className="text-[#F6BE00] text-bold">Loading...</p>
    </div>
  );
};
