import { formInputItems } from "@/constants/contstant";
import ButtonUi from "@/ui/button";
import TextField from "@/ui/textField";
import { FaArrowLeft, FaRecycle } from "react-icons/fa";
import { HiClipboardDocumentCheck } from "react-icons/hi2";

const Consultant = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:px-12">
      <div className="flex flex-col gap-8 w-full md:w-1/2">
        <div className="flex flex-col gap-2">
          <div className="text-center">
            مشاوره رایگان با
            <p className="inline-block text-lg mx-2 ml-4 relative after:block after:absolute after:size-2 font-bold after:rounded-full after:bg-red-600 after:-left-2 after:top-2">
              یکتیــوبر
            </p>
          </div>
          <svg
            width="91"
            height="17"
            viewBox="0 0 91 17"
            className="mx-auto"
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
        </div>
        <p className="hidden md:block text-slate-600  leading-[3rem]">
          تولید محتوا در یوتیوبیک فعالیت هیجان‌انگیز است که در کنار جذابیت‌هایش،
          مشکلات و فوت ‌و فن‌های خودش راهم دارد: از اینکه چطور محتوای مخاطب‌پسند
          تولید کنیم گرفته تا چه کارهایی باعثاخطار و استرایک گرفتن می‌شوند و
          اصلاً اگر به درآمد یوتیوبی رسیدیم، حالا چطور آنرا نقد کنیم و... .
          یک‌تیوبر تیمی از حرفه‌ای‌های کسب درآمد از یوتیوب دارد که باکوله‌باری
          از تجربۀ یوتیوبی، آماده‌اند تا کاملاً رایگان برای حل مشکلات
          یوتیوبرهاکنارشان باشند. اگر نیاز به مشاوره و راهنمایی دارید، ما در
          کنار شما هستیم!
        </p>
      </div>
      <form className="w-full md:w-1/2 flex text-white flex-col gap-8 bg-slate-900 p-4 md:px-8 rounded-2xl">
        <div className="flex items-center gap-2">
          <HiClipboardDocumentCheck className="size-7 rotate-12 fill-red-600" />
          <h1 className="font-bold text-xl">فرم درخواست مشاوره</h1>
        </div>
        <p className="text-sm text-slate-300 leading-6">
          این فیلدها رو تکمیل کنید و برامون بفرستید تا کارشناسان یک ‌تیوبر توی
          سریع‌ترین زمان ممکن، برای راهنمایی با شما تماس بگیرن!
        </p>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 ">
          {formInputItems.map(( i) => (
             <TextField key={i.id} {...i} className={`${
              i.name == "youtube" ? "col-span-2" : "col-span-2 md:col-span-1"
            }`}/>
          ))}
            
          <div className="flex items-center justify-between mt-5 col-span-2 text-xs md:text-sm">
            <div className="bg-slate-700 rounded-lg p-2 flex justify-between items-center gap-3 md:gap-6">
              <label htmlFor="robot" className="flex flex-row-reverse gap-2 align-middle">
                من ربات نیستم
                <input
                  type="checkbox"
                  name="robot"
                  id="robot"
                  className="form-checkbox bg-slate-800 p-1 rounded align-middle size-[18px] cursor-pointer ring-0 outline-none focus:border-none focus:outline-none focus:ring-0 active:outline-none active:ring-0"
                />
              </label>
              <FaRecycle className="fill-blue-500 size-5" />
            </div>
            <ButtonUi color="primary" size="max">
              درخواست مشاوره رایگان
              <FaArrowLeft />
            </ButtonUi>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Consultant;
