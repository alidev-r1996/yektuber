"use client";

import {useCallback} from "react";
import { FaChevronLeft } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";

type CarouselsSlierProps = {
  children: React.ReactNode;
  className: string
  btnClassName?: string
}

const CarouselsSlider: React.FC<CarouselsSlierProps> = ({ children, className, btnClassName }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({  });

  emblaApi?.reInit({
    direction: "rtl",
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`${className}`}>
      <div className="overflow-hidden w-full mx-auto md:p-4" ref={emblaRef}>
        <div className="flex gap-6 w-full">{children}</div>
        <div className={`${btnClassName} flex items-center w-full justify-end ml-auto gap-1 mt-4 px-2`}>
          <button
            className=" p-1 rounded shadow text-red-600 top-1/2 left-4 border border-red-600  transition-all duration-300 hover:bg-rose-600 hover:text-white hover:scale-110 active:95"
            onClick={scrollPrev}
          >
            <FaChevronLeft className="  rotate-180 size-3" />
          </button>
          <button
            className=" p-1 rounded shadow text-red-600 top-1/2 left-4 border border-red-600  transition-all duration-300 hover:bg-rose-600 hover:text-white hover:scale-110 active:95"
            onClick={scrollNext}
          >
            <FaChevronLeft className=" size-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselsSlider;
