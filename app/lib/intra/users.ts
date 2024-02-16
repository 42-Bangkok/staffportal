import { fetchToken } from "./auth";

/**
 * Fetches user data from the API.
 * @param {Object} params - The parameters for fetching the user.
 * @param {string} params.login - The login of the user to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the user data.
 * @throws {Error} - If the request to fetch the user fails.
 */
export async function fetchUser({ login }: { login: string }) {
  const token = await fetchToken();
  const r = await fetch(`https://api.intra.42.fr/v2/users/${login}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 30,
      tags: [login],
    },
  });
  if (!r.ok) {
    throw new Error("Failed to fetch user");
  }
  return r.json();
}

/**
 * Creates a transaction for a user.
 * @param value - The value of the transaction.
 * @param user_id - The ID of the user.
 * @param transactable_type - The type of the transaction.
 * @param reason - The reason for the transaction.
 * @returns A Promise that resolves to the created transaction.
 * @throws An error if the transaction creation fails.
 */
export async function transactions({
  value,
  user_id,
  transactable_type,
  reason,
}: {
  value: number;
  user_id: number;
  transactable_type: string;
  reason: string;
}) {
  const token = await fetchToken();
  const r = await fetch(`https://api.intra.42.fr/v2/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      transaction: {
        value: value,
        user_id: user_id,
        transactable_type: transactable_type,
        reason: reason,
      },
      force: true,
    }),
  });
  if (!r.ok) {
    throw new Error("Failed to create transaction");
  }
  return r.json();
}
