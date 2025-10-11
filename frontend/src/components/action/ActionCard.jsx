import { CookingPot, Leaf, Lightbulb, RefreshCcw, Trash } from "lucide-react";
import { Link } from "react-router";

const ActionCard = ({ action, actionType }) => {
  const categoryIcons = {
    hematEnergi: <Lightbulb className="w-5 h-5 text-primary" />,
    kurangiSampahPlastik: <Trash className="w-5 h-5 text-primary" />,
    peduliAlam: <Leaf className="w-5 h-5 text-primary" />,
    bijakDalamKonsumsi: <CookingPot className="w-5 h-5 text-primary" />,
    daurUlang: <RefreshCcw className="w-5 h-5 text-primary" />,
  };
  return (
    <Link
      to={`/aksi/${action.id}`}
      className={`border-l-4 border-primary pr-2 pl-4 py-3 bg-white rounded-xl shadow-sm min-h-[120px]`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg bg-primary/10`}>
          {categoryIcons[actionType]}
        </div>

        <div className="flex-1">
          <div>
            <h4
              className={`font-semibold text-sm lg:text-lg xl:text-base mb-1 text-foreground md:min-h-[40px] lg:min-h-[50px]`}
            >
              {action.title}
            </h4>
            <p
              className={`text-xs lg:text-sm mb-2 text-muted-foreground md:min-h-[30px] lg:min-h-[40px]`}
            >
              {action.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span
              className={`text-xs lg:text-sm font-medium text-muted-foreground`}
            >
              Level {action.level}
            </span>
            <span
              className={`text-xs font-bold px-2 py-1 rounded-full bg-primary text-white`}
            >
              Poin +{action.point}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ActionCard;
