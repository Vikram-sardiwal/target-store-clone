export default function AllData({
  image,
  title,
  price,
  rating,
  discount,
  brand,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">

      {/* Image */}
      <div className="bg-gray-100 p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-44 md:h-48 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-base sm:text-lg font-semibold line-clamp-2 min-h-[52px]">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Brand: <span className="font-medium">{brand}</span>
        </p>

        <p className="text-2xl font-bold text-red-600 mt-2">
          ${price}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-yellow-500 font-semibold">
            ⭐ {rating}
          </span>

          <span className="text-green-600 font-semibold">
            {discount}% OFF
          </span>
        </div>

        <button className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}