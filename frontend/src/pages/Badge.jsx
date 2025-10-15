import { useEffect, useState } from "react";
import PageHeader from "@/components/badge/PageHeader";
import BadgeGrid from "@/components/badge/BadgeGrid";
import { Card } from "@/components/ui/card";

const Badge = () => {
  const [badges, setBadges] = useState([]);
  const [userBadges, setUserBadges] = useState([]);
  const [badgesFiltered, setBadgesFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const [badgeResponse, userBadgeResponse] = await Promise.all([
          fetch("http://localhost:3000/api/badges", {
            credentials: "include", // Kirim cookie session untuk autentikasi
          }),
          fetch("http://localhost:3000/api/badges/user", {
            credentials: "include", // Kirim cookie session untuk autentikasi
          }),
        ]);

        const [badgeResult, userBadgeResult] = await Promise.all([
          badgeResponse.json(),
          userBadgeResponse.json(),
        ]);

        if (badgeResult.success && userBadgeResult.success) {
          setBadges(badgeResult.data);
          setUserBadges(userBadgeResult.data);
          const filteredBadges = badgeResult.data.map((badge) => ({
            ...badge,
            awarded: userBadgeResult.data.some((ub) => ub.id === badge.id),
          }));
          setBadgesFiltered(filteredBadges);
        } else {
          setError("Gagal memuat data badge");
        }
      } catch (err) {
        setError("Terjadi kesalahan saat memuat data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBadges();
  }, []);

  if (loading) {
    return (
      <main className="flex flex-col flex-1 p-6 md:ml-16 py-8 md:p-8 md:py-12">
        <Card className="max-w-5xl mx-auto bg-gray-50 p-6 rounded-2xl">
          <PageHeader title="Badge" subtitle="Memuat data badge..." />
        </Card>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex flex-col flex-1 p-6 md:ml-16 py-8 md:p-8 md:py-12">
        <Card className="max-w-5xl mx-auto bg-gray-50 p-6 rounded-2xl">
          <PageHeader
            title="Badge"
            subtitle="Badge akan muncul jika aksi tertentu selesai"
          />
          <p className="text-red-500 text-center mt-4">{error}</p>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex flex-col flex-1 p-6 md:ml-16 py-8 md:p-8 md:py-12">
      <Card className="max-w-5xl mx-auto bg-gray-50 p-6 rounded-2xl">
        <PageHeader
          title="Badge"
          subtitle="Ayo Lakukan Aksi dan Dapatkan Badge!"
        />
        <BadgeGrid badges={badgesFiltered} />
      </Card>
    </main>
  );
};

export default Badge;
