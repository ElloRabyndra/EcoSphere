const ImpactCard = ({ impacts }) => {
    const {
        title,
        subtitle,
        image
    } = impacts
    
    return (
        <div className="relative h-30 w-23 md:w-60 flex item-center justify-center rounded-3xl overflow-hidden duration-300 group">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-40  md:w-60  h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-white/60 transition-colors duration-300" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center text-center text-black">
                <h3 className="text-sm md:text-2xl font-extrabold">{title}</h3>
                <p className="text-xs md:text-base text-[#636363] md:font-medium">
                {subtitle}
                </p>
            </div>
        </div>
    )
}
export default ImpactCard