"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const MobileNavbar = () => {
  const drawerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const toggleProducts = () => setShowProducts(!showProducts);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="block sm:hidden w-full">
      {/* Hamburger */}
      <div className="flex justify-end p-4 bg-[#1D3C6A] text-white">
        <button onClick={handleToggle}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-in Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-[260px] bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={handleToggle}>
            <X size={24} className="text-[#1D3C6A]" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-6 space-y-3 text-[#00255d]">
          <Link
            href="/"
            onClick={handleToggle}
            className="px-4 py-2 rounded-md hover:bg-[#1D3C6A] hover:text-white transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={handleToggle}
            className="px-4 py-2 rounded-md hover:bg-[#1D3C6A] hover:text-white transition-all duration-200"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={handleToggle}
            className="px-4 py-2 rounded-md hover:bg-[#1D3C6A] hover:text-white transition-all duration-200"
          >
            Contact Us
          </Link>

          {/* Products with dropdown */}
          <button
            onClick={toggleProducts}
            className="flex justify-between items-center px-4 py-2 rounded-md hover:bg-[#1D3C6A] hover:text-white transition-all duration-200"
          >
            <span>Products</span>
            {showProducts ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {showProducts && (
            <div className="ml-4 flex flex-col space-y-2 transition-all duration-300">
              <Link
                href="/products/himalayan-pink-salt"
                onClick={handleToggle}
                className="px-3 py-1 rounded hover:bg-[#E5F0FF] text-sm"
              >
                Himalayan Pink Salt
              </Link>
              <Link
                href="/products/black-salt"
                onClick={handleToggle}
                className="px-3 py-1 rounded hover:bg-[#E5F0FF] text-sm"
              >
                Black Salt
              </Link>
              <Link
                href="/products/pickling-salt"
                onClick={handleToggle}
                className="px-3 py-1 rounded hover:bg-[#E5F0FF] text-sm"
              >
                Pickling Salt
              </Link>
              <Link
                href="/products/sea-salt"
                onClick={handleToggle}
                className="px-3 py-1 rounded hover:bg-[#E5F0FF] text-sm"
              >
                Sea Salt
              </Link>
              <Link
                href="/products/edible-salt"
                onClick={handleToggle}
                className="px-3 py-1 rounded hover:bg-[#E5F0FF] text-sm"
              >
                Edible Salt
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
