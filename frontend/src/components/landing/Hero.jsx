import { impacts } from "@/database/data";
import ImpactCard from "./ImpactCard";

const Hero = () => {
  return (
    <section className="xl:w-200">
      {/* Hero */}
      <div className="bg-[#32CD32]/20 pt-8 md:pt-10 xl:w-200 xl:rounded-br-full relative -mb-17">
        <div className="max-w-7xl md:w-full mx-auto flex flex-row px-6 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:gap-15 items-center mb-18">
            {/* Content */}
            <div className="space-y-0 md:space-y-2 w-full">
              <h2 className="text-base md:text-3xl font-extrabold text-[#228C22]">
                Aksi Kecil, Dampak Besar
              </h2>
              <h4 className="text-xs md:text-lg font-semibold text-black">
                Kenalin aku Sphero!
              </h4>
              <p className="text-xs md:text-base text-[#636363]  md:w-120 leading-relaxed">
                EcoSphere adalah platform yang mengajakmu beraksi nyata menjaga
                lingkungan. Mulai kumpulkan poin, naikkan level, dan raih
                penghargaan atas untuk bumi yang lebih hijau!
              </p>
            </div>

            {/* Character */}
            <div className="flex justify-center md:px-18 ">
              <img
                src="/Landing/Sphero-Landing.png"
                alt="Sphero"
                className="w-auto h-34 md:h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* impact */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 mt-4">
        <div className="flex flex-row gap-3 md:gap-5">
          {impacts.map((impact, index) => (
            <ImpactCard key={index} impacts={impact} />
          ))}
        </div>

        <div className="mt-5 rounded-md px-2 mb-0">
          <p className="text-start text-[#636363] text-sm md:text-base">
            Setiap aksi kecil yang kamu lakukan hari ini akan menciptakan dampak
            besar untuk masa depan. EcoSphere membuatnya mudah dan menyenangkan!
          </p>
          <p className="text-start text-[#228C22] font-semibold mt-2 mb-0 italic">
            "Perubahan dimulai dari dirimu. Mulai hari ini, mulai dari hal
            kecil."
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;