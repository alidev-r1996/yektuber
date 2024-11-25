import FormCosultant from "@/components/cosultant/form";
import { FaChartLine, FaUsers } from "react-icons/fa";

const Consultant = () => {
  return (
    <main className="p-4 space-y-10 pb-20 py-8 flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center gap-4 md:px-12">
        <span className="flex text-sm items-center gap-1 rounded-lg w-max bg-slate-100 px-3 py-1">
          <FaUsers className="fill-red-600 size-3" />
          مشاوره تخصصی
        </span>
        <h1 className="flex font-bold text-3xl items-center text-center">
          با{" "}
          <strong className="relative">
            حرفه‌ای‌ها
            <svg
              width="91"
              height="17"
              viewBox="0 0 91 17"
              className="absolute -bottom-5 right-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.03918 10.9637C-1.47404 10.7877 2.77712 9.49559 4.9089 8.79175C15.4117 5.32414 26.6792 2.86601 38.4251 1.86101C43.0313 1.46689 49.8785 1.28933 54.7331 1.42814C56.9911 1.4927 59.6582 1.13628 61.5141 2.23995C63.5131 3.42871 46.3486 9.48211 45.4473 9.76722C42.5959 10.6693 34.0609 12.8941 37.2935 13.0037C45.6211 13.2859 54.0705 12.234 62.315 11.9991C70.7762 11.758 79.6048 11.3467 88.1996 12.1927C92.1214 12.5788 86.6884 14.6043 85.6673 15.1723"
                stroke="#F13939"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </strong>
          <strong className="font-bold text-red-600 px-4">
            <FaChartLine />
          </strong>
          رشد کن
        </h1>
        <p className="text-slate-600 leading-7 md:w-1/2 text-center text-sm mt-8">
          تیم حرفهای یکتیوبر با مشاورههای تخصصی و ابزارهای حرفهای کمک میکنه تا
          مشکلات یوتیوبی خودتون رو حل کنین و کانالتون به درآمد مناسب برسه در
          نهایت هم درآمدتون رو خیلی سریع براتون نقد میکنه.
        </p>
        <FormCosultant />
      </div>
    </main>
  );
};

export default Consultant;
