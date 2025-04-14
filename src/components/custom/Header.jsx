"use client";
import { SearchIcon } from "lucide-react";
import Image from "next/image"; // Ensure Image is imported
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full h-30 items-center gap-3 p-4 bg-[#1D3C6A] text-white justify-center sm:justify-between">
      <div className="sm:ml-4 ">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80}
          height={40}
          className="w-[30px] md:w-[80px] "
        />
      </div>

      <nav className="  flex justify-center sm:justify-start items-center whitespace-nowrap gap-6 sm:max-w-[500px] w-full">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/about" className="hover:underline">
          About Us
        </Link>

        <Link href="/contact" className="hover:underline">
          Contact Us
        </Link>

        <div className="relative group/anas sm:w-full">
          <Link href="/products" className="hover:underline">
            Products
          </Link>

          <ul className="hidden group-hover/anas:block absolute top-6 text-white bg-[#00255d] max-w-[200px] rounded-md w-full">
            <li className="px-4 py-2 w-full hover:bg-white hover:text-black ">
              <Link href="/products/himalayan-pink-salt">
                Himalayan Pink Salt
              </Link>
            </li>
            <li className="px-4 py-2 w-full hover:bg-white hover:text-black ">
              <Link href="/products/black-salt">Black Salt</Link>
            </li>
            <li className="px-4 py-2 w-full hover:bg-white hover:text-black ">
              <Link href="/products/pickling-salt">Pickling Salt</Link>
            </li>
            <li className="px-4 py-2 w-full hover:bg-white hover:text-black ">
              <Link href="/products/sea-salt">Sea Salt</Link>
            </li>
            <li className="px-4 py-2 w-full hover:bg-white hover:text-black ">
              <Link href="/products/edible-salt">Edible Salt</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className=" hidden sm:flex w-14"></div>
    </div>
  );
};

export default Header;
