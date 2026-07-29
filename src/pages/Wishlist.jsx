import { useState, useEffect } from "react";
import { FaHeart, FaStar, FaTrash } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWishlist();
  }, []);

  async function getWishlist() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setWishlist(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const removeItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-72">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
          ❤️ My Wishlist
        </h1>

        <p className="text-gray-600 font-medium">
          {wishlist.length} Items
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Favourite */}
            <div className="flex justify-end p-3">
              <FaHeart className="text-red-500 text-xl cursor-pointer hover:scale-110 transition" />
            </div>

            {/* Image */}
            <div className="px-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="w-full h-44 sm:h-48 md:h-52 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
              <h2 className="font-semibold text-base sm:text-lg line-clamp-2">
                {item.title}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <FaStar className="text-yellow-400" />
                <span>{item.rating}</span>
              </div>

              <p className="text-2xl font-bold text-red-600 mt-3">
                ${item.price}
              </p>
            </div>

            {/* Buttons */}
            <div className="p-4 pt-0 space-y-3">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition">
                <FiShoppingCart />
                Add to Cart
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="w-full border border-red-600 text-red-600 hover:bg-red-50 py-2 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <FaTrash />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}