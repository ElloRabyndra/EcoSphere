import { Card } from "@/components/ui/card";
import { Recycle } from "lucide-react";

const EcoTipsList = ({ tips }) => {
  return (
    <div className="p-6">
      <h2 className="md:text-xl lg:text-2xl font-bold text-foreground mb-6 border-b-2 border-black pb-2">
        Tips Cepat Ramah Lingkungan
      </h2>

      <div className="space-y-4">
        {tips.map((tip) => (
          <div key={tip.id} className="flex gap-4 border bg-white rounded-xl p-3 lg:p-4 cursor-pointer">
            {/* Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
              <Recycle className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm lg:text-lg mb-1">
                {tip.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                {tip.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoTipsList;