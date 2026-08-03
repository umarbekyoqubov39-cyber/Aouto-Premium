import React from "react";
import {
  MdDashboard,
  MdDirectionsCar,
  MdFavoriteBorder,
  MdAnalytics,
  MdSettings,
} from "react-icons/md";
import { TbCarGarage } from "react-icons/tb";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FiHelpCircle, FiLogOut } from "react-icons/fi";

function Sidebar() {
  const menu = [
    { icon: <MdDashboard />, title: "Dashboard" },
    { icon: <MdDirectionsCar />, title: "Cars", active: true },
    { icon: <MdFavoriteBorder />, title: "Favorites" },
    { icon: <LuBadgeDollarSign />, title: "Sold Cars" },
    { icon: <TbCarGarage />, title: "Reserved Cars" },
    { icon: <MdAnalytics />, title: "Analytics" },
    { icon: <MdSettings />, title: "Settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#0F172A] border-r border-[#1F2937] flex flex-col justify-between">

      <div>
        <div className="px-8 py-8">
          <h1 className="text-3xl font-bold text-white">
            AutoPremium
          </h1>
          <p className="text-sm text-gray-400">
            Elite Fleet Management
          </p>
        </div>

        <div className="px-4 space-y-2">

          {menu.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition
              ${
                item.active
                  ? "bg-[#1E293B] text-white"
                  : "text-gray-400 hover:bg-[#1E293B]"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.title}
            </button>
          ))}

        </div>
      </div>

      <div className="px-4 pb-8 space-y-2">

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#1E293B]">
          <FiHelpCircle />
          Support
        </button>

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#1E293B]">
          <FiLogOut />
          Sign Out
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;