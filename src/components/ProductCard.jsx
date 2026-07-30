import { Link } from "react-router-dom";

import img from "../assets/GUEST_1d07ed82-2a33-40d8-9145-5517188b0cc2.webp";
import imgone from "../assetsOne/GUEST_4d87e3c7-9a35-4e15-b7a5-6a8c35072a95.webp";
import imgtwo from "../assetsthree/GUEST_207bafc9-ffeb-48ce-bd53-eff8bb417cd9.avif";

const deals = [
  {
    id: 1,
    image: img,
    title: "Women's clothing & swimsuits*",
    discount: "Up to 40% OFF",
    link: "/offer/1",
  },
  {
    id: 2,
    image: imgone,
    title: "The fall collection",
    discount: "Up to 40% OFF",
    link: "/offer/2",
  },
  {
    id: 3,
    image: imgtwo,
    title: "30percent toddler Clothing",
    discount: "Up to 40% OFF",
    link: "/offer/3",
  },
];

export default function ProductCard() {
  return (
    <section className="bg-[rgb(244,229,213)] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
        {deals.map((deal) => (
          <Link key={deal.id} to={deal.link}>
            <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  loading="lazy"
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-white rounded-lg px-3 py-2 shadow">
                  <p className="text-orange-700 font-bold text-sm sm:text-lg md:text-xl">
                    {deal.discount}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex items-center justify-center p-4 sm:p-5">
                <h2 className="text-center font-bold text-base sm:text-lg md:text-xl leading-snug group-hover:underline">
                  {deal.title}
                </h2>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}