import { Card } from "@/components/ui/card";
import { Flame } from "lucide-react";

const StatisticsCard = ({ stats }) => {
  const { totalActions, totalPoints, badges } = stats;

  return (
    <Card className="p-6 border border-gray-200 shadow-sm">
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
    </Card>
  );
};

export default StatisticsCard;