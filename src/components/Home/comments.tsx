import { userComments } from "@/constants/contstant";
import CarouselsSlider from "@/ui/EmbelaCarousel/carousels";
import ButtonUi from "@/ui/button";
import Image from "next/image";
import { FaComments } from "react-icons/fa";

const Comments = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="flex items-center gap-1 rounded-lg w-max bg-slate-100 px-3 py-1 text-sm">
        <FaComments className="size-5 fill-red-500" />
        بشنوید از همراهان یکتیــوبر
      </span>
      <div className="block tracking-wider text-lg text-center">
        تجربه همکاری با ما را از همراهان
        <p className="inline-block text-xl mx-2 ml-4 relative after:block after:absolute after:size-2 font-bold after:rounded-full after:bg-red-600 after:-left-2 after:top-2">
          یکتیــوبر
        </p>
        بشنوید!
      </div>
      <CarouselsSlider
        btnClassName="justify-between  lg:justify-around lg:absolute top-1/3 lg:translate-x-[90px]"
        className="lg:px-16  w-full  p-0 md:py-4 relative"
      >
        {userComments.map(({ id, img, style, text, user }) => {
          return (
            <div
              key={id}
              className={`bg-mask min-w-full h-max py-8 ${style} flex flex-col gap-4 justify-center items-center p-3`}
            >
              <div className="relative size-14 md:size-20 rounded-full border-[3px] border-orange-200 overflow-hidden">
                <Image src={`/assets/images/hero/${img}`} alt="" fill />
              </div>
              <h1 className="font-bold text-sm md:text-base">{user} </h1>
              <p className="md:text-sm text-xs leading-6 w-full sm:w-1/2 text-center">
                {text}
              </p>
              <ButtonUi
                size="max"
                color="primary"
                className="md:text-sm text-xs mt-2"
              >
                بازدید از کانال یوتیوب{" "}
              </ButtonUi>
            </div>
          );
        })}
      </CarouselsSlider>
    </div>
  );
};

export default Comments;
