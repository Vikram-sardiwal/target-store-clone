import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/bullseye-tm.svg";

import { FiSearch, FiShoppingCart, FiLogIn, FiMenu, FiX } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoVolumeMediumOutline } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/">
          <img
            src={img}
            alt="Target Logo"
            className="w-14 h-14 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="hover:text-red-400">
            Home
          </Link>

          <Link to="/product" className="hover:text-red-400">
            Product
          </Link>

          <Link to="/deals" className="hover:text-red-400">
            Deals
          </Link>

          <Link to="/categories" className="hover:text-red-400">
            Categories
          </Link>

          <Link to="/wishlist" className="hover:text-red-400">
            Wishlist
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-2 w-72 lg:w-96">
          <FiSearch className="text-gray-500 text-xl" />

          <input
            type="text"
            placeholder="What can we help you find?"
            className="flex-1 px-2 outline-none text-black"
          />

          <IoVolumeMediumOutline className="text-gray-500 text-xl cursor-pointer" />
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/cart"
            className="flex items-center gap-2 hover:text-red-400"
          >
            <FiShoppingCart className="text-2xl" />
            <span>Cart</span>
          </Link>

          <Link to="/checkout" className="hover:text-red-400">
            Checkout
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-2 hover:text-red-400"
          >
            <FaUser className="text-xl" />
            <span>Profile</span>
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 hover:text-red-400"
          >
            <FiLogIn className="text-xl" />
            <span>Login</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center bg-white rounded-full px-3 py-2">
          <FiSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-2 outline-none text-black"
          />

          <IoVolumeMediumOutline className="text-gray-500 text-xl" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-700 flex flex-col px-4 py-4 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/product" onClick={() => setMenuOpen(false)}>
            Product
          </Link>

          <Link to="/deals" onClick={() => setMenuOpen(false)}>
            Deals
          </Link>

          <Link to="/categories" onClick={() => setMenuOpen(false)}>
            Categories
          </Link>

          <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
            Wishlist
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <FiShoppingCart />
            Cart
          </Link>

          <Link to="/checkout" onClick={() => setMenuOpen(false)}>
            Checkout
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <FaUser />
            Profile
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <FiLogIn />
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
