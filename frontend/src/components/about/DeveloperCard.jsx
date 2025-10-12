const DeveloperCard = ({ developer }) => {
  const {
    name,
    role,
    quote,
    hope,
    cardBg,
    cardColor,
    hopeBg,
    hopeColor,
    image,
  } = developer;

  return (
    <div className="relative bg-white">
      <div
        className={`${cardBg} rounded-2xl p-5 space-y-4 border-2`}
        style={{ borderColor: cardColor }}
      >
        {/* Header dengan Foto dan Info */}
        <div className="flex items-start gap-4">
          {/* Profile Picture */}
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 bg-white border-2"
            style={{ borderColor: cardColor }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="12" fill="%239ca3af"%3EImage%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Name and Role */}
          <div className="flex-1">
            <h3
              className={`font-bold text-base text-[${cardColor}] md:text-lg mb-1`}
            >
              {name}
            </h3>
            <div
              className={`inline-block ${cardBg} text-[${cardColor}] text-xs md:text-sm font-semibold px-3 py-1 rounded-full`}
            >
              {role}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div>
          <h4 className={`font-bold text-sm text-[${cardColor}] mb-2`}>
            Quote
          </h4>
          <p className="text-xs md:text-sm text-gray-700 italic">{quote}</p>
        </div>

        {/* Hope Section */}
        <div className={`rounded-xl`}>
          <h4 className={`font-bold text-sm text-[${cardColor}] mb-2`}>
            Harapan untuk EcoSphere
          </h4>
          <p className={`text-xs md:text-sm`}>{hope}</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
