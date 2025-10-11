import { Card } from "@/components/ui/card";
import { Car, Flame } from "lucide-react";

const ProfileCard = ({ stats }) => {
  const { totalActions, totalPoints, badges } = stats;
  const username = "User123";
  const level = 2;
  const currentXP = 600;
  const maxXP = 1000;
  const xpPercentage = (currentXP / maxXP) * 100;

  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      {/* Profile Section - Mobile: Card Hijau, Desktop: Split Layout */}
      <div className="md:flex">
        {/* User Profile Card (Hijau) */}
        <div className="bg-primary p-6 border-none shadow-md md:flex-1">
          <div className="flex items-center gap-4 mb-4">
            {/* Profile Picture */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-300 flex-shrink-0" />
            
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
          <div className="space-y-2">
            <div className="flex items-center gap-2 bg-yellow-400 text-primary font-bold text-sm px-3 py-2 rounded-lg">
              <span>{currentXP} / {maxXP} XP</span>
            </div>
            
            <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-white h-full rounded-full transition-all duration-300"
                style={{ width: `${xpPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Statistics Card - Desktop Only */}
        <div className="hidden md:block p-6 shadow-sm md:flex-1 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-yellow-500" />
            <h3 className="text-lg font-bold text-foreground">Statistik Kamu</h3>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Total Aksi</span>
              <span className="font-semibold text-foreground">{totalActions} Aksi</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Total Poin</span>
              <span className="font-semibold text-foreground">{totalPoints} Poin</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Badges</span>
              <span className="font-semibold text-foreground">
                {badges.current} / {badges.total}
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
            <span className="font-semibold text-foreground">{totalActions} Aksi</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Total Poin</span>
            <span className="font-semibold text-foreground">{totalPoints} Poin</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Badges</span>
            <span className="font-semibold text-foreground">
              {badges.current} / {badges.total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;