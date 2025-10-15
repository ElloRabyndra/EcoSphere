import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useAuth } from "@/features/auth/useAuth";
import {
  CookingPot,
  Leaf,
  Lightbulb,
  RefreshCcw,
  Trash,
  Loader2,
} from "lucide-react";
import { toast } from "react-toastify";
import { actionThemes } from "@/database/data";
import SpheroPopup from "@/components/SpheroPopup"; // Sesuaikan path

const ActionDetailCard = () => {
  const { actionId } = useParams();
  const navigate = useNavigate();
  const { user, checkAuthStatus } = useAuth();

  const [action, setAction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // State untuk popup
  const [popupQueue, setPopupQueue] = useState([]);
  const [currentPopup, setCurrentPopup] = useState(null);

  const categoryToActionType = {
    "Hemat Energi": "hematEnergi",
    "Kurangi Sampah Plastik": "kurangiSampahPlastik",
    "Peduli Alam": "peduliAlam",
    "Bijak dalam Konsumsi": "bijakDalamKonsumsi",
    "Daur Ulang": "daurUlang",
  };

  const categoryIcons = {
    hematEnergi: <Lightbulb className="w-5 h-5 text-primary" />,
    kurangiSampahPlastik: <Trash className="w-5 h-5 text-primary" />,
    peduliAlam: <Leaf className="w-5 h-5 text-primary" />,
    bijakDalamKonsumsi: <CookingPot className="w-5 h-5 text-primary" />,
    daurUlang: <RefreshCcw className="w-5 h-5 text-primary" />,
  };

  useEffect(() => {
    const fetchActionDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/actions/${actionId}`
        );
        const result = await response.json();

        if (result.success) {
          setAction(result.data);
        } else {
          toast.error("Gagal memuat detail aksi");
        }
      } catch (err) {
        toast.error("Terjadi kesalahan saat memuat data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActionDetail();
  }, [actionId]);

  // Handler untuk menampilkan popup secara berurutan
  useEffect(() => {
    if (popupQueue.length > 0 && !currentPopup) {
      const nextPopup = popupQueue[0];
      setCurrentPopup(nextPopup);
      setPopupQueue((prev) => prev.slice(1));
    }
  }, [popupQueue, currentPopup]);

  const showPopup = (type, value) => {
    setPopupQueue((prev) => [...prev, { type, value }]);
  };

  const handleClosePopup = () => {
    setCurrentPopup(null);
  };

  const handleSubmit = async () => {
    if (!user || user.level < action.req_level) {
      toast.error(
        `Level minimal ${action.req_level} diperlukan untuk melakukan action ini`
      );
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/user-actions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          action_id: parseInt(actionId),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        const data = result.data;
        console.log(result.data);

        let delay = 0;

        // 1. Tampilkan popup badges (tampil pertama)
        if (data.badges_earned && data.new_badges.length > 0) {
          data.new_badges.forEach((badge, index) => {
            setTimeout(() => {
              showPopup("badge", badge.name);
            }, delay + index * 1000); // jeda per badge 1800ms
          });
          delay += data.new_badges.length * 1000;
        }

        // 2. Tampilkan popup level up jika ada
        if (data.level_up) {
          setTimeout(() => {
            showPopup("level", data.new_level);
          }, delay);
          delay += 1800;
        }

        // 3. Tampilkan popup poin (paling akhir)
        setTimeout(() => {
          showPopup("point", data.points_earned);
        }, delay);
        delay += 1800;

        // Mengecek status autentikasi
        await checkAuthStatus();

        // Navigate setelah semua popup selesai
        setTimeout(() => {
          navigate("/aksi");
        }, delay);
      } else {
        toast.error(result.error || "Gagal melakukan aksi");
      }
    } catch (err) {
      toast.error("Terjadi kesalahan saat melakukan aksi");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </main>
    );
  }

  if (!action) {
    return (
      <main className="p-6 md:ml-16 py-8 md:p-8 md:py-12 xl:ml-0">
        <p className="text-red-500">Action tidak ditemukan</p>
      </main>
    );
  }

  const actionType = categoryToActionType[action.category] || "peduliAlam";

  return (
    <>
      <div className="rounded-xl overflow-hidden shadow-md bg-white">
        {/* Header */}
        <div
          className={`${actionThemes[actionType].backgroundColor} p-3 xl:p-5  space-y-1`}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-sm md:text-lg lg:text-xl font-semibold mb-1 max-w-50 sm:max-w-full">
              {action.title}
            </h2>
            <span
              className={`text-xs md:text-sm font-bold py-1 px-2 rounded-full bg-primary text-white w-max`}
            >
              Poin +{action.points}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h2
              className={`text-sm md:text-lg font-bold ${actionThemes[actionType].textColor}`}
            >
              {action.category}
            </h2>
            <span className="text-xs md:text-sm font-medium text-muted-foreground">
              Level {action.req_level}
            </span>
          </div>
        </div>
        {/* Konten */}
        <div className="p-3 xl:p-5  text-sm space-y-2">
          {/* Deskripsi */}
          <div>
            <h2 className="font-semibold md:text-lg">Deskripsi</h2>
            <p className="text-xs md:text-base text-muted-foreground">
              {action.description}
            </p>
          </div>
          {/* Dampak */}
          <div
            className={`md:text-lg p-3 xl:p-5  rounded-lg bg-[#32CD32]/20 space-y-2`}
          >
            <div className="flex items-center gap-2 ">
              {categoryIcons[actionType]}
              <h2 className={`text-primary font-semibold`}>
                Dampak Lingkungan
              </h2>
            </div>
            <p className="px-2 text-[11px] md:text-base text-muted-foreground">
              {action.eco_impact}
            </p>
          </div>
          {/* Button */}
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-[#32CD32]/20 text-primary w-full py-1.5 rounded-lg cursor-pointer md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Memproses..." : "Lakukan Aksi"}
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {currentPopup && (
        <SpheroPopup
          point={currentPopup.type === "point" ? currentPopup.value : ""}
          level={currentPopup.type === "level" ? currentPopup.value : ""}
          badgeName={currentPopup.type === "badge" ? currentPopup.value : ""}
          popupType={currentPopup.type}
          isOpen={true}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default ActionDetailCard;
