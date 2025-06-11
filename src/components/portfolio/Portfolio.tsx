import Image from "next/image";
// import {GetProject} from "../../../../actions/getProject";
import Link from "next/link";
// import { GetProject } from "../../../actions/getProject";
 
const project = [
  {
    _id:"1",
    pic:"https://c713657.parspack.net/c713657/uploads/1749124854813-gallery-0-TLP-5285_7e55b965-40f0-49bc-9802-0b9d86f7a3e4%20copy.jpg",
    title:"lorem1"

  },
  {
    _id:"2",
    pic:"https://c713657.parspack.net/c713657/uploads/1749124865469-gallery-2-TLP-5285_005abc44-df04-49cd-b6ad-7bdee7bfab03%20copy.jpg",
    title:"lorem2"

  },
  {
    _id:"3",
    pic:"https://c713657.parspack.net/c713657/uploads/1749125501646-gallery-4-TLP-77642_41398619-dc5e-4083-8b9a-fde53f3c88af%20copy.jpg",
    title:"lorem3"

  },
]

const Portfolio = async () => {
  // const project = await GetProject();

  return (
    <section id="portfolio" className="mt-20">
      <h5 className="text-center text-color-light font-medium ">
        What I Offer
      </h5>
      <h2 className="text-color-priamry text-center mb-12 text-xl font-semibold">
        Services
      </h2>
      <div className="grid md:grid-cols-3 gap-10 grid-flow-row w-[95%] mx-auto my-0">
        {project?.map((item) => {
          return (
            <article
              key={item._id}
              className="bg-color-bg-variant p-5 rounded-[2rem] border border-transparent transition-all hover:bg-transparent hover:border-color-[rgba(77, 181, 255, 0.4)]"
            >
              <div className="rounded-3xl overflow-hidden">
                <Image alt="" src={item.pic} width={500} height={500} />
              </div>
              <h3 className="mt-5 mx-0 mb-8 text-center" >{item.title}</h3>
              <div className="flex gap-4 mb-4 lg:flex-row flex-col justify-center items-center">
                {/* <div className=""> */}
                  {/* <Link href="#" className="btn"> */}
                    {/* {item.title} */}
                  {/* </Link> */}
                {/* </div> */}
                <div className="">
                  <Link className="btn btn-primary" href="#" target="_blank">
                    مطالعه مطلب
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
