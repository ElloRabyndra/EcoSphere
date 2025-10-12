import { Outlet } from "react-router";
import Sidebar from "@/components/Sidebar";
import { OrganicBlobBackground } from "@/components/OrganicBlobBackground";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <OrganicBlobBackground />
      <Sidebar />
      <main className="flex-1 ml-16">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
