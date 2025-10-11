import { Route, Routes } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Education from "@/pages/Education";
import Badge from "@/pages/Badge";

const Routing = () => {
  return (
    <section className="bg-background text-foreground">
      <Routes>
        {/* Routes dengan MainLayout (ada Sidebar) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/edukasi" element={<Education />} />
          <Route path="/aksi" element={<div className="p-8">Halaman Aksi</div>} />
          <Route path="/badge" element={<Badge/>} />
          <Route path="/tentang" element={<div className="p-8">Halaman Tentang</div>} />
          <Route path="/profil" element={<div className="p-8">Halaman Profil</div>} />
        </Route>

        {/* Routes tanpa MainLayout (untuk Login, Register, dll) */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </section>
  );
};

export default Routing;