import { Instagram, Mail } from "lucide-react";
import { developer } from "@/database/data";
import DeveloperCard from "@/components/about/DeveloperCard";
const About = () => {
  return (
    <section className="p-6 py-8 md:p-8 md:py-12">
      <h1 className="font-bold text-xl md:text-2xl border-b-2 border-black pb-2 mb-6">
        Tim Pengembang EcoSphere
      </h1>

      {/* Developer Cards */}
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {developer.map((dev, index) => (
          <DeveloperCard key={index} developer={dev} />
        ))}
      </div>

      <h2 className="font-bold text-xl md:text-2xl border-b-2 border-black pb-2 mb-6">
        Kontak & Feedback
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Section */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Hubungi Kami</h3>
          <div className="flex items-center gap-3 bg-[#3C83F6]/20 p-3 rounded-lg border-2 border-[#3C83F6] cursor-pointer hover:bg-[#3C83F6]/30 transition-colors">
            <Mail className="w-6 h-6 text-[#3C83F6]" />
            <p className="text-sm md:text-base">ecosphere.team@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 bg-[#FFD900]/30 p-3 rounded-lg border-2 border-[#FFA600] cursor-pointer hover:bg-[#FFD900]/40 transition-colors">
            <Instagram className="w-6 h-6 text-[#FFA600]" />
            <p className="text-sm md:text-base">@EcoSphere_ID</p>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Kirim Feedback</h3>
          <form className="space-y-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="border-b-2 border-slate-500 p-2 outline-none focus:border-primary transition-colors bg-transparent"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="pesan" className="text-sm font-medium">
                Pesan
              </label>
              <input
                type="text"
                id="pesan"
                className="border-b-2 border-slate-500 p-2 outline-none focus:border-primary transition-colors bg-transparent"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="bg-primary/20 text-primary font-semibold w-full rounded-md p-2 cursor-pointer hover:bg-primary/30 transition-colors border-2 border-primary"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
