import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileBadges from "@/components/profile/ProfileBadges";

const Profile = () => {
  const userProfile = {
    username: "User123",
    level: 2,
    currentXP: 600,
    maxXP: 1000,
    profileImage: null, // Bisa diisi dengan URL gambar
  };

  const stats = {
    totalActions: 42,
    totalPoints: 12000,
    badges: { current: 6, total: 6 },
  };

  const badges = [
    { id: 1, color: "bg-red-400", earned: true },
    { id: 2, color: "bg-purple-400", earned: true },
    { id: 3, color: "bg-yellow-400", earned: true },
    { id: 4, color: "bg-blue-400", earned: true },
    { id: 5, color: "bg-cyan-400", earned: true },
    { id: 6, color: "bg-teal-400", earned: true },
    { id: 7, color: "bg-green-400", earned: false },
    { id: 8, color: "bg-orange-400", earned: false },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <ProfileHeader profile={userProfile} />
        <ProfileStats stats={stats} />
        <ProfileBadges badges={badges} />
      </div>
    </div>
  );
};

export default Profile;