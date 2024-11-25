"use client";

import convertToPersianDigits from "@/utils/PersianDigits";
import Image from "next/image";
import Link from "next/link";
import { BiChevronUp } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { BsPatchQuestion } from "react-icons/bs";
import { menuItems } from "@/constants/contstant";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";

const Header = () => {
  const pathname = usePathname();
  const [subMenu, setSubMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between min-w-screen mx-auto bg-white shadow  p-6 sticky top-0 z-50">
      <div className="flex items-centr gap-16">
        <div className="flex items-center gap-4">
          <p
            onClick={() => setShowMenu(!showMenu)}
            className={`${
              showMenu && "bg-slate-100 text-rose-600"
            } p-1 rounded cursor-pointer hover:bg-slate-100 block md:hidden`}
          >
            {showMenu ? (
              <HiX className="w-7 h-6" />
            ) : (
              <HiBars3 className="size-7" />
            )}
          </p>
          <h1 className="font-bold text-xl md:text-xl relative after:size-2 after:rounded-full after:bg-rose-600 after:absolute after:bottom-2 after:-left-3">
            یکتیـوبر
          </h1>
        </div>
        {/* desktop menu */}
        <div className="md:flex flex-col md:flex-row items-center gap-6 hidden">
          {menuItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={item.children ? () => setSubMenu(!subMenu) : () => {}}
                className={`${
                  (pathname == item.link || (subMenu && item.children)) &&
                  "text-rose-500 font-bold"
                } flex items-center relative cursor-pointer`}
              >
                {item.children ? (
                  <p>{item.title}</p>
                ) : (
                  <Link href={item.link}>{item.title}</Link>
                )}
                {item.children && (
                  <BiChevronUp
                    className={`${
                      subMenu && "text-rose-500 rotate-180"
                    } size-5 mx-1`}
                  />
                )}
                {item.children && subMenu && (
                  <div className="absolute top-14 right-0 w-max rounded-2xl  shadow bg-bg-slate-100 z-[1000]">
                    <div className="flex">
                      <div className="flex flex-col w-max rounded-r-2xl bg-white gap-2 p-4 peer">
                        {item.children.map((child) => {
                          return (
                            <div
                              key={child.id}
                              className="flex items-center p-1 rounded cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-slate-100"
                            >
                              <p className="relative size-10 p-1">
                                <Image
                                  fill
                                  src={`/assets/images/services/menu/${child.img}`}
                                  alt=""
                                  className="object-contain"
                                />
                              </p>
                              <div className="flex items-start justify-between">
                                <div className="flex flex-1 flex-col text-sm px-2 peer">
                                  <Link
                                    href={child.link}
                                    className="text-black font-normal"
                                  >
                                    {child.title}
                                  </Link>
                                  <p className="text-slate-400 text-xs">
                                    {child.desc}
                                  </p>
                                </div>
                                <BsArrowLeft className="size-4 fill-rose-500 peer-hover:visible invisible" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="p-4 peer-hover:flex  flex-col gap-2 bg-slate-100 hidden w-64  leading-6">
                        <div className="flex items-center gap-1">
                          <BsPatchQuestion className="size-5" />
                          <p className="text-sm">درباره این افزونه</p>
                        </div>
                        <p className="text-slate-500 text-xs">
                          این افزونه بهتون کمک میکنه که کانالتون سئو بشه و با
                          استفاده از این افزونه میتونید آنالیز دقیقی از آمار و
                          ارقام کانالتون بدست بیارید!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* mobile menu */}
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } bg-rose-50  min-h-screen flex-col md:hidden absolute z-40 top-full mt-0.5 right-0 w-full`}
        >
          {menuItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={item.children ? () => setSubMenu(!subMenu) : () => {}}
                className={`${
                  pathname == item.link && "text-rose-500 font-bold"
                } ${
                  subMenu && item.children && "bg-rose-500 text-white"
                } flex flex-wrap transition-all duration-300 gap-y-4 items-center justify-between relative cursor-pointer p-4 hover:bg-rose-500 hover:text-white`}
              >
                {item.children ? (
                  <p className="flex-1">{item.title}</p>
                ) : (
                  <Link href={item.link}>{item.title}</Link>
                )}
                {item.children && (
                  <BiChevronUp
                    className={`${subMenu && " rotate-180"} size-5 mx-1`}
                  />
                )}
                {item.children && subMenu && (
                  <div className="w-full rounded overflow-hidden bg-bg-slate-100">
                    <div className="flex flex-col w-full  bg-white gap-2 p-2">
                      {item.children.map((child) => {
                        return (
                          <div
                            key={child.id}
                            className="flex  items-center p-1 rounded cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-rose-100"
                          >
                            <p className="relative size-10 p-1">
                              <Image
                                fill
                                src={`/assets/images/services/menu/${child.img}`}
                                alt=""
                                className="object-contain"
                              />
                            </p>
                            <div className="flex flex-1 pl-4 items-start justify-between">
                              <div className="flex flex-1 flex-col text-sm px-2 peer">
                                <Link
                                  href={child.link}
                                  className="text-black font-normal"
                                >
                                  {child.title}
                                </Link>
                                <p className="text-slate-400 text-xs">
                                  {child.desc}
                                </p>
                              </div>
                              <BsArrowLeft className="size-4 fill-rose-500 peer-hover:visible invisible" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col text-sm">
          <p>{convertToPersianDigits("021-2345678")} </p>
          <p className="text-slate-500 text-[10px]">
            پشتیبانی {convertToPersianDigits("24")} ساعته
          </p>
        </div>
        <p className="rounded bg-rose-100 text-rose-600 p-1">
          <CiMobile1 className="size-6" />
        </p>
      </div>
    </header>
  );
};

export default Header;
