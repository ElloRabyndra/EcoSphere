import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  // Mengecek status autentikasi dari server
  const checkAuthStatus = async () => {
    try {
      const res = await axios.get(`${API_URL}/session`);
      if (res.data.success && res.data.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Fungsi login
  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      if (response.data.success) {
        // Setelah login berhasil, ambil data user lengkap
        await checkAuthStatus();
        navigate("/");
        return { success: true, message: "Login berhasil!" };
      }

      return {
        success: false,
        message: response.data.message || "Kredensial tidak valid.",
      };
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.message || "Terjadi kesalahan saat login";
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Fungsi register
  const register = async (display_name, email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/register`, {
        display_name,
        email,
        password,
      });

      if (response.data.success) {
        setUser(response.data.user); // tampil dulu
        navigate("/");
        checkAuthStatus(); // fetch data lengkap di background
        return { success: true, message: "Login berhasil!" };
      }

      return {
        success: false,
        message: response.data.message || "Registrasi gagal.",
      };
    } catch (error) {
      console.error("Register error:", error);
      const errorMessage =
        error.response?.data?.message || "Terjadi kesalahan saat registrasi.";
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Fungsi logout
  const logout = async () => {
    try {
      await axios.post(`${API_URL}/logout`);
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      navigate("/login");
    }
  };

  // Memoized context value agar tidak membuat referensi baru setiap render
const authValue = useMemo(
  () => ({
    user,
    isAuthenticated: !!user,
    loading,
    login,
    register,
    logout,
    checkAuthStatus, 
  }),
  [user, loading]
);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
