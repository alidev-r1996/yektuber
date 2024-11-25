import { formConsultantItems } from "@/constants/contstant";
import ButtonUi from "@/ui/button";
import TextField from "@/ui/textField";
import { FaArrowRight, FaUser, FaQuestion, FaFileUpload } from "react-icons/fa";

const stepItems = [
  { id: 1, title: "ورود اطلاعات اولیه", icon: FaUser },
  { id: 2, title: "پاسخ به سؤالات", icon: FaQuestion },
  { id: 3, title: "آپلود صفحات", icon: FaFileUpload },
];

const FormCosultant = () => {
  return (
    <form
      action=""
      className="mt-8 rounded-3xl h-max bg-slate-900 md:w-3/4 w-full flex flex-col gap-4 p-4 md:flex-row relative"
    >
      <p
        className="md:w-1/4 w-[70%] bg-white absolute top-0 right-0 h-14 rounded-bl-3xl after:absolute after:size-8 after:block after:bg-transparent after:top-0 after:-left-8 after:rounded-tr-full after:shadow-[9px_-9px_0_9px_rgba(255,255,255,1)] 
          before:absolute before:size-8 before:block before:bg-transparent before:-bottom-8 before:-right-0 before:rounded-tr-full before:shadow-[9px_-9px_0_9px_rgba(255,255,255,1)]"
      ></p>
      <ButtonUi
        className="w-full pointer-events-none absolute z-10 top-0 py-3 right-2 px-4"
        color="primary"
        size="max"
      >
        {" "}
        فرم مشاوره تخصصی رایگان
      </ButtonUi>
      <div className=" w-full h-full mt-14 grid grid-cols-2 p-2 gap-3 gap-y-7">
        {/* -----------------mobile---------------- */}
        {stepItems.map(({ icon, id, title }) => {
          const Icons = icon;
          return (
            <div
              key={id}
              className={`${
                id != 1 && "hidden"
              } md:hidden mb-4 flex gap-2 col-span-2 items-center text-white`}
            >
              <p className={` p-2 rounded-full bg-red-600 text-white`}>
                <Icons className="size-4" />
              </p>
              <p>{title}</p>
            </div>
          );
        })}
        {/* ------------------mobileEnd--------------- */}
        {formConsultantItems.map((i) => (
          <TextField
            key={i.id}
            {...i}
            className={`${
              i.name == "youtube"
                ? "col-span-2"
                : "col-span-2 md:col-span-1 text-white"
            }`}
          />
        ))}
        <div className="flex items-center justify-between mt-6 text-sm col-span-2">
          <ButtonUi disabled className="w-full px-5" color="primary" size="max">
            <FaArrowRight className="size-3" />
            مرحله قبل
          </ButtonUi>
          <ButtonUi className="w-full px-5" color="primary" size="max">
            مرحله بعد
            <FaArrowRight className="size-3 rotate-180" />
          </ButtonUi>
        </div>
      </div>
      {/* -----------------desktop---------------- */}
      <div className="w-1/3 hidden m-2 p-3 bg-slate-800 rounded-2xl text-white md:flex flex-col gap-12">
        <h1 className="font-bold text-center">مراحل دریافت مشاوره</h1>
        <div className="flex flex-col gap-8  text-sm">
          {stepItems.map(({ icon, id, title }) => {
            const Icons = icon;
            return (
              <div key={id} className={`flex items-center gap-2 `}>
                <p
                  className={`${
                    id == 1 ? "" : "grayscale !text-slate-500"
                  } p-2 rounded-full bg-red-600 text-white`}
                >
                  <Icons className="size-4" />
                </p>
                <p className={`${id == 1 ? "" : "grayscale !text-slate-500"}`}>
                  {title}
                </p>
              </div>
            );
          })}
        </div>
        {/* -----------------desktopEnd---------------- */}
      </div>
    </form>
  );
};

export default FormCosultant;
