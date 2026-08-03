import React from "react";
import { FiBell, FiMail, FiUser } from "react-icons/fi";
import Input from "./Input";
function Navbar() {
  return (
    <header className="   bg-slate-900 border border-gray-50">
      <nav className="text-white flex items-center justify-between center pl-20">
        <Input />

        <div className="flex items-center gap-5 text-2xl">
          <FiBell className="cursor-pointer hover:text-blue-500 transition" />
          <FiMail className="cursor-pointer hover:text-blue-500 transition" />
          <FiUser className="cursor-pointer hover:text-blue-500 transition" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
