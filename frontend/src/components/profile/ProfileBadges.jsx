import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const ProfileBadges = ({ badges }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6 border-b-2 border-black pb-2">
        <h2 className="text-lg font-bold text-foreground">Koleksi Badge</h2>
        <Trophy className="w-5 h-5 md:w-8 md:h-8 text-primary" />
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 md:gap-6">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`aspect-square rounded-full ${badge.color} ${
              badge.earned ? "opacity-100" : "opacity-30"
            } transition-all hover:scale-110 cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileBadges;