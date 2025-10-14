import { Route, Routes } from "react-router"; 
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Education from "@/pages/Education";
import Badge from "@/pages/Badge";
import Action from "@/pages/Action";
import ActionDetail from "@/pages/ActionDetail";
import Profile from "@/pages/Profile";
import About from "@/pages/About";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Landing from "@/pages/Landing";
import ProtectedRoute from "@/features/auth/ProtectedRoute";
import AuthRedirect from "@/features/auth/AuthRedirect";

const Routing = () => {
  return (
    <section className="text-foreground">
      <Routes>
        <Route element={<AuthRedirect />}>
          <Route path="/landing" element={<Landing />} />
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/edukasi" element={<Education />} />
            <Route path="/aksi/:actionId" element={<ActionDetail />} />
            <Route path="/aksi" element={<Action />} />
            <Route path="/badge" element={<Badge />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/profil" element={<Profile />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              404: Halaman tidak ditemukan
            </div>
          }
        />
      </Routes>
    </section>
  );
};

export default Routing;
