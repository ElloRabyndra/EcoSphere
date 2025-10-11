import { Route, Routes } from "react-router";
import { useContext } from "react";
import Home from "@/pages/Home";

const Routing = () => {
  return (
    <section className="bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
};

export default Routing;
