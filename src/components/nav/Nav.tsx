"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaAddressBook, FaFolder } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { NavItem } from "@/utils/types";

const navItem: NavItem[] = [
  { path: "#", icon: <AiOutlineHome /> },
  { path: "#about", icon: <FaAddressBook /> },
  { path: "#experience", icon: <BiBook /> },
  { path: "#portfolio", icon: <FaFolder /> },
  { path: "#contact", icon: <RiServiceLine /> },
  { path: "#profile", icon: <AiOutlineUser /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {navItem.map((item) => {
        return (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setActiveNav(item.path)}
            className={`${activeNav === item.path ? "active" : ""} `}
          >
            {item.icon}
          </Link>
        );
      })}
      {activeNav === "#profile" && (
        <section
          dir="rtl"
          id="profile"
          className="flex fixed justify-center items-center w-[80px] h-[50px] rounded-lg -right-1 bottom-[65px] bg-[#325252] text-white text-md font-bold"
        >
          <Link href={'/login'} className="hover:bg-transparent hover:text-green-300 text-white">
          
          پروفایل
          </Link>
        </section>
      )}
    </nav>
  );
};

export default Nav;