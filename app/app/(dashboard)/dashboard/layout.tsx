import Navbar from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-full pt-4 pl-4 pr-4">{children}</div>
    </>
  );
}
