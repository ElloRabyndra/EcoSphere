import ProfileCard from "@/components/home/ProfileCard";
import BadgeCollection from "@/components/home/BadgeCollection";
import MissionList from "@/components/home/MissionList";
import { userStats, missions } from "@/database/data";
const Home = () => {
  return (
    <main className="min-h-screen p-4 py-8 md:p-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          <ProfileCard stats={userStats} />
          <BadgeCollection />
          <MissionList missions={missions} />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-6">
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
    </main>
  );
};

export default Home;
