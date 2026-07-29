import { MdKeyboardArrowRight } from "react-icons/md";

export default function DealCard() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Deals
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center mt-3 text-sm md:text-base text-gray-600">
          <span>Target</span>
          <MdKeyboardArrowRight className="mx-1 text-lg" />
          <span className="font-medium text-black">Deals</span>
        </div>

      </div>
    </section>
  );
}