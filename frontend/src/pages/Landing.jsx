import CallToAction from "@/components/landing/CallToAction"
import HowItWorks from "@/components/landing/HowItWorks"
import Hero from "@/components/landing/Hero"

const Landing = () => {
    return (
        <section className="w-full">
            <div className="lg:flex">
                <Hero />
                <HowItWorks/>
            </div>
            <CallToAction />
        </section>
    )
}
export default Landing