import EducationHeader from "@/components/education/EducationHeader";
import EducationGuideList from "@/components/education/EducationGuideList";
import EcoTipsList from "@/components/education/EcoTipsList";

const Education = () => {
  const guides = [
    {
      id: 1,
      title: "Memulai Gaya Hidup Zero Waste",
      description:
        "Pelajari langkah-langkah sederhana untuk mengurangi sampah dalam kehidupan sehari-hari. Mulai dari dapur hingga kamar mandi.",
      image: "/Education/gambar-1.png",
    },
    {
      id: 2,
      title: "Menghemat Air di Rumah",
      description:
        "Tips praktis untuk mengurangi konsumsi air tanpa mengurangi kenyamanan. Hemat air, hemat biaya, selamatkan planet.",
      image: "/Education/gambar-2.png",
    },
    {
      id: 3,
      title: "Transportasi Ramah Lingkungan",
      description:
        "Alternatif transportasi yang mengurangi jejak karbon. Sepeda, transportasi umum, dan kendaraan listrik.",
      image: "/Education/gambar-3.png",
    },
  ];

  const tips = [
    {
      id: 1,
      title: "Ganti ke Lampu LED",
      description: "Hemat energi hingga 75% dan tahan 25x lebih lama",
    },
    {
      id: 2,
      title: "Bawa Tas Belanja Sendiri",
      description: "Satu tas kain = 1000 kantong plastik",
    },
    {
      id: 3,
      title: "Kompos Sampah Organik",
      description: "Ubah sisa makanan jadi pupuk alami",
    },
    {
      id: 4,
      title: "Gunakan Transportasi Umum",
      description: "Kurangi emisi CO2 hingga 4.6 ton per tahun",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
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
    </div>
  );
};

export default Education;
