import { Card } from "@/components/ui/card";

const ProfileStats = ({ stats }) => {
  const { totalActions, totalPoints, badges } = stats;

  const statCards = [
    {
      id: 1,
      label: "Total Aksi",
      value: `${totalActions} Aksi`,
      bgColor: "bg-[#3C83F6]/20",
      textColor: "text-blue-600",
      borderColor: "border-[#3C83F6]",
    },
    {
      id: 2,
      label: "Total Poin",
      value: `${totalPoints} Poin`,
      bgColor: "bg-[#FFD900]/30",
      textColor: "text-yellow-600",
      borderColor: "border-[#FFA600]",
    },
    {
      id: 3,
      label: "Badge",
      value: `${badges.current} / ${badges.total}`,
      bgColor: "bg-[#DD0026]/20",
      textColor: "text-[#DD0026]",
      borderColor: "border-[#DD0026]",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold text-foreground mb-4 border-b-2 border-black pb-2">
        Statistik Pencapaian
      </h2>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {statCards.map((stat) => (
          <Card
            key={stat.id}
            className={`${stat.bgColor} ${stat.borderColor} border-3 p-4 md:p-6 text-center gap-0`}
          >
            <div className={`${stat.textColor} font-bold text-sm md:text-2xl mb-2`}>
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground font-medium">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfileStats;