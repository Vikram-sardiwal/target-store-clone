import img from "../assets/GUEST_6ac9f097-40b7-4c7f-a83c-f8afdf92db09.webp";

export default function Hero() {
  return (
    <>
      <div className="relative">
        <img src={img} className="object-cover w-full " />
        <div className="absolute inset-0 flex  items-center justify-center font-bold underline cursor-pointer">
          {/* <h1 className="text-4xl text-teal-800">Celebrate Together</h1> */}
          
        </div>
      </div>
    </>
  );
}
