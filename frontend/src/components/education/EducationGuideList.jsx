import { Card } from "@/components/ui/card";

const EducationGuideList = ({ guides }) => {
  return (
    <div className="space-y-4">
      {guides.map((guide) => (
        <div
          key={guide.id}
          className="bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer rounded-xl"
        >
          <div className="flex gap-4">
            {/* Image */}
            <div className="w-24 h-full md:w-28 flex-shrink-0 overflow-hidden bg-gray-100">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="12" fill="%239ca3af"%3EImage%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-3">
              <h3 className="font-bold text-foreground text-sm md:text-base mb-2">
                {guide.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">
                {guide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationGuideList;