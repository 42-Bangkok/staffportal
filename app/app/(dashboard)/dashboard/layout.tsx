import DashboardLayout from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
