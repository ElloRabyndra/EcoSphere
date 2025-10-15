import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; 
import ToastWrapper from "./components/common/ToastWrapper"; 
import Routing from "./routing/Routing"; 
import { AuthProvider } from "./features/auth/useAuth"; 
import "./style/Style.css"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> 
        <AuthProvider> 
          <ToastWrapper />
          <Routing />
        </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);