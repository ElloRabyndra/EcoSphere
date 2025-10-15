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
    </div>
  );
};

export default ProfileBadges;
