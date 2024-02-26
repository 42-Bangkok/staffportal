"use server";

import { transactions } from "@/lib/intra/users";
import { SAResponse } from "@/types/sa-response";
import { IAddAlt } from "./types";
import { revalidateTag } from "next/cache";
import { isStaff } from "@/lib/auth/utils";

/**
 * Adds an alternative money
 * @param payload - The payload
 * @returns A promise that resolves to a SAResponse object with a boolean indicating the success of the operation.
 */
export async function addAlt(payload: IAddAlt): Promise<SAResponse<boolean>> {
  if (!(await isStaff())) {
    return {
      data: null,
      error: "You are not authorized to perform this action",
    };
  }
  try {
    const r = await transactions({
      ...payload,
      transactable_type: "Tuteur api",
      reason: "cadeau",
    });
    revalidateTag(payload.login);
    return { data: true, error: null };
  } catch (e) {
    return { data: null, error: "Failed to add Alt" };
  }
}
