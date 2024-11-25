import convertToPersianDigits from "@/utils/PersianDigits";
import { useCallback, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

type rangeSliderProps = {
  value: number;
  position: string;
  isMouseDown: boolean;
  setValue: (value: number) => void;
  setPosition: (position: string) => void;
  setIsMouseDown: (isMouseDown: boolean) => void;
  name: string;
};

const RangeSlider: React.FC<rangeSliderProps> = ({
  isMouseDown,
  position,
  setIsMouseDown,
  setPosition,
  setValue,
  value,
  name,
}) => {
  const mouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isMouseDown) return; // Only calculate position while mouse is down
      const container = document.querySelector<HTMLDivElement>(`#${name}`);
      if (container) {
        const rect = container.getBoundingClientRect(); // Use container's rect
        let clientX = 0;

        // For mouse event, use e.clientX. For touch event, use the first touch.
        if ("touches" in e) {
          clientX = e.touches[0].clientX; // Touch event
        } else {
          clientX = e.clientX; // Mouse event
        }

        const mouseX = clientX - rect.left;
        const xPercentage = Math.min(
          Math.max((mouseX / rect.width) * 100, 1),
          100
        ); // Prevent overflow
        setValue(Math.round((xPercentage / 100) * 100000));
        setPosition(`${xPercentage}%`);
      }
    },
    [isMouseDown, name]
  );

  const mouseDownHandler = () => {
    setIsMouseDown(true); // Set mouse down state to true
  };

  const mouseUpHandler = () => {
    setIsMouseDown(false); // Set mouse down state to false
  };

  const touchStartHandler = (e: TouchEvent) => {
    setIsMouseDown(true); // Set mouse down state to true for touch
    mouseMove(e); // Handle touch move immediately after start (so the slider updates on touch start)
  };

  const touchEndHandler = () => {
    setIsMouseDown(false); // Set mouse down state to false for touch
  };

  useEffect(() => {
    const container = document.querySelector<HTMLDivElement>(`#${name}`);

    if (container) {
      container.addEventListener("mousemove", mouseMove);
      container.addEventListener("touchmove", mouseMove); // Add touchmove event
      container.addEventListener("touchstart", touchStartHandler); // Handle touchstart
      document.addEventListener("mouseup", mouseUpHandler);
      document.addEventListener("touchend", touchEndHandler); // Handle touchend to stop touch events
    }

    // Cleanup function
    return () => {
      if (container) {
        container.removeEventListener("mousemove", mouseMove);
        container.removeEventListener("touchmove", mouseMove); // Remove touchmove event
        container.removeEventListener("touchstart", touchStartHandler); // Remove touchstart event
      }
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("touchend", touchEndHandler); // Remove touchend event
    };
  }, [mouseMove, touchStartHandler]);

  return (
    <div className="flex flex-col gap-2 w-full relative">
      <div
        dir="ltr"
        id={name}
        className="relative w-full rounded-full bg-slate-300 h-2 cursor-pointer mt-6"
      >
        <p
          style={{ width: position }}
          className="absolute inset-0 bg-red-600 rounded-full"
        ></p>
        <span
          onMouseDown={mouseDownHandler}
          style={{ left: position }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 size-5 rounded-full overflow-hidden border-[2px] border-white bg-red-600"
        ></span>
        <span
          style={{ left: position }}
          className="absolute select-none -top-5 -translate-x-1/2 -translate-y-1/2 text-[11px] w-10 text-center rounded bg-slate-800 text-white -rotate-[8deg] after:block after:absolute after:w-1 after:h-2 after:scale-x-125 after:bg-slate-800 after:right-5 after:rotate-45 after:-bottom-0.5"
        >
          {convertToPersianDigits(value.toString())}
        </span>
      </div>
      <div className="flex items-start justify-between -mt-0.5 select-none">
        {Array.from({ length: 49 })
          .map((_, x) => x + 1)
          .map((i) => (
            <p
              key={i}
              className={`${
                [1, 25, 51].includes(i) ? "h-2 w-[2px]" : "h-1 w-[1px]"
              } bg-slate-300 `}
            ></p>
          ))}
      </div>
      <div
        dir="ltr"
        className="flex items-start justify-between -mt-2 text-slate-400"
      >
        {["1000", "50,000", "100,000"].map((i) => (
          <p key={i} className={`text-xs ${i == "50,000" && "pl-4"} `}>
            {convertToPersianDigits(i)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RangeSlider;
