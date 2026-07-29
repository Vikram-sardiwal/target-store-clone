import PromoCard from "./PromoCard";
import img1 from "../assetsOne/GUEST_f2db6b55-06a7-4035-8d87-5042aaf25f36.webp";
import img2 from "../assets/GUEST_177fbda8-ae9c-4712-8d70-ee1fd6367445.webp";

const offers = [
  {
    id: 1,
    image: img1,
    title: "Latest drop",
    desc: "Trend-forward elevated essentials.",
    bgColor: "bg-[#F5E7D5]",
    textColor: "text-black",
  },
  {
    id: 2,
    image: img2,
    title: "School must-haves for 1st day ",
    desc: "Everything you need for the school season.",
    bgColor: "bg-[#042B45]",
    textColor: "text-white",
  },
];

export default function PromoSectionOne() {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {offers.map((item) => (
            <div key={item.id} className="h-full">
              <PromoCard
                image={item.image}
                title={item.title}
                desc={item.desc}
                bgColor={item.bgColor}
                textColor={item.textColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}