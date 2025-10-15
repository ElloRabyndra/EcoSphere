import CallToAction from "@/components/landing/CallToAction";
import HowItWorks from "@/components/landing/HowItWorks";
import Hero from "@/components/landing/Hero";

const Landing = () => {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <div className="xl:flex flex-grow">
        <Hero />
        <HowItWorks />
      </div>
      <CallToAction />
    </section>
  );
};
export default Landing;