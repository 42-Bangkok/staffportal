"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search) {
      router.push(`/dashboard/cadet/${search}`);
    }
  };
  return (
    <div className="flex m-4 ml-0 w-1/3">
      <Input
        className="rounded-r-none debug"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        name="search"
      />
      <Button onClick={handleSubmit} className="rounded-l-none">
        Go
      </Button>
    </div>
  );
};
