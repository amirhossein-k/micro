import Image from "next/image";
import React from "react";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
// import me from "@/../public/about copy.jpg"
import {AboutItem} from "@/utils/types";
import Link from "next/link";

const itemAbout: AboutItem[] = [
  {
    icon: <FaAward className="text-color-priamry text-2xl mb-4" />,
    title: "تجربه کاری",
    subtitle: "+21 سال",
  },
  {
    icon: <FiUsers className="text-color-priamry text-2xl mb-4" />,
    title: "مشتریان",
    subtitle: "100+ ",
  },
  {
    icon: <VscFolderLibrary className="text-color-priamry text-2xl mb-4" />,
    title: "محصولات",
    subtitle: "10+ ",
  },
];

const About = () => {
  return (
    <section id="about" className="mt-32">
      {/* <h5 className="text-center text-color-light font-medium ">درباره ما</h5> */}
      <h2 className="text-color-priamry text-center mb-12 text-xl font-semibold">
       درباره ما
      </h2>
      <div className="container grid grid-cols-1 xl:grid-cols-2 sm:grid-cols-2 gap-10 place-items-center lg:place-items-center md:grid-cols-about md:gap-[5%] md:place-items-start ">
        <div className=" rounded-[2rem] bg-gradient-to-r from-[#206d40] to-transparent grid h-fit w-[65%] md:mt-8 md:mx-auto md:mb-16 md:w-full sm:w-1/2 sm:mt-0 sm:mx-auto sm:mb-12">
          <div className="rounded-[2rem] overflow-hidden  rotate-12 hover:rotate-0 transition-all duration-500">
            <Image
              alt="about me"
              src={'https://c713657.parspack.net/c713657/uploads/main%20copy.jpg'}
              quality={100}
              width={1500}
              height={1500}
              className="w-full "
            />
          </div>
        </div>
        {/* items */}
        <div className="md:text-center md:my-6 md:mx-0 mx-4">
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-about_sm sm:gap-8 ">
            {itemAbout.map((item,index) => {
              return (
                <article
                key={index}
                className="bg-color-bg-variant w-full h-full bg-[#277742] border border-transparent rounded-2xl md:p-8 text-center transition-all hover:bg-transparent hover:border-color-priamry hover:cursor-default p-1 flex justify-center items-center flex-col">
                <div className="flex-1 ">  {item.icon}</div>
                  <h5 className="text-md my-3 ">{item.title}</h5>
                  <small className="text-sm text-color-light">
                    {item.subtitle}
                  </small>
                </article>
              );
            })}
          </div>
          <p className="mt-8 mb-11 text-color-light md:mt-4 md:mx-0 md:mb-6 sm:my-6 sm:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            nesciunt dolor consequuntur ad corrupti ipsam laborum hic
            recusandae? Quia vero quo, inventore aliquid voluptas quisquam
            veritatis animi rerum possimus cumque.
          </p>
          <Link href="#contact" className="btn btn-primary">
            Lets Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
