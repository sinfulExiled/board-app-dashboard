"use client";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import GlobalHeader from "./GlobalHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <GlobalHeader />
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-[#fbfbfc]">{children}</main>
      </div>
    </div>
  );
}
