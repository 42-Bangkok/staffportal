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
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-0",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "block w-full px-4 py-2 text-sm font-medium rounded-md",
            buttonVariants({ variant: "outline" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:font-bold",
            "justify-start"
          )}
        >
          <div className="pl-4">{item.title}</div>
        </Link>
      ))}
      <div className="flex p-1"></div>
      <Link href={"/auth/sign-in"}>
        <Button variant="destructive" className="w-full">
          Sign Out
        </Button>
      </Link>
    </nav>
  );
}
