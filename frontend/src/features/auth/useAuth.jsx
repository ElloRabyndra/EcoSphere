import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext); // PERBAIKAN: Menggunakan AuthContext
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fungsi yang dapat dipanggil untuk memverifikasi sesi dan mengambil data lengkap
  const refetchUser = async () => {
    try {
      const response = await api.get("/session");

      if (
        response.data.success &&
        response.data.data &&
        response.data.data.user
      ) {
        // Mengisi state user dengan data lengkap (user + badges + stats)
        setUser(response.data.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    }
  };

  // Jalankan refetchUser saat komponen dimuat (untuk sesi yang tersimpan)
  useEffect(() => {
    const checkSessionAndStopLoading = async () => {
      await refetchUser();
      setIsLoading(false);
    };
    checkSessionAndStopLoading();
  }, []);

  // Function to register a new user
  const register = async (userData) => {
    setIsLoading(true);
    try {
      const response = await api.post("/register", userData);

      const userDataFromRegister = response.data.data;

      // 1. SET USER SEMENTARA DARI RESPON REGISTER (untuk mengaktifkan isAuthenticated)
      setUser({
        id: userDataFromRegister.userId, // Menggunakan userId dari controller
        email: userDataFromRegister.email,
        display_name: userDataFromRegister.display_name,
      });

      // 2. Ambil data lengkap untuk mengisi stats di Home (asynchronous)
      await refetchUser();

      return {
        success: true,
        message: response.data.message || "Registration successful!",
      };
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed!";
      setUser(null);
      return { success: false, message };
    } finally {
      setIsLoading(false);
    }
  };

  // Function for login
  const login = async (credentials) => {
    setIsLoading(true); // START LOADING
    try {
      const response = await api.post("/login", credentials);

      const userDataFromLogin = response.data.data;

      // 1. SET USER SEMENTARA DARI RESPON LOGIN (untuk mengaktifkan isAuthenticated)
      setUser({
        id: userDataFromLogin.id,
        email: userDataFromLogin.email,
        display_name: userDataFromLogin.display_name,
      });

      // 2. Ambil data lengkap dari /session untuk mengisi stats di Home
      await refetchUser();

      // Karena refetchUser sudah memperbarui state user, cukup kembalikan pesan sukses
      return {
        success: true,
        message: response.data.message || "Login successful!",
      };
    } catch (error) {
      const message = error.response?.data?.message || "Invalid credentials!";
      setUser(null);
      return { success: false, message };
    } finally {
      setIsLoading(false); // STOP LOADING
    }
  };

  // Function for logout
  const logout = async () => {
    try {
      await api.post("/logout");
      setUser(null);
      return { success: true, message: "Logout successful!" };
    } catch (error) {
      const message = error.response?.data?.message || "Logout failed!";
      return { success: false, message };
    }
  };
  // ... (isEmailRegistered dan validatePassword)

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    register,
    login,
    logout,
    // ...
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
