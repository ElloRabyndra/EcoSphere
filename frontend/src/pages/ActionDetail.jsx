import { Link, useParams } from "react-router";
import { actions } from "@/database/data";
import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import ActionDetailCard from "@/components/action/ActionDetailCard";
import axios from "axios";
const ActionDetail = () => {
  const { actionId } = useParams();
  const [action, setAction] = useState({});
  const [actionType, setActionType] = useState("hematEnergi");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const actionTypes = [
    "hematEnergi",
    "kurangiSampahPlastik",
    "peduliAlam",
    "bijakDalamKonsumsi",
    "daurUlang",
  ];

  useEffect(() => {
    const fetchActions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/actions/${actionId}`
        );
        const result = response.data;

        if (result.success) {
          setAction(result.data);
          const currentAction = actionTypes.find(
            (type) =>
              type.toLowerCase() ===
              result.data.category.replaceAll(" ", "").toLowerCase()
          );
          setActionType(currentAction);
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
  }, [actionId]);

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
    <section className="p-6 md:ml-16 py-8 md:p-8 md:py-12">
      {/* Tombol Kembali */}
      <Link to="/aksi" className="flex items-center gap-2 text-primary mb-4">
        <ChevronLeft className="w-6 h-6" />
        <span>Kembali ke Daftar Aksi</span>
      </Link>
      <ActionDetailCard action={action} actionType={actionType} loading={loading} />
    </section>
  );
};

export default ActionDetail;
