import Navbar from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-full pl-4 pt-4">{children}</div>
    </>
  );
}
