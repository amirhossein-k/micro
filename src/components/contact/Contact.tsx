import React from "react";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import {Contactt} from "@/utils/types";
import Link from "next/link";

const contactItem: Contactt[] = [
  {
    key:"q",
    icon: <MdOutlineEmail className="text-xl mb-2" />,
    title: "Email",
    subtitle: "admin@gamil.com",
    path: "mailto:admin@gmail.com",
  },
  {
     key:"q2",
    icon: <RiMessengerLine className="text-xl mb-2" />,
    title: "Email",
    subtitle: "amir",
    path: "https://m.me/admin",
  },
  {
      key:"q3",
    icon: <BsWhatsapp className="text-xl mb-2" />,
    title: "Whatsapp",
    subtitle: "+98111111",
    path: "https://api.whatsapp.com/send?phone=98111111",
  },
];
const Contact = () => {
  return (
    <section id="contact" className="mt-20">
      <h5 className="text-center text-color-light font-medium ">
        Get In Touch
      </h5>
      <h2 className="text-color-priamry text-center mb-12 text-xl font-semibold">
        Contact Me
      </h2>
      {/*  */}
      <div className="grid w-[58%] md:w-[40%] grid-cols-1 gap-[12%] mx-auto">
        <div className="flex flex-col gap-5">
          {contactItem.map((item) => {
            return (
              <article
              key={item.key}
              className="bg-[#2e4d4d] text-center p-5 rounded-3xl border border-transparent transition-all hover:bg-transparent hover:border-color-[rgba(77,181,255,0.4)]">
                <span className="justify-center flex">                {item.icon}</span>
                <h4>{item.title}</h4>
                <h5>{item.subtitle}</h5>
                <Link href={item.path} target="_blank">
                  Send a Message
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
