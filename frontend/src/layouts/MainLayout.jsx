import { Outlet } from "react-router";
import Sidebar from "@/components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-16">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;