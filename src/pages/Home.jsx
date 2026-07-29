import Hero from "../components/Hero";
import ProductCart from "../components/ProductCard";

import Banner from "../components/Banner";
import Offer from "../components/Offer";
import Ads from "../components/Ads";
import Images from "../components/Images";
import OfferSection from "../components/Offersection";
import PromoSectionOne from "../components/PromoSectionOne";
import FeaturedCategories from "../components/FeaturedCategories";
import ShowcaseSection from "../components/ShowcaseSection";
import Footer from "../components/Footer";
import AllDataProducts from "../components/AllDataProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCart />
      <AllDataProducts />
      <Banner />
      <Offer />
      <Ads />
      <Images />
      <OfferSection />
      <PromoSectionOne />
      <FeaturedCategories />
      <ShowcaseSection />
      <Footer />
    </>
  );
}
