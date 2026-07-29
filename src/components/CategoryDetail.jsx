import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import categoryMap from "./categoryMap";

export default function CategoryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    setLoading(true);
    setError(null);

    const realCategory = categoryMap[slug] || "electronics"; 

    fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(realCategory)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem("user"); 

    if (!isLoggedIn) {
      localStorage.setItem("redirectAfterLogin", window.location.pathname);
      navigate("/login");
      return;
    }

  
    console.log("Added to cart:", product);
  };

  if (loading) return <p className="text-center p-4">Loading...</p>;
  if (error) return <p className="text-center p-4 text-red-500">Error: {error}</p>;

  
  let filteredProducts = products
    .filter((p) => p.price <= maxPrice)
    .filter((p) => p.rating.rate >= minRating);

  
  if (sortOrder === "lowToHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">
        {slug.replace(/-/g, " ")}
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
  
        <div className="w-full md:w-64  border-r pr-4 mb-4 md:mb-0">
          <h3 className="font-bold text-lg mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-600">Up to ${maxPrice}</p>

          <h3 className="font-bold text-lg mt-4 mb-2">Rating</h3>
          {[4, 3, 2, 1].map((star) => (
            <label key={star} className="flex items-center gap-2 mb-1">
              <input
                type="radio"
                name="rating"
                checked={minRating === star}
                onChange={() => setMinRating(star)}
              />
              {star}★ & above
            </label>
          ))}
          <label className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              name="rating"
              checked={minRating === 0}
              onChange={() => setMinRating(0)}
            />
            All ratings
          </label>

          <h3 className="font-bold text-lg mt-4 mb-2">Sort By</h3>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>

          <button
            onClick={() => {
              setMaxPrice(1000);
              setMinRating(0);
              setSortOrder("default");
            }}
            className="mt-4 text-sm text-blue-600 underline"
          >
            Clear all filters
          </button>
        </div>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div key={p.id} className="border rounded-md p-2 flex flex-col">
                <img src={p.image} alt={p.title} className="w-full h-40 object-contain" />
                <p className="mt-2 text-sm line-clamp-2">{p.title}</p>
                <p className="font-bold">${p.price}</p>
                <p className="text-sm text-gray-500">{p.rating.rate}★ ({p.rating.count})</p>
                <button
                  onClick={() => handleAddToCart(p)}
                  className="mt-auto bg-cyan-900 text-white py-1 rounded hover:bg-cyan-700 transition p-2"
                >
                  Add to cart
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products match these filters
            </p>
          )}
        </div>
      </div>
    </div>
  );
}