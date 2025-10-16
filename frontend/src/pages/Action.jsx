import { useEffect, useState } from "react";
import ActionGrid from "@/components/action/ActionGrid";
import { useAuth } from "@/features/auth/useAuth";
import axios from "axios";

const Action = () => {
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, loading: authLoading } = useAuth();

  // Tampilkan spinner sampai status auth dan user selesai dimuat
  if (authLoading || !user) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </main>
    );
  }

  useEffect(() => {
    const fetchActions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/actions");
        const result = response.data;

        if (result.success) {
          setActions(result.data);
        } else {
          setError("Gagal memuat data aksi");
        }
      } catch (err) {
        setError("Terjadi kesalahan saat memuat data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActions();
  }, []);

  if (loading) {
    return (
      <main className="p-6 md:ml-16 py-8 md:p-8 md:py-12 xl:ml-0">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 border-b-2 border-black pb-2">
          Aksi
        </h1>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          Memuat data aksi...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-6 md:ml-16 py-8 md:p-8 md:py-12 xl:ml-0">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 border-b-2 border-black pb-2">
          Aksi
        </h1>
        <p className="text-red-500 text-sm md:text-base">{error}</p>
      </main>
    );
  }

  return (
    <main className="p-6 md:ml-16 py-8 md:p-8 md:py-12 xl:ml-0">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 border-b-2 border-black pb-2">
        Aksi
      </h1>
      <p className="text-muted-foreground text-sm md:text-base">
        Temukan aksi yang dapat kamu lakukan untuk menjaga lingkungan.
      </p>
      <div className="mt-4 space-y-4">
        <ActionGrid
          actions={actions}
          actionType="peduliAlam"
          category="Peduli Alam"
          userLevel={user.level}
        />
        <ActionGrid
          actions={actions}
          actionType="kurangiSampahPlastik"
          category="Kurangi Sampah Plastik"
          userLevel={user.level}
        />
        <ActionGrid
          actions={actions}
          actionType="hematEnergi"
          category="Hemat Energi"
          userLevel={user.level}
        />
        <ActionGrid
          actions={actions}
          actionType="bijakDalamKonsumsi"
          category="Bijak dalam Konsumsi"
          userLevel={user.level}
        />
        <ActionGrid
          actions={actions}
          actionType="daurUlang"
          category="Daur Ulang"
          userLevel={user.level}
        />
      </div>
    </main>
  );
};

export default Action;
