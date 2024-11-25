"use client";

import convertToPersianDigits from "@/utils/PersianDigits";
import { Paginate_maker, Paginate_number_maker } from "@/utils/paginate";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { BiChevronRight } from "react-icons/bi";

type PaginateProps = {
  blogs: Array<any>;
  items_per_page: number;
  theme: "red" | "green" | "blue";
  shape: "circle" | "square";
  totalPage: number;
};

const btnStyle = {
  red: "hover:bg-red-600 hover:text-text-red-600 border border-red-300 text-red-600 hover:border-red-600 hover:bg-red-100",
  green:
    "hover:bg-green-600 hover:text-text-red-600 border border-green-300 text-green-600 hover:border-red-600 hover:bg-red-100",
  blue: "hover:bg-blue-600 hover:text-text-red-600 border border-blue-300 text-blue-600 hover:border-red-600 hover:bg-red-100",
};

const activebtnStyle = {
  red: "!bg-red-600 !text-white !border-none",
  green: "!g-green-600 !text-white !border-none",
  blue: "!bg-blue-600 !text-white !border-none",
};

const shapStyle = {
  circle: "rounded-full",
  square: "rounded",
};

const Paginate: React.FC<PaginateProps> = ({
  items_per_page,
  blogs,
  theme,
  shape,
  totalPage
}) => {
  const pathname = usePathname() ?? "";
  const searchParams = useSearchParams() ?? new URLSearchParams("");
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const [page, setPage] = useState(1);

  const pageHandler = useMemo(() => {
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [page]);

  const pages = useMemo(() => Paginate_number_maker(totalPage, page), [page, totalPage]);

  return (
    <div dir="ltr" className="flex items-center gap-1 w-max [&>button]:">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`${btnStyle[theme]} ${shapStyle[shape]} p-1  size-7 transition-all duration-300  disabled:!opacity-40 bg-transparent border disabled:pointer-events-none`}
      >
        <BiChevronRight className="w-full h-full rotate-180" />
      </button>
      <div className="flex items-center gap-1">
        {pages.map((i, index) => {
          return (
            <button
              disabled={i == "..."}
              key={index}
              onClick={() =>
                Boolean(typeof i == "number") && setPage(parseInt(i.toString()))
              }
              className={` size-7 p-1 flex items-center justify-center ${
                shapStyle[shape]
              } ${Boolean(i != "...") && ` ${btnStyle[theme]}`}  ${
                page == i ? `${activebtnStyle[theme]}` : ""
              }`}
            >
              {convertToPersianDigits(i.toString())}
            </button>
          );
        })}
      </div>
      <button
        disabled={page === totalPage}
        onClick={() => setPage(page + 1)}
        className={`${btnStyle[theme]} ${shapStyle[shape]} p-1 size-7  transition-all duration-300  disabled:!opacity-40 bg-transparent border disabled:pointer-events-none`}
      >
        <BiChevronRight className="w-full h-full" />
      </button>
    </div>
  );
};

export default Paginate;
