import { sliderItems } from "@/constants/contstant";
import CarouselsSlider from "@/ui/EmbelaCarousel/carousels";
import convertToPersianDigits from "@/utils/PersianDigits";
import { FaDollarSign } from "react-icons/fa";

const Income = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full rounded-2xl bg-slate-100 p-4 md:px-6">
      <span className="flex text-sm items-center gap-1 rounded-lg w-max bg-white px-3 py-1">
        <FaDollarSign className="fill-red-600 size-3" />
        کسب درآمد
      </span>
      <h1 className="block tracking-wider text-lg text-center">
        مراحل
        <strong className="font-bold text-red-600 mx-1">مانتایز</strong> شدن
        کانال یوتیوب
      </h1>
      <p className="text-slate-400 text-sm leading-6 text-center w-full md:w-1/2">
        تا حالا به این فکر افتادی که از یوتیوب درآمدزایی کنی؟ یوتیوب، این دنیای
        اشتراک گذاری ویدئو و بزرگ‌ترین شاخه گوگل! هر کسی می‌تونه از طریق یوتیوب
        درآمد کسب کنه، کافیه که بلد باشه محتوا تولید کنه، توی یوتیوب ثبت نام کنه
        و با منتشر کردن اون محتوا توی کانال خودش، به درآمد برسه.
      </p>
      {/* ----------------------embla carousels--------------------------- */}

      <CarouselsSlider className="md:px-20  w-full md:w-1/2 p-0 md:py-4 " btnClassName="justify-between">
        {sliderItems.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-slate-900 text-white shadow rounded-2xl min-w-full p-4 flex flex-col gap-6 justify-center items-center relative"
            >
              <p className="absolute top-4 right-4 w-10 h-8 flex items-center justify-center bg-red-600 text-white rounded-xl text-sm font-bold">
                {convertToPersianDigits(item.number)}
              </p>
              <h1 className=" font-bold pr-8">{item.title}</h1>
              <p className="bg-slate-700 rounded-2xl p-2 py-4 text-sm text-slate-400 leading-7">
                {item.text}
              </p>
            </div>
          );
        })}
      </CarouselsSlider>

      {/* ----------------------embla carousels--------------------------- */}
    </div>
  );
};

export default Income;
