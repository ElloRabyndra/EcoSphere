import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProfileHeader = ({ user }) => {
  console.log(user);
  const xpPercentage =
    user.next_level?.min_points &&
    (user.points / user.next_level.min_points) * 100;

  return (
    <Card className="bg-primary p-6 md:p-8 border-none shadow-md relative overflow-hidden">
      <div className="flex  items-center gap-6 justify-between">
        <div className="flex gap-3 items-center">
          {/* Profile Picture */}
          <div className="w-15 h-15 md:w-24 md:h-24 rounded-full bg-background flex-shrink-0">
            {user.avatar_name ? (
              <img
                src="/profile/sphero.png"
                alt="Sphero"
                className="w-full h-full"
              />
            ) : null}
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-white text-lg md:text-xl font-semibold mb-2">
              {user.display_name}
            </h1>
            <div className="inline-block bg-yellow-500 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full">
              Level {user.level}
            </div>
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
          {user.points} / {user.next_level?.min_points || user.points} XP
        </p>
        {user.next_level ? (
          <p className="text-white/80 text-xs mt-1">
            Next: {user.next_level.name}
          </p>
        ) : (
          <p className="text-white/80 text-xs mt-1">Max Level Reached</p>
        )}
      </div>
    </Card>
  );
};

export default ProfileHeader;
