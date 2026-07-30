import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Deals from "./pages/Deals";
import Categories from "./pages/Categories";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";

import CategoryDetail from "./components/CategoryDetail";
import OfferPage from "./components/OfferPage";
import Offer from "./components/Offer";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />

        <Route path="/category/:slug" element={<CategoryDetail />} />
        <Route path="/offer/:id" element={<OfferPage />} />
         <Route path="/offer/:id" element={<Offer />} />
           <Route path="/offer/:id" element={<ProductCard />} />

    
      </Routes>
    </>
  );
}

export default App;
