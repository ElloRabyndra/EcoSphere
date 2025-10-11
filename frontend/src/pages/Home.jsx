import ProfileCard from "@/components/home/ProfileCard";
import BadgeCollection from "@/components/home/BadgeCollection";
import MissionList from "@/components/home/MissionList";

const Home = () => {
  // Mock data
  const userStats = {
    totalActions: 42,
    totalPoints: 12000,
    badges: { current: 6, total: 6 }
  };

  const missions = [
    {
      id: 1,
      title: "Matikan Lampu Saat Tidak Dipakai",
      description: "Cek kamar, matikan lampu jika tidak digunakan.",
      level: 1,
      points: 5,
    },
    {
      id: 2,
      title: "Bawa Botol Minum Sendiri",
      description: "Hindari beli air mineral sekali pakai.",
      level: 1,
      points: 5,
    },
    {
      id: 3,
      title: "Siram Tanaman Setiap Hari",
      description: "Merawat tanaman di rumah atau sekolah.",
      level: 1,
      points: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 py-8 md:p-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          <ProfileCard stats={userStats} />
          <BadgeCollection />
          <MissionList missions={missions} />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <ProfileCard stats={userStats} />
            <BadgeCollection />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <MissionList missions={missions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;