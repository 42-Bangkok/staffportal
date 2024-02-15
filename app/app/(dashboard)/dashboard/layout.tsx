import DashboardLayout from "./_components/navbar";
import "@/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
