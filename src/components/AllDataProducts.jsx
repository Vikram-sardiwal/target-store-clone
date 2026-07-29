import AllData from "./AllData";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllDataProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-8">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0F3040] text-white rounded-2xl py-5 mb-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Shop More Deals
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <p className="text-2xl font-semibold text-gray-600">
              Loading Products...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {product.map((item) => (
              <AllData
                key={item.id}
                image={item.thumbnail}
                title={item.title}
                price={item.price}
                rating={item.rating}
                discount={item.discountPercentage}
                brand={item.brand}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}