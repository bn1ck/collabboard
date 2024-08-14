import React, { FC } from "react";
import Sidebar from "./_components/sidebar";
import OrgSidebar from "./_components/OrgSidebar";
import Navbar from "./_components/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className="h-full">
      <Sidebar />

      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
