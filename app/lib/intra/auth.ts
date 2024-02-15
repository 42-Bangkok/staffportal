import { rdb } from "../db/redis";

/**
 * Fetches the access token from the 42 API.
 * If the access token is already stored in the Redis database, it returns the stored token.
 * Otherwise, it makes a request to the 42 API to fetch a new access token using client credentials.
 * The fetched access token is then stored in the Redis database for future use.
 * @returns The access token.
 * @throws Error if failed to fetch the token.
 */
export async function fetchToken() {
  const access_token = await rdb.get("intra_token");
  if (access_token) {
    return access_token;
  }
  const r = await fetch("https://api.intra.42.fr/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.AUTH_42_SCHOOL_CLIENT_ID,
      client_secret: process.env.AUTH_42_SCHOOL_CLIENT_SECRET,
    }),
    next: { revalidate: 0 },
  });
  if (!r.ok) {
    throw new Error("Failed to fetch token");
  }
  const data = await r.json();
  rdb.set("intra_token", data.access_token, "EX", data.expires_in - 60);

  return data.access_token;
}
