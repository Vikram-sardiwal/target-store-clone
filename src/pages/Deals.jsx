import DealCard from "../components/DealCard";
import moduleName from "../components/DealsHeader";
import DealSign from "../components/DealSign";
import ShopByCategory from "../components/ShopByCategory";
import Ads from "../components/Ads";
import AllDataProducts from "../components/AllDataProducts";
import Footer from "../components/Footer";

export default function Deals() {
  return (
    <>
      <DealCard />
      <DealSign />
      <ShopByCategory />
      <Ads />

      <Footer />
    </>
  );
}
