import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router";

const BadgeCollection = ({ user }) => {
  // Badge yang sudah didapat dari user
  const earnedBadges = user?.earned_badges || [];
  const hasBadges = earnedBadges.length > 0;

  return (
    <Card className="p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
        <h3 className="text-lg md:text-2xl font-bold text-foreground">
          Koleksi Badge
        </h3>
        <Trophy className="w-5 h-5 md:w-7 md:h-7 text-primary" />
      </div>

      {/* Badge Grid atau Empty State */}
      {hasBadges ? (
        <>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-4">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className={`aspect-square rounded-full transition-all hover:scale-110 cursor-pointer flex items-center justify-center`}
                title={badge.name}
              >
                <img
                  src={`/Badge/${badge.image_name}`}
                  alt={badge.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="py-2 text-center">
          <Lock className="w-6 h-6 mx-auto text-gray-300 mb-3" />
          <p className="text-muted-foreground text-sm mb-2">
            Belum ada badge
          </p>
        </div>
      )}

      {/* Desktop Only Button */}
      <Link to="/aksi" className="w-full bg-primary hover:bg-primary/90 text-white hidden md:flex items-center justify-center gap-2 cursor-pointer py-2 px-1 rounded-lg">
        Mulai Aksi
        <ArrowRight className="w-4 h-4" />
      </Link>
    </Card>
  );
};

export default BadgeCollection;