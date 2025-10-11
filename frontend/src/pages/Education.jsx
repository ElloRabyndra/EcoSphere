import EducationHeader from "@/components/education/EducationHeader";
import EducationGuideList from "@/components/education/EducationGuideList";
import EcoTipsList from "@/components/education/EcoTipsList";
import { guides, tips } from "@/database/data";
const Education = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Vector - Desktop Only */}
      <div className="hidden lg:block absolute top-0 left-0 scale-130  bottom-0">
        <img
          src="/Education/vector-education.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 p-4 pt-8 lg:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            <EducationHeader />
            <EducationGuideList guides={guides} />
            <EcoTipsList tips={tips} />
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <EducationHeader />
              <EducationGuideList guides={guides} />
            </div>

            {/* Right Column */}
            <div className="space-y-6 xl:pl-24">
              <EcoTipsList tips={tips} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Education;
