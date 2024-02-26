import { SearchInput } from "./_components/search-input";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchInput />
      {children}
    </div>
  );
}
