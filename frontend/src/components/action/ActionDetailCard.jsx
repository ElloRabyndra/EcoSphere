import { CookingPot, Leaf, Lightbulb, RefreshCcw, Trash } from "lucide-react";
import { actionThemes } from "@/database/data";
const ActionDetailCard = ({ action, actionType }) => {
  const categoryIcons = {
    hematEnergi: <Lightbulb className="w-5 h-5 text-primary" />,
    kurangiSampahPlastik: <Trash className="w-5 h-5 text-primary" />,
    peduliAlam: <Leaf className="w-5 h-5 text-primary" />,
    bijakDalamKonsumsi: <CookingPot className="w-5 h-5 text-primary" />,
    daurUlang: <RefreshCcw className="w-5 h-5 text-primary" />,
  };
  return (
    <form
     className="rounded-xl overflow-hidden shadow-md bg-white">
      {/* Header */}
      <div
        className={`${actionThemes[actionType].backgroundColor} p-3 xl:p-5  space-y-1`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-sm md:text-lg lg:text-xl font-semibold mb-1 max-w-50 sm:max-w-full">
            {action.title}
          </h2>
          <span
            className={`text-xs md:text-sm font-bold py-1 px-2 rounded-full bg-primary text-white w-max`}
          >
            Poin +{action.point}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <h2
            className={`text-sm md:text-lg font-bold ${actionThemes[actionType].textColor}`}
          >
            {action.category}
          </h2>
          <span className="text-xs md:text-sm font-medium text-muted-foreground">
            Level {action.level}
          </span>
        </div>
      </div>
      {/* Konten */}
      <div className="p-3 xl:p-5  text-sm space-y-2">
        {/* Deskripsi */}
        <div>
          <h2 className="font-semibold md:text-lg">Deskripsi</h2>
          <p className="text-xs md:text-base text-muted-foreground">{action.description}</p>
        </div>
        {/* Dampak */}
        <div className={`md:text-lg p-3 xl:p-5  rounded-lg bg-[#32CD32]/20 space-y-2`}>
          <div className="flex items-center gap-2 ">
            {categoryIcons[actionType]}
            <h2 className={`text-primary font-semibold`}>
              Dampak Lingkungan
            </h2>
          </div>
          <p className="px-2 text-[11px] md:text-base text-muted-foreground">
            {action.eco_impact}
          </p>
        </div>
        {/* Button */}
        <div className="mt-6">
          <button className="bg-[#32CD32]/20 text-primary w-full py-1.5 rounded-lg cursor-pointer md:text-lg">
            Lakukan Aksi
          </button>
        </div>
      </div>
    </form>
  );
};

export default ActionDetailCard;
