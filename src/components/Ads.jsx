import img from "../assets/17469378008657394443.jpg";

export default function Ads() {
  return (
    <section className="w-full px-3 sm:px-5 md:px-8 lg:px-10 py-4">
      <div className="max-w-7xl mx-auto">
        <img
          src={img}
          alt="Advertisement"
          className="w-full h-auto rounded-xl border-2 border-dotted border-blue-600 object-cover shadow-md hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
        />
      </div>
    </section>
  );
}