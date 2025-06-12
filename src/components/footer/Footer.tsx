import { FooterItem } from "@/utils/types";
import Link from "next/link";
import React from "react";

import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";


const footerItem: FooterItem[] = [
  {path: "#", title: "Home"
    ,key:"121"
  },
  {path: "#about", title: "About"
      ,key:"12123"
  },
  {path: "#experience", title: "Experience"
      ,key:"1231"
  },
  {path: "#portfolio", title: "Portfolio"
      ,key:"1214"
  },
  {path: "#testimonials", title: "Testimonials"
      ,key:"12d61"
  },
  {path: "#contact", title: "Contact"
      ,key:"1261"
  },
];
const Footerr = () => {
  return (
    <footer className="bg-[#0e2118] py-12 px-0 text-center text-sm mt-28 hover:text-color-bg">
      <Link href="" className="text-3xl text-[#2a8156] font-medium mb-8 block">
        Amir
      </Link>
      <ul className="flex flex-wrap justify-center gap-8 mt-0 mx-0 mb-8">
        {footerItem.map((item) => {
          return (
            <li
            key={item.key}
            className="text-black">
              <Link 
              className="text-[#2a8156] text-lg"
              href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

  

      <div className="flex justify-center gap-4 mb-12 ">
        <Link
          href="https::/facebook.com"
          className="bg-[#1a2a2a] text-2xl text-white p-3 rounded-xl flex border border-transparent hover:bg-transparent hover:text-[#2a8156] hover:border-[#2a8156]"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https::/instagram.com"
          className="bg-[#1a2a2a] text-2xl text-white p-3 rounded-xl flex border border-transparent hover:bg-transparent hover:text-[#2a8156] hover:border-[#2a8156]"
        >
          <FiInstagram />
        </Link>
        <Link
          href="https::/twitter.com"
          className="bg-[#1a2a2a] text-2xl text-white p-3 rounded-xl flex border border-transparent hover:bg-transparent hover:text-[#2a8156] hover:border-[#2a8156]"
        >
          <IoLogoTwitter />
        </Link>
      </div>
      <div className=" mb-16 text-color-bg">
        <small>&copy; Amir All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footerr;
