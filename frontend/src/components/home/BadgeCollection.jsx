import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight } from "lucide-react";

const BadgeCollection = () => {
  // Mock badges dengan warna berbeda
  const badges = [
    { id: 1, color: "bg-red-400", earned: true },
    { id: 2, color: "bg-purple-400", earned: true },
    { id: 3, color: "bg-yellow-400", earned: true },
    { id: 4, color: "bg-blue-400", earned: true },
    { id: 5, color: "bg-cyan-400", earned: true },
    { id: 6, color: "bg-teal-400", earned: true },
  ];

  return (
    <Card className="p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
        <h3 className="text-lg md:text-2xl font-bold text-foreground">Koleksi Badge</h3>
        <Trophy className="w-5 h-5 text-primary" />
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-6 gap-3 mb-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`aspect-square rounded-full ${badge.color} ${
              badge.earned ? 'opacity-100' : 'opacity-30'
            } transition-opacity`}
          />
        ))}
      </div>

      {/* Desktop Only Button */}
      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-white hidden md:flex items-center justify-center gap-2 cursor-pointer"
      >
        Mulai Aksi
        <ArrowRight className="w-4 h-4" />
      </Button>
    </Card>
  );
};

export default BadgeCollection;