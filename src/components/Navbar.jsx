import React from "react";
import { IoSearch } from "react-icons/io5";
import { FiBell, FiMail } from "react-icons/fi";

function Navbar() {
  return (
    <header className="h-20 bg-[#111827] border-b border-[#1F2937] flex items-center justify-between px-8">
      {/* Search */}
      <div className="relative w-[480px]">
        <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          type="text"
          placeholder="Search inventory..."
          className="w-full bg-[#0F172A] border border-[#293548] rounded-full pl-12 pr-5 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-7">
        <button className="text-gray-300 hover:text-white transition">
          <FiBell size={22} />
        </button>

        <button className="text-gray-300 hover:text-white transition">
          <FiMail size={22} />
        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt=""
          className="w-11 h-11 rounded-full border-2 border-gray-700 object-cover cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Navbar;
