import img from "../assets/17469378008657394443.jpg";

export default function Ads() {
  return (
    <div className="w-full p-3 sm:p-5 cursor-pointer">
      <img
        src={img}
        alt="Advertisement"
        className="w-full h-auto rounded-lg border-2 border-dotted border-blue-600 object-cover"
      />
    </div>
  );
}
