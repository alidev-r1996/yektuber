import convertToPersianDigits from "@/utils/PersianDigits";
import ShamsiDate from "@/utils/ShamsiDate";
import Image from "next/image";

type BlogsCardProps = {
  img: string;
  category: string;
  title: string;
  createdAt: string;
  duration: number | string;
  style: string;
};

const BlogsCard: React.FC<BlogsCardProps> = ({
  img,
  category,
  title,
  createdAt,
  duration,
  style,
}) => {
  return (
    <div className="min-w-max mx-auto flex-1 rounded-3xl flex flex-col items-start-start cursor-pointer p-3 overflow-hidden bg-white shadow transition-all duration-300 hover:scale-105">
      <div className="relative w-full aspect-[16/11]">
        <Image src={img} fill className="object-contain" alt="" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className={`${style} text-xs py-0.5 rounded-full px-3 w-max`}>
          {category}
        </p>
        <h1 className="text-sm font-bold">{title}</h1>
        <p className="text-xs text-slate-500">
          {ShamsiDate(createdAt)} <span className="px-1">|</span>{" "}
          {convertToPersianDigits(duration)} دقیقه
        </p>
      </div>
    </div>
  );
};

export default BlogsCard;
