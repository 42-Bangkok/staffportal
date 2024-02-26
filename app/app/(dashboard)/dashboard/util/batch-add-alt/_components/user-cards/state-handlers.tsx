"use client";

import { useBatchAddAltStore } from "../../stores";
import _ from "lodash";

export const AddErrloginHandler = ({ login }: { login: string }) => {
  useBatchAddAltStore.setState({
    errLogins: [
      ...new Set([...useBatchAddAltStore.getState().errLogins, login]),
    ],
  });
  return null;
};

export const AddIdHandler = ({ id, login }: { id: number; login: string }) => {
  let newUsersState = [...useBatchAddAltStore.getState().users, { id, login }];
  newUsersState = _.uniqBy(newUsersState, "id");
  useBatchAddAltStore.setState({
    users: newUsersState,
  });
  return null;
};
