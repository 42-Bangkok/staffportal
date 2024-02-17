import { auth } from "@/auth";

/**
 * Checks if the current user is a staff member.
 * @returns {Promise<boolean>} A promise that resolves to true if the user is a staff member, false otherwise.
 */
export async function isStaff() {
  const session = await auth();
  if (session && session.user.isStaff) {
    return true;
  } else {
    return false;
  }
}
