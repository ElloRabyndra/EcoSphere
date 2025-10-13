import {
  CookingPot,
  Leaf,
  Lightbulb,
  RefreshCcw,
  Trash,
  Lock,
} from "lucide-react";
import { Link } from "react-router";

const ActionCard = ({ action, actionType, userLevel }) => {
  const categoryIcons = {
    hematEnergi: <Lightbulb className="w-5 h-5 text-primary" />,
    kurangiSampahPlastik: <Trash className="w-5 h-5 text-primary" />,
    peduliAlam: <Leaf className="w-5 h-5 text-primary" />,
    bijakDalamKonsumsi: <CookingPot className="w-5 h-5 text-primary" />,
    daurUlang: <RefreshCcw className="w-5 h-5 text-primary" />,
  };

  const isLocked = userLevel < action.req_level;

  // Jika locked, render div biasa tanpa Link
  if (isLocked) {
    return (
      <div
        className={`border-l-4 border-gray-300 pr-2 pl-4 py-3 bg-gray-100 rounded-xl shadow-sm min-h-[120px] opacity-60 cursor-pointer relative`}
      >
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg bg-gray-200`}>
            {categoryIcons[actionType]}
          </div>

          <div className="flex-1">
            <div>
              <h4
                className={`font-semibold text-sm lg:text-lg xl:text-base mb-1 text-gray-500 md:min-h-[40px] lg:min-h-[50px]`}
              >
                {action.title}
              </h4>
              <p
                className={`text-xs lg:text-sm mb-2 text-gray-400 md:min-h-[30px] lg:min-h-[40px]`}
              >
                {action.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span
                className={`text-xs lg:text-sm font-medium text-gray-400 flex items-center gap-1`}
              >
                <Lock className="w-3 h-3" />
                Level {action.req_level}
              </span>
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full bg-gray-400 text-white`}
              >
                Poin +{action.points}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Jika unlocked, render Link seperti biasa
  return (
    <Link
      to={`/aksi/${action.id}`}
      className={`border-l-4 border-primary pr-2 pl-4 py-3 bg-white rounded-xl shadow-sm min-h-[120px] hover:shadow-md transition-shadow`}
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
              Level {action.req_level}
            </span>
            <span
              className={`text-xs font-bold px-2 py-1 rounded-full bg-primary text-white`}
            >
              Poin +{action.points}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ActionCard;
