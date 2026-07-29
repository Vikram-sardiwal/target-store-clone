import { MdKeyboardArrowRight } from "react-icons/md";
export default function DealCard() {
  return (
    <>
      <div>
        <div className=" justify-center items-center ">
          <h1 className=" ml-[600px] font-bold text-4xl">Deals</h1>
          <div className="flex justify-center items-center">
            <span >Target</span>
            <MdKeyboardArrowRight className="text-xl" />
            <span >Deals</span>
          </div>
        </div>
      </div>
    </>
  );
}
