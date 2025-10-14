import { Link } from "react-router";

const CallToAction = () => {
  return (
    <section className="py-8 bg-[#32CD32]/20 lg:py-6">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-extrabold text-[#32CD32] mb-3 lg:mb-1 lg:text-3xl flex flex-col">
          Siapkah Kamu Menjadi{" "}
          <span className="text-[#228C22] ">Eco Hero?</span>
        </h2>
        <p className="text-base lg:text-xl lg:px-20 text-[#6E6E6E] font-medium mb-3 lg:mb-2 leading-relaxed">
          Bergabung dengan gerakan global untuk menyelamatkan bumi. Mulai hari
          ini, mulai dari dirimu!
        </p>
        <div className="flex flex-row gap-5 lg:gap-25 justify-center mb-3 lg:mb-0">
          <Link to="/register">
            <button className="cursor-pointer bg-[#228C22] hover:bg-[#228C22]/80 px-5 py-3 rounded-3xl text-xs lg:text-base lg:rounded-4xl lg:py-3 lg:px-20 text-white font-bold transition">
              Gabung Sekarang
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
