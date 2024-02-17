import Image from "next/image";

import { auth } from "@/auth";
import { SidebarNav } from "./sidebar-nav";

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
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: SettingsLayoutProps) {
  const session = await auth();
  return (
    <div className="flex flex-row space-x-12 space-y-0">
      <aside className="-mx-4 min-h-dvh bg-slate-100">
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
      <div className="flex-1">{children}</div>
    </div>
  );
}
