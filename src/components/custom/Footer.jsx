import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#444444] text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-300">
            We provide premium quality Himalayan salt, pink salt, and animal
            salt products worldwide.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-300 hover:text-white">
                FAQ's
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-6 h-6 text-gray-300 hover:text-white transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white transition" />
            </Link>
          </div>
        </div>

        {/* Section 4: Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-300" /> info@yourdomain.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-300" /> +123 456 7890
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-300" /> New York, USA
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
