"use client";

import RangeSlider from "@/ui/rangeslider";
import convertToPersianDigits from "@/utils/PersianDigits";
import { useState } from "react";
import { BsChatHeartFill } from "react-icons/bs";
import { FaDollarSign, FaPlay } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi2";

const Calculate = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [position, setPosition] = useState("50%");
  const [value, setValue] = useState(50000);
  const [isMouseDown2, setIsMouseDown2] = useState(false);
  const [position2, setPosition2] = useState("50%");
  const [value2, setValue2] = useState(50000);

  return (
    <div className="flex flex-col justify-center items-center gap-4 md:px-12">
      <span className="flex text-sm items-center gap-1 rounded-lg w-max bg-slate-100 px-3 py-1">
        <FaDollarSign className="fill-red-600 size-3" />
        نقدکردن درآمد
      </span>
      <h1 className="block tracking-wider text-lg text-center">
        محاسبه‌گر درآمد{" "}
        <strong className="font-bold text-red-600 mx-1">یوتیوب</strong> شما
      </h1>
      <div className="w-full md:w-3/4 rounded-2xl md:justify-between bg-slate-200 flex gap-4 flex-col md:flex-row md:items-start md:p-4 p-2">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-1 font-bold">
              <HiChartBar className="size-6 fill-red-600" />
              درآمد یوتیوب خود را محاسبه کنید!
            </span>
            <p className="text-slate-500 text-xs p-1">
              اسلایدر را به چپ و راست بکشید تا پتانسیل های درآمدزایی محاسبه شود.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1 ">
                <FaPlay className=" size-3 text-red-500" />
                میزان بازدید روزانه
              </span>
              <p className="flex items-center gap-1 text-slate-400">
                View/day
                <strong className="px-2 py-1 rounded bg-slate-100 text-red-600">
                  {convertToPersianDigits(value.toString())}
                </strong>
              </p>
            </div>
            <RangeSlider
              name="viewSlider"
              value={value}
              position={position}
              setValue={setValue}
              setPosition={setPosition}
              isMouseDown={isMouseDown}
              setIsMouseDown={setIsMouseDown}
            />

            <span className="flex items-center gap-1 text-sm mt-6">
              <BsChatHeartFill className=" size-4 text-red-600" />
              میانگین نرخ تعامل بازدیدکنندگان
            </span>
            <p className="text-xs leading-6 text-slate-400">
              هر چه تعامل بازدیدکنندگان نظیر کامنت، لایک بیشتر باشد و همچنین
              آپشن‌های تبلیغات یوتیوب را روی کانال فعال کرده باشید این نرخ
              بالاتر خواهد بود و بروی درآمد شما تاثیر گذار خواهد بود.
            </p>

            <RangeSlider
              name="likeSlider"
              value={value2}
              position={position2}
              setValue={setValue2}
              setPosition={setPosition2}
              isMouseDown={isMouseDown2}
              setIsMouseDown={setIsMouseDown2}
            />
          </div>
        </div>
        <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-row md:flex-col md:justify-around gap-2 w-full md:w-[30%]">
          <div className="flex flex-col flex-1 gap-1 bg-slate-800 rounded-2xl p-2 md:p-4 text-sm md:text-2xl justify-center items-center">
            <p className="font-bold text-center">
              <strong className="px-2 text-red-600">$</strong>
              {convertToPersianDigits(
                Math.round(((value / 1000) * value2) / 100).toString()
              )}
            </p>
            <p className="md:text-sm text-[8px] text-slate-400">
              درآمد تقریبی روزانه
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-1 bg-slate-800 rounded-2xl p-2 md:p-4 text-sm md:text-2xl justify-center items-center">
            <p className="font-bold text-center">
              <strong className="px-2 text-red-600">$</strong>
              {convertToPersianDigits(
                Math.round((((value / 1000) * value2) / 100) * 30).toString()
              )}
            </p>
            <p className="md:text-sm text-[8px] text-slate-400">
              درآمد تقریبی ماهانه
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-1 bg-slate-800 rounded-2xl p-2 md:p-4 text-sm md:text-2xl justify-center items-center">
            <p className="font-bold text-center">
              <strong className="px-2 text-red-600">$</strong>
              {convertToPersianDigits(
                Math.round(
                  (((value / 1000) * value2) / 100) * 12 * 30
                ).toString()
              )}
            </p>
            <p className="md:text-sm text-[8px] text-slate-400">
              درآمد تقریبی سالیانه
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
