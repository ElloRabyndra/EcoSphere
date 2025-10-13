// src/features/auth/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router';
import { useAuth } from './useAuth';
import { Loader2 } from 'lucide-react'; // Asumsi Anda menggunakan Lucide icons atau sejenisnya

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Tampilkan loading screen/spinner saat status auth sedang dicek
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Jika sudah login, tampilkan konten rute anak (Outlet)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;