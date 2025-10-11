import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Lightbulb, Droplet, Sprout } from "lucide-react";

const MissionList = ({ missions }) => {
  // Icon mapping untuk mission
  const iconMap = {
    1: Lightbulb,
    2: Droplet,
    3: Sprout,
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4 border-b-2 border-black pb-2">
        <h3 className="text-lg md:text-2xl font-bold text-foreground">
          Aksi Starter Hari ini
        </h3>
        <Zap className="w-5 h-5 text-yellow-500" />
      </div>

      <div className="space-y-3">
        {missions.map((mission) => {
          const Icon = iconMap[mission.id] || Lightbulb;

          return (
            <div
              key={mission.id}
              className={`border-l-4 border-primary pr-2 pl-4 py-3 bg-white rounded-xl shadow-sm`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg bg-primary/10`}
                >
                  <Icon
                    className={`w-3 h-3 sm:w-5 sm:h-5 text-primary`}
                  />
                </div>

                <div className="flex-1">
                  <h4
                    className={`font-semibold text-sm mb-1 text-foreground`}
                  >
                    {mission.title}
                  </h4>
                  <p
                    className={`text-xs mb-2 text-muted-foreground`}
                  >
                    {mission.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-medium text-muted-foreground`}
                    >
                      Level {mission.level}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full bg-primary text-white`}
                    >
                      Poin +{mission.points}
                    </span>
                  </div>

                  <Button
                    className={`w-full mt-2 text-xs bg-primary/20 text-primary hover:bg-primary/30 cursor-pointer`}
                    variant="secondary"
                  >
                    Lakukan Aksi
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionList;
