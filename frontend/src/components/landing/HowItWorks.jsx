import StepCard from "./StepCard"
import { steps } from "@/database/data"

const HowItWorks = () => {
    return (
        <section className="pt-4 pb-8 md:w-130 md:ml-10">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-black py-2 border-b-2 border-black">Mudah dalam 3 Langkah</h2>
                <div className="grid grid-cols-3 md:grid-cols-1 gap-auto md:gap-8 items-center mt-5">
                    {/* Steps */}
                    {steps.map((step,index) => (
                        <StepCard key={index} steps={step} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default HowItWorks