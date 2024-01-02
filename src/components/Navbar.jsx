import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { LayoutDashboard, Users, Box } from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Users",
    icon: Users,
    path: "/users",
  },
  {
    name: "Package",
    icon: Box,
    path: "/package",
  },
];

function Navbar() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  return (
    <div className="px-10 h-[950px] max-h-screen py-12 flex-col w-1/6 shadow-md rounded-lg bg-white">
      {/* Logo */}
      <div className="w-full border-b-2 pb-7">
        <img src={logo} alt="" />
      </div>

      <div className="mt-9  flex flex-col space-y-7">
        <small className="text-gray-400">Main menu ----</small>
        {navLinks.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={
              "flex space-x-3 cursor-pointer p-2 rounded-lg text-gray-500 text-[18px]" +
              (activeNavIndex === index
                ? " bg-gradient-to-r from-[#CF1867] via-[#DF1E52] to-[#FA272F] text-white"
                : " ")
            }
            onClick={() => setActiveNavIndex(index)}
          >
            <item.icon />
            <span>{item?.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
