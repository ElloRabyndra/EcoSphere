import ProfileCard from "@/components/home/ProfileCard";
import BadgeCollection from "@/components/home/BadgeCollection";
import MissionList from "@/components/home/MissionList";
import { useAuth } from "@/features/auth/useAuth";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const { user, loading: authLoading } = useAuth();
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/actions");
        const result = response.data;
        setMissions(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActions();
  }, []);

  // Tampilkan spinner jika auth masih loading atau user belum siap
  if (authLoading || !user) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </main>
    );
  }

  // Tampilkan spinner jika data actions masih loading
  if (loading) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4 py-8 md:p-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          <ProfileCard user={user} />
          <BadgeCollection user={user} />
          <MissionList user={user} missions={missions} />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <ProfileCard user={user} />
            <BadgeCollection user={user} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <MissionList user={user} missions={missions} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
