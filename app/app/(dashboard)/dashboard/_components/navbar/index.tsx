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
    href: "/cadet",
  },
  {
    title: "Snappy",
    href: "/snappy",
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
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="-mx-4 lg:w-1/5">
        <div className="flex flex-col items-center justify-center p-4 gap-4">
          <Image
            src="/42bangkok-logo-right.svg"
            alt="42 Bangkok"
            width={128}
            height={128}
          />
          Hi, {session!.user.login}
        </div>
        <SidebarNav items={SIDEBAR_ITEMS} />
      </aside>
      <div className="flex-1 lg:max-w-2xl">{children}</div>
    </div>
  );
}
