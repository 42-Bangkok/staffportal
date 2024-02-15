import { SearchInput } from "./_components/search-input";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchInput />
      {children}
    </>
  );
}
