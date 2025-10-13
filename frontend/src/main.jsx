import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; // Pastikan importnya benar
import ToastWrapper from "./components/common/ToastWrapper"; 
import Routing from "./routing/Routing"; 
import { AuthProvider } from "./features/auth/useAuth"; // <-- Import AuthProvider
import "./style/Style.css"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter harus tetap di atas */}
    <BrowserRouter> 
        {/* Bungkus dengan AuthProvider agar semua rute bisa mengakses context */}
        <AuthProvider> 
          <ToastWrapper />
          <Routing />
        </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);