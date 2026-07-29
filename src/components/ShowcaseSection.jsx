import ImageSection from "./ImageSection";
import img from "../assets/GUEST_6805286c-7428-40ce-bfe0-c8c6a98e0f3e.webp";
import img2 from "../assets/10417394801954845552.jpg";

export default function ShowcaseSection() {
  const data = [
    {
      id: 1,
      image: img,
    },
    {
      id: 2,
      image: img2,
    },
  ];

  return (
    <section className="bg-white">

      {/* Images */}
      <div className="space-y-6">
        {data.map((item) => (
          <ImageSection
            key={item.id}
            image={item.image}
          />
        ))}
      </div>

      {/* Newsletter */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left">
            Get top deals, latest trends, and more.
          </h1>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full sm:w-80 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
          />

          <button className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg transition duration-300">
            Sign Up
          </button>

          <span className="text-sm underline cursor-pointer text-center">
            Privacy Policy • Terms
          </span>

        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
          *See details. Restrictions and terms apply. Pricing, promotions,
          and availability may vary by location and at Target.com.
        </p>
      </div>

    </section>
  );
}