const StepCard = ({ steps }) => {
    const {
        number,
        title,
        description
    } = steps

    return (
        <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="flex-shrink-0 ">
                <div className={`flex items-center justify-center w-12 h-12 md:w-15 md:h-15 text-2xl md:text-4xl rounded-full font-extrabold text-white ${
                number === 1 ? 'bg-[#32CD32]' : number === 2 ? 'bg-[#3C83F6]' : 'bg-[#FFA600]'
                }`}>
                {steps.number}
                </div>
            </div>
            <div className="flex flex-col w-22 md:w-60 text-center md:text-start">
                <h3 className="text-sm md:text-xl font-semibold text-[#228C22]">{title}</h3>
                <p className="text-xs md:text-lg text-[#6E6E6E]">{description}</p>
            </div>
        </div>
    )
}
export default StepCard