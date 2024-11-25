

import { blogItems } from "@/constants/contstant";
import CarouselsSlider from "@/ui/EmbelaCarousel/carousels";
import ButtonUi from "@/ui/button";
import convertToPersianDigits from "@/utils/PersianDigits";
import ShamsiDate from "@/utils/ShamsiDate";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import BlogsCard from "./blogsCard";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="flex items-center gap-1 rounded-lg w-max bg-slate-100 px-3 py-1 text-sm">
        <FaNewspaper className="size-5 fill-red-500" />
        اخبار و مقالات
      </span>
      <div className="block tracking-wider text-lg text-center">
        جدید ترین اخبار و مقالات آموزشی در بلاگ
        <p className="inline-block text-xl mx-2 ml-4 relative after:block after:absolute after:size-2 font-bold after:rounded-full after:bg-red-600 after:-left-2 after:top-2">
          یکتیــوبر
        </p>
      </div>
      <CarouselsSlider
        className=" w-full px-4 md:px-0 md:py-4 [&>div>div]:justify-between md:[&>div>div]:!gap-8"
        btnClassName="justify-between"
      >
        {blogItems.slice(0, 6).map((i) => {
          return <BlogsCard key={i.id} {...i} />;
        })}
      </CarouselsSlider>
      <ButtonUi
        color="primary"
        size="max"
        className="!px-6 my-4 font-bold mx-auto text-sm"
      >
        <Link href={'/blogs'}>مشاهده همه مقالات</Link>
        <BsArrowLeft className="ml-2 stroke-2" />
      </ButtonUi>
    </div>
  );
};

export default Blogs;
