import { auth } from "@/auth";
import { TypographyH1, TypographyH2 } from "@/components/typographies";
import Link from "next/link";

export default async function Page() {
  const session = await auth();
  return (
    <main>
      <div className="flex flex-col gap-4">
        <div>
          <TypographyH1>Dashboard</TypographyH1>
          <p>Welcome {session!.user.login}</p>
        </div>
        <div>
          <TypographyH2>Useful links</TypographyH2>
          <ul>
            <li>
              <Link
                href="https://intra.42.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://intra.42.fr/
              </Link>
            </li>
            <li>
              <Link
                href="https://staff.intra.42.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://staff.intra.42.fr/
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
