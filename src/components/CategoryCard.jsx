import { Link } from "react-router-dom";

export default function CategoryCard({ image, title, slug }) {
  return (
    <Link to={`/category/${slug}`}>
      <div className="flex flex-col items-center cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 rounded-full object-cover"
        />

        <p className="mt-2 text-center font-bold text-base w-24">
          {title}
        </p>
      </div>
    </Link>
  );
}