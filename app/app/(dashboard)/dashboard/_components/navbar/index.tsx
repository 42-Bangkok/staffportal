import Image from "next/image";

import { auth } from "@/auth";
import { SidebarNav } from "./sidebar-nav";
import { ThemeToggle } from "./theme-togle";

const SIDEBAR_ITEMS = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Cadet",
    href: "/dashboard/cadet",
  },
  {
    title: "Snappy",
    href: "/dashboard/snappy",
  },
  {
    title: "Utils",
    href: "/dashboard/util",
  },
];

export default async function Navbar() {
  const session = await auth();
  return (
    <div className="flex flex-row space-x-12 space-y-0">
      <aside className="min-h-dvh bg-secondary">
        <div className="absolute p-2 right-0">
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center justify-center p-4 gap-4">
          <Image
            src="/42bangkok-logo-right.svg"
            alt="42 Bangkok"
            width={128}
            height={128}
          />
          Hi, {session!.user.login}
        </div>
        <SidebarNav items={SIDEBAR_ITEMS} className="pr-1" />
      </aside>
    </div>
  );
}
