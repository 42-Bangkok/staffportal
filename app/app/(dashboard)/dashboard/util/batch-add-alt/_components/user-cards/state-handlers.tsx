"use client";

import { useBatchAddAltStore } from "../../stores";

export const AddErrloginHandler = ({ login }: { login: string }) => {
  useBatchAddAltStore.setState({
    errLogins: [
      ...new Set([...useBatchAddAltStore.getState().errLogins, login]),
    ],
  });
  return null;
};
