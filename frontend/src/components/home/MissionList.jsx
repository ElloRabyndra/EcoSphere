import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Lightbulb, Droplet, Sprout, Trash, Leaf, CookingPot, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const MissionList = ({ user, missions }) => {
  const navigate = useNavigate();
  const [randomMissions, setRandomMissions] = useState([]);


  // Mengambil 3 action random berbeda
  useEffect(() => {
    // Filter misi sesuai level user
    const availableMissions = missions.filter(
      (mission) => mission.req_level <= user.level
    );

    // Acak urutan array
    const shuffled = availableMissions.sort(() => 0.5 - Math.random());

    // Ambil 3 misi pertama dari hasil acakan
    const selected = shuffled.slice(0, 3);

    setRandomMissions(selected);
  },[user]);

  const categoryIcons = {
    hematenergi: <Lightbulb className="w-5 h-5 text-primary" />,
    kurangisampahplastik: <Trash className="w-5 h-5 text-primary" />,
    peduliAlam: <Leaf className="w-5 h-5 text-primary" />,
    bijakdalamkonsumsi: <CookingPot className="w-5 h-5 text-primary" />,
    daurulang: <RefreshCcw className="w-5 h-5 text-primary" />,
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
        {randomMissions.map((mission) => {
          const Icon = categoryIcons[mission.category] || Lightbulb;

          return (
            <div
              key={mission.id}
              className={`border-l-4 border-primary pr-2 pl-4 py-3 bg-white rounded-xl shadow-sm`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-primary/10`}>
                  <Icon className={`w-3 h-3 sm:w-5 sm:h-5 text-primary`} />
                </div>

                <div className="flex-1">
                  <h4 className={`font-semibold text-sm mb-1 text-foreground`}>
                    {mission.title}
                  </h4>
                  <p className={`text-xs mb-2 text-muted-foreground`}>
                    {mission.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-medium text-muted-foreground`}
                    >
                      Level {mission.req_level}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full bg-primary text-white`}
                    >
                      Poin +{mission.points}
                    </span>
                  </div>

                  <Button
                    onClick={() => navigate(`/aksi/${mission.id}`)}
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
