// src/features/auth/AuthRedirect.jsx
import { Navigate, Outlet } from 'react-router';
import { useAuth } from './useAuth';
import { Loader2 } from 'lucide-react'; 

const AuthRedirect = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Tampilkan loading screen/spinner saat status auth sedang dicek
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }
  
  // Jika sudah login, alihkan ke halaman utama ('/')
  // Jika belum login, lanjutkan ke konten rute anak (Login/Register)
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthRedirect;