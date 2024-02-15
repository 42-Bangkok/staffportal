import { auth } from "@/auth"

export default async function Page() {
  const session = await auth()
  return (<main>
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session!.user.login}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  </main>)
}
