import React from "react";
import { Mail, User, MessageCircle, Pencil } from "lucide-react";

const page = () => {
  return (
    <div className="   flex items-center justify-center p-4">
      <div className="w-full max-w-2xl  rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-center text-[#1D3C6A] mb-10">
          Get in Touch
        </h2>

        <form className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Name
            </label>
            <div className="relative">
              <User
                className="absolute top-3.5 left-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#1D3C6A] focus:outline-none transition"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute top-3.5 left-3 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#1D3C6A] focus:outline-none transition"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Subject
            </label>
            <div className="relative">
              <Pencil
                className="absolute top-3.5 left-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#1D3C6A] focus:outline-none transition"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Message
            </label>
            <div className="relative">
              <MessageCircle
                className="absolute top-4 left-3 text-gray-400"
                size={18}
              />
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#1D3C6A] focus:outline-none transition resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1D3C6A] text-white py-3 rounded-2xl hover:bg-[#16325b] transition duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
