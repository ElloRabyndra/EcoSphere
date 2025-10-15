import { Card } from "@/components/ui/card";
import { Flame } from "lucide-react";

const ProfileCard = ({ user }) => {
  // Destructure data dari user
  const username = user?.display_name || "User";
  const level = user?.level || 1;
  const currentPoints = user?.points || 0;
  const totalActions = user?.total_actions || 0;
  const totalPoints = user?.points || 0;

  // Badge statistics
  const earnedBadgesCount = user?.earned_badges?.length || 0;
  const totalBadges =
    user?.badge_statistics?.earned_badges || earnedBadgesCount;
  const badgeProgressPercentage =
    user?.badge_statistics?.progress_percentage || 0;

  // Hitung progress ke level berikutnya
  const nextLevel = user?.next_level;
  const maxXP = nextLevel?.min_points || currentPoints;
  const xpPercentage = nextLevel ? (currentPoints / maxXP) * 100 : 100;

  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <div className="md:flex">
        {/* User Profile Card (Hijau) */}
        <div className="bg-primary p-6 border-none shadow-md md:flex-1">
          <div className="flex items-center gap-4 mb-4">
            {/* Profile Picture */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl">
              <img
                src="/profile/sphero.png"
                alt="Sphero"
                className="w-full h-full"
              />
            </div>

            <div className="flex-1">
              {/* Username */}
              <h2 className="text-white text-lg md:text-xl font-semibold mb-1">
                {username}
              </h2>

              {/* Level Badge */}
              <div className="inline-block bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Level {level}
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div>
            <div className="w-full bg-white/30 rounded-full overflow-hidden text-white h-5 md:h-6">
              <div
                className="bg-yellow-400 h-full rounded-full transition-all duration-300 px-3 text-sm flex items-center justify-center pt-1"
                style={{ width: `${Math.min(xpPercentage, 100)}%` }}
              ></div>
            </div>
            <p className="text-white/80 text-sm mt-2">
              {currentPoints} / {maxXP} XP
            </p>
            {nextLevel ? (
              <p className="text-white/80 text-xs mt-1">
                Next: {nextLevel.name}
              </p>
            ) : (
              <p className="text-white/80 text-xs mt-1">Max Level Reached</p>
            )}
          </div>
        </div>

        {/* Statistics Card - Desktop Only */}
        <div className="hidden md:block p-6 shadow-sm md:flex-1 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-yellow-500" />
            <h3 className="text-lg font-bold text-foreground">
              Statistik Kamu
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Total Aksi</span>
              <span className="font-semibold text-foreground">
                {totalActions} Aksi
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Total Poin</span>
              <span className="font-semibold text-foreground">
                {totalPoints} Poin
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Badges</span>
              <span className="font-semibold text-foreground">
                {earnedBadgesCount} / 6
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Card - Mobile Only (Below Profile) */}
      <div className="md:hidden p-6 bg-white shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="w-5 h-5 text-yellow-500" />
          <h3 className="text-lg font-bold text-foreground">Statistik Kamu</h3>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Total Aksi</span>
            <span className="font-semibold text-foreground">
              {totalActions} Aksi
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Total Poin</span>
            <span className="font-semibold text-foreground">
              {totalPoints} Poin
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Badges</span>
            <span className="font-semibold text-foreground">
              {earnedBadgesCount} / {totalBadges}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
