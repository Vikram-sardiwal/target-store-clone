export default function OfferCard({
  image,
  title,
  desc,
  bgColor,
  textColor,
}) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">

      
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
        />

        <span className="absolute top-0 left-0 bg-black text-white text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-5 sm:py-2 rounded-br-xl">
          New
        </span>
      </div>

    
      <div className={`${bgColor} ${textColor} p-4 sm:p-5 md:p-6`}>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
          {title}
        </h2>

        <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg">
          {desc}
        </p>
      </div>

    </div>
  );
}