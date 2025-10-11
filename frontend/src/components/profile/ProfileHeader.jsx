import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProfileHeader = ({ profile }) => {
  const { username, level, currentXP, maxXP, profileImage } = profile;
  const xpPercentage = (currentXP / maxXP) * 100;

  return (
    <Card className="bg-primary p-6 md:p-8 border-none shadow-md relative overflow-hidden">
      <div className="flex  items-center gap-6 justify-between">
        <div className="flex gap-3 items-center">
          {/* Profile Picture */}
          <div className="w-15 h-15 md:w-24 md:h-24 rounded-full bg-gray-300 flex-shrink-0">
            {profileImage ? (
              <img
                src={profileImage}
                alt={username}
                className="w-full h-full rounded-full object-cover"
              />
            ) : null}
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-2">
              {username}
            </h1>
            <div className="inline-block bg-yellow-500 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full">
              Level {level}
            </div>
          </div>
        </div>
        {/* Edit Button - Desktop */}
        <Button
          variant="secondary"
          className=" bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
        >
          Edit
        </Button>
      </div>

      {/* XP Progress */}
      <div>
        <div className="w-full bg-white/30 rounded-full overflow-hidden text-white h-5 md:h-8">
          <div
            className="bg-yellow-400 h-full rounded-full transition-all duration-300 px-3 text-sm flex items-center justify-center pt-1"
            style={{ width: `${xpPercentage}%` }}
          >
            {currentXP} / {maxXP} XP
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
