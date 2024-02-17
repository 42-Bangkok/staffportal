"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex flex-col space-x-0 space-y-0", className)}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "block w-full px-4 py-2 text-sm font-medium",
            buttonVariants({ variant: "outline" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:font-bold",
            "justify-start rounded-none"
          )}
        >
          <div className="pl-4">{item.title}</div>
        </Link>
      ))}
      <div className="flex p-1"></div>
      <Link href={"/auth/sign-in"}>
        <Button variant="destructive" className="w-full rounded-none">
          Sign Out
        </Button>
      </Link>
    </nav>
  );
}
