import CallToAction from "@/components/landing/CallToAction";
import HowItWorks from "@/components/landing/HowItWorks";
import Hero from "@/components/landing/Hero";
import { OrganicBlobBackground } from "@/components/OrganicBlobBackground";

const Landing = () => {
  return (
    <section className="w-full">
      <OrganicBlobBackground />
      <div className="xl:flex">
        <Hero />
        <HowItWorks />
      </div>
      <CallToAction />
    </section>
  );
};
export default Landing;
