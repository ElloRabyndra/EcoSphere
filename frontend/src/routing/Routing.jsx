import { Route, Routes } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Education from "@/pages/Education";
import Badge from "@/pages/Badge";
import Action from "@/pages/Action";
import ActionDetail from "@/pages/ActionDetail";
import Profile from "@/pages/Profile";
import About from "@/pages/About";

const Routing = () => {
  return (
    <section className="bg-background text-foreground">
      <Routes>
        {/* Routes dengan MainLayout (ada Sidebar) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/edukasi" element={<Education />} />
          <Route path="/aksi/:actionId" element={<ActionDetail />} />
          <Route path="/aksi" element={<Action />} />
          <Route path="/badge" element={<Badge />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/profil" element={<Profile />} />
        </Route>

        {/* Routes tanpa MainLayout (untuk Login, Register, dll) */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </section>
  );
};

export default Routing;
