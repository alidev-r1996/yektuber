import ButtonUi from "@/ui/button";
import convertToPersianDigits from "@/utils/PersianDigits";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { SlRocket } from "react-icons/sl";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-start lg:flex-row md:justify-between md:px-12">
      <HeroText />

      {/* -----for adjusting layout------ */}
      <div className="flex-1"></div>

      <HeroImage />
    </div>
  );
};

export default HeroSection;

export const HeroText = () => {
  return (
    <div className="flex flex-col gap-9 md:w-[40%]">
      <div className="flex flex-wrap items-center gap-1">
        <p className="p-2 rounded-full bg-rose-100 text-rose-600">
          <SlRocket className="md:size-6 size-4" />
        </p>
        <p className="text-sm md:text-base">
          بهترین ابزار ها در اختیار شما خواهد بود
        </p>
      </div>

      <div className=" block font-bold text-3xl md:text-5xl">
        پاتوق رشد یوتیوبرهای ایرانی
        <div className="inline-flex mr-6 align-bottom items-center relative ">
          {["elham.png", "narges.png", "hamid.png"].map((item, index) => {
            return (
              <div key={index} className="relative size-10 md:size-12 -mr-3">
                <Image
                  src={`/assets/images/hero/${item}`}
                  alt=""
                  fill
                  className=" rounded-full border-[3px] border-rose-100"
                />
              </div>
            );
          })}
          <p className="absolute -left-12 top-2">
            <svg
              width="28"
              height="69"
              viewBox="0 0 28 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6811 85.7542C18.9086 85.5977 18.9661 85.2863 18.8095 85.0589L16.2586 81.3518C16.102 81.1243 15.7907 81.0668 15.5632 81.2233C15.3357 81.3798 15.2782 81.6911 15.4348 81.9186L17.7023 85.2138L14.4071 87.4814C14.1796 87.6379 14.1221 87.9492 14.2786 88.1767C14.4352 88.4042 14.7465 88.4617 14.974 88.3052L18.6811 85.7542ZM26.9015 0.485607C6.7835 9.19369 2.15614 30.9394 3.30932 45.5326C3.59848 49.1919 4.25168 52.4281 5.12781 54.9254C5.56581 56.1739 6.06336 57.2488 6.60651 58.1028C7.14616 58.9513 7.75084 59.6135 8.41658 59.9941C9.10194 60.3858 9.84802 60.4736 10.5894 60.1658C11.3044 59.869 11.9533 59.23 12.5395 58.3011C13.711 56.4448 14.7571 53.23 15.5623 48.4059L14.576 48.2412C13.7763 53.0324 12.7557 56.0848 11.6938 57.7674C11.1634 58.6079 10.654 59.0563 10.206 59.2422C9.78448 59.4172 9.3629 59.3831 8.91284 59.1259C8.44316 58.8574 7.94467 58.3434 7.45031 57.5661C6.95945 56.7943 6.49217 55.7937 6.07143 54.5944C5.2301 52.1962 4.59024 49.0481 4.30622 45.4538C3.16666 31.0331 7.76448 9.85874 27.2987 1.40332L26.9015 0.485607ZM15.5623 48.4059C16.3662 43.5895 16.4209 40.3576 15.9195 38.4457C15.6688 37.4896 15.2551 36.7725 14.632 36.4027C13.9863 36.0196 13.2498 36.0851 12.5424 36.3993C11.8413 36.7107 11.1078 37.2887 10.3735 38.0507C9.63445 38.8176 8.87181 39.7947 8.1164 40.9354C6.60544 43.2171 5.10443 46.1822 3.86681 49.5001C1.39629 56.1231 -0.0558864 64.2376 1.63845 71.1908C2.48784 74.6765 4.1306 77.8787 6.83877 80.4431C9.5472 83.0076 13.2934 84.9078 18.3068 85.834L18.4885 84.8506C13.6316 83.9533 10.0717 82.1271 7.52632 79.7169C4.98066 77.3065 3.42184 74.2855 2.61002 70.954C0.981954 64.2728 2.36885 56.3771 4.80375 49.8496C6.01883 46.5921 7.48712 43.6969 8.95016 41.4875C9.68174 40.3828 10.4073 39.4567 11.0936 38.7446C11.7846 38.0276 12.4137 37.5507 12.9483 37.3132C13.4767 37.0785 13.8491 37.101 14.1217 37.2627C14.4166 37.4378 14.7304 37.8533 14.9522 38.6993C15.396 40.3917 15.3769 43.4423 14.576 48.2412L15.5623 48.4059Z"
                fill="url(#paint0_linear_1_2364)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_2364"
                  x1="28.5798"
                  y1="53.9071"
                  x2="45.4111"
                  y2="7.59839"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stopColor="#666666" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-8">
        <ButtonUi size="max" color="primary" className="md:text-sm text-xs ">
          <p>شروع نقد کردن درآمد از یوتیوب</p>
          <BsArrowLeft />
        </ButtonUi>
        <ButtonUi size="max" color="secondary" className="md:text-sm text-xs">
          ابزارهای یک تیوبر
        </ButtonUi>
      </div>
      <div className="flex flex-wrap items-start gap-2 text-sm leading-6 mt-4">
        <p className="font-bold relative inline-flex items-center gap-1 text-base">
          یکتیوبر <FaYoutube className="text-red-600" />
        </p>
        <p className="inline text-xs md:text-sm">
          پاتوق یوتیوبرها و مشاورهای حرفه‌ایه که امکانالت رو بررسی می‌کنن و کلی
          ایده و ابزار برای رشد توی یوتیوب جلوی پات می‌ذارن ، تازه کانالت رو به
          حساب ادسنس وصل و درآمدت رو هم برات نقد می‌کنن!
        </p>
      </div>
    </div>
  );
};

export const HeroImage = () => {
  return (
    <div className="lg:w-[40%] mx-auto w-full rounded p-4 md:h-[600px] h-[450px]">
      <div className="relative w-1/2 h-72  md:min-h-[450px] mr-auto">
        <Image src="/assets/images/hero/hero-women.png" alt="" fill />
      </div>
      <div className="relative w-1/2 h-72  md:min-h-[450px] mr-auto translate-x-[80%] -translate-y-2/3 md:-translate-y-[75%]">
        <Image
          src="/assets/images/hero/hero-men.png"
          alt=""
          className=""
          fill
        />
        <div className="absolute top-0 right-0 size-16 rounded-full overflow-hidden border-[4px] border-white bg-red-600 p-3">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 29 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 30L9 33.5L7.5 19.5L17 28L28 1"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 absolute bottom-2 -left-[57%] text-sm">
          <FaYoutube className="size-6 text-red-600" />
          <p>{convertToPersianDigits("13.250+")}</p>
          <p className="px-2 py-0.5 rounded bg-slate-100">Subscriber</p>
        </div>
      </div>
    </div>
  );
};
