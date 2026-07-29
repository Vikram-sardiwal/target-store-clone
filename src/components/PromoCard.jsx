export default function PromoCard({
  image,
  title,
  desc,
  bgColor,
  textColor,
}) {
  return (
    <div className="h-full rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-56 sm:h-64 md:h-72 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
        />

        <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg">
          New
        </span>
      </div>

      {/* Content */}
      <div
        className={`${bgColor} ${textColor} flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-center`}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
          {title}
        </h2>

        <p className="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}