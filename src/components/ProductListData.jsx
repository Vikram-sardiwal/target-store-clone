import { Link } from "react-router-dom";

export default function ProductListData({ image, title, slug }) {
  return (
    <Link to={`/category/${slug}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer">

        {/* Image */}
        <div className="bg-gray-100 p-3">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-32 sm:h-36 md:h-40 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Title */}
        <div className="flex-1 flex items-center justify-center p-3">
          <h3 className="text-center text-sm sm:text-base font-semibold leading-snug">
            {title}
          </h3>
        </div>

      </div>
    </Link>
  );
}