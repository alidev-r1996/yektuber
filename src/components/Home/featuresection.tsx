import { featureItems } from "@/constants/contstant";
import CarouselsSlider from "@/ui/EmbelaCarousel/carousels";
import ButtonUi from "@/ui/button";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <div className="flex flex-col gap-16 md:px-12">
      <ButtonUi
        color="primary"
        size="max"
        className="!px-6 md:my-4 font-bold mx-auto pointer-events-none !-mb-8 md:!mb-0 "
      >
        ویژگی‌های یکتیــوبر؟
      </ButtonUi>
      <div className="md:flex items-center gap-4 hidden ">
        {featureItems.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-slate-200/60 flex-1 md:w-52 select-none min-w-44  rounded-[30px] text-sm font-bold flex flex-col justify-center items-center"
            >
              <div className="relative w-24 -translate-y-1/2 aspect-square">
                <Image src={`/assets/images/feature/${item.img}`} fill alt="" />
              </div>
              <h1 className="pb-2 -mt-7 whitespace-nowrap">{item.title} </h1>
            </div>
          );
        })}
      </div>
        <CarouselsSlider className=" w-full md:hidden py-2 cursor-grab" btnClassName="hidden">
        {featureItems.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-slate-200/60 mt-14 flex-1 md:w-52 select-none min-w-44 rounded-[30px] text-sm font-bold flex flex-col justify-center items-center"
            >
              <div className="relative w-24 -translate-y-1/2  aspect-square">
                <Image src={`/assets/images/feature/${item.img}`} fill alt="" />
              </div>
              <h1 className="pb-2 -mt-7 whitespace-nowrap">{item.title} </h1>
            </div>
          );
        })}
        </CarouselsSlider>
    </div>
  );
};

export default FeatureSection;
