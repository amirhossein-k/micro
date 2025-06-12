import React from "react";
import { IoLeaf } from "react-icons/io5";

// import {IoLeaf} from "react-icons/bs";
import {ExperienceItem} from "@/utils/types";

const exprerienceItem: ExperienceItem[] = [
  {
    titleItem: "مزیت ها",
    frontItem: [
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: "حجم کم اما مقوی",
        key:"1"
      },
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: "طعم به خصوص",
         key:"2"
      },
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: "طعم و رنگ متنوع",
         key:"3"
      },
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: "کاملاً طبیعی و بدون سم",
         key:"4"
      },
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: " دوستدار محیط زیست",
         key:"5"
      },
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: "تا ۴۰ برابر مغذی‌تر از گیاهان بالغ",
         key:"6"
      },
    ],
  },
  {
    titleItem: "BackEnd",
    backItem: [
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: "طعم‌هایی که آشپزی را متحول می‌کنند",
         key:"7"
      },
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: " زیبایی بی‌رقیب در بشقاب غذا",
         key:"8"
      },
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: "هوشمندانه برای نسل آینده",
         key:"9"
      },
      {
        icon: <IoLeaf className="mt-1 text-color-priamry" />,
        title: "",
        subtitle: " دارویی از دل طبیعت",
         key:"10"
      },
    ],
  },
];

const Expreience = () => {
  return (
    <section id="experience" className="my-3">
      <h5 className="text-center text-color-light font-medium my-">
       میکروگرین، فقط یک سبزی نیست؛ تجربه‌ای نو از تغذیه، سلامت و زندگی سبز است
      </h5>
      <h2 className=" text-color-priamry text-center mb-12 text-xl font-semibold">
ویژگی ها
      </h2>
      <div className="container grid lg:grid-cols-fr1 gap-2  grid-cols-1 ">
        {exprerienceItem.map((parent) => {
          return (
            <div
              key={parent.titleItem}
              className="bg-[#0d4428] mx-4 py-10 md:px-18 px-2 rounded-[2rem] border border-transparent transition-all hover:bg-transparent hover:border-[rgba(77, 181, 255, 0.4)] hover:cursor-default "
            >
              <h3 className="text-center mb-8 text-color-priamry">
                {/* {parent.titleItem} */}
              </h3>
              <div className="grid    md:grid-cols-fr1 grid-cols-1 md:auto-rows-[6rem] auto-rows-[4rem] ">
                {parent.titleItem === "مزیت ها"
                  ? parent.frontItem?.map((item) => {
                      return (
                        <article
                        key={item.subtitle}
                        className="flex flex-row w-full h-[4rem]  gap-5 ">
                          <div className=" gap-3 flex justify-center items-center w-full h-full">
                         <div className="  ">
                          
                           {item.icon}
                          </div>
                            <h4>{item.title}</h4>
                            <small className=" text-lg md:text-base">{item.subtitle}</small>
                          </div>
                        </article>
                      );
                    })
                  : parent.backItem?.map((item) => {
                      return (
                        <article
                        key={item.subtitle}
                        className="flex flex-row w-full h-[4rem]  gap-5 ">
                          <div className=" gap-3 flex justify-center items-center w-full h-full">
                         <div className="  ">
                          
                           {item.icon}
                          </div>
                            <h4>{item.title}</h4>
                            <small className=" text-lg md:text-base">{item.subtitle}</small>
                          </div>
                        </article>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expreience;
