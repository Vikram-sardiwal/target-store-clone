import img from "../assets/GUEST_90784616-2ea3-46b8-b7a7-94f421042c9d.webp";
import imgeone from "../assets/GUEST_61fe88ac-d2cd-46b5-8571-7a30926aaae5.webp";
import imgtwo from "../assets/GUEST_6b2c6c49-367d-4a5d-932c-18a92de5647f.webp";
import imgthree from "../assets/GUEST_c5374b57-8b50-41bc-a7ee-c4dfac200685.webp";

const offers = [
  {
    id: 1,
    image: img,
    discount: "Up to 50% Off",
  },
  {
    id: 2,
    image: imgeone,
    discount: "Up to 25% Off",
  },
  {
    id: 3,
    image: imgtwo,
    discount: "Up to 25% Off",
  },
  {
    id: 4,
    image: imgthree,
    discount: "Up to 45% Off",
  },
];

export default function Offer() {
  return (
    <section className="bg-[rgb(244,229,213)] py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <img
              src={offer.image}
              alt={offer.discount}
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 hover:scale-105"
            />

            <div className="absolute top-4 left-4">
              <h2 className="text-red-600 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                {offer.discount.split(" ").slice(0, 2).join(" ")}
                <br />
                {offer.discount.split(" ").slice(2).join(" ")}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}