import OfferCard from "./OfferCard";

import img1 from "../assets/GUEST_20186c08-5564-4cc7-bedc-1e2003a17c99.webp";
import img2 from "../assets/GUEST_860e341d-4a6c-4390-b2bf-3049bd6c8188.webp";
import img3 from "../assets/GUEST_57b146ba-772f-4853-ae11-3fe6c6287958.webp";
import img4 from "../assets/GUEST_6d690189-b148-4604-9e09-290604fe51f4.webp";
import img5 from "../assets/GUEST_27d66a2e-d82a-4441-9148-00733cebf753.webp";
import img6 from "../assets/GUEST_e6ad5a09-1524-4c8c-be57-7cd813a3db85.webp";

const offers = [
  {
    id: 1,
    image: img1,
    title: "Latest drop from KBB",
    desc: "Trend-forward elevated essentials.",
    bgColor: "bg-[#F5E7D5]",
    textColor: "text-black",
    link: "/offer/1",
  },
  {
    id: 2,
    image: img2,
    title: "Hollister Collection",
    desc: "Bedding & loungewear.",
    bgColor: "bg-[#042B45]",
    textColor: "text-white",
    link: "/offer/2",
  },
  {
    id: 3,
    image: img3,
    title: "KBB",
    desc: "Trend-forward elevated essentials.",
    bgColor: "bg-[#F5E7D5]",
    textColor: "text-black",
    link: "/offer/3",
  },
  {
    id: 4,
    image: img4,
    title: "Hollister",
    desc: "Bedding & loungewear.",
    bgColor: "bg-[#042B45]",
    textColor: "text-white",
    link: "/offer/4",
  },
  {
    id: 5,
    image: img5,
    title: "Latest Drop",
    desc: "Trend-forward elevated essentials.",
    bgColor: "bg-[#F5E7D5]",
    textColor: "text-black",
    link: "/offer/5",
  },
  {
    id: 6,
    image: img6,
    title: "Latest KBB",
    desc: "Trend-forward elevated essentials.",
    bgColor: "bg-[#F5E7D5]",
    textColor: "text-black",
    link: "/offer/6",
  },
];

export default function OfferSection() {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {offers.map((item) => (
          <OfferCard
            key={item.id}
            image={item.image}
            title={item.title}
            desc={item.desc}
            bgColor={item.bgColor}
            textColor={item.textColor}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
