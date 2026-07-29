import img from "../assets/GUEST_6b2f4da5-dc88-43e2-af9f-903a05586cf8.webp";
import imgone from "../assets/GUEST_44dd7e6f-a1ad-48fc-91f5-9edf872b3e5d.webp";

export default function Images() {
  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src={imgone}
            alt="Military Discount"
            loading="lazy"
            className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
              20% OFF
            </h1>

            <p className="mt-3 text-sm sm:text-lg md:text-xl text-white font-semibold max-w-xl leading-relaxed">
              A purchase for military members, veterans & family members.
            </p>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-white">
              Valid thru 7/4. Terms & conditions apply.
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src={img}
            alt="Offer Banner"
            loading="lazy"
            className="w-full h-auto object-contain "
          />
        </div>
      </div>
    </section>
  );
}
