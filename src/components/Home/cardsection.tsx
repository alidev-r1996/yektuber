import { cardItems } from "@/constants/contstant";

const CardSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:px-12">
      {cardItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className={`${item.style} flex-1 flex flex-col p-4 h-[17rem] rounded-[34px] relative`}
          >
            <p
              className={`${item.dotStyle} absolute top-0 right-4 rounded-full size-11 z-20 p-3 flex items-center justify-center`}
            >
              <Icon className="size-full" />
            </p>
            <p
              className="absolute top-0 right-0 bg-white z-10 w-[20%] h-[20%] rounded-bl-3xl after:block after:absolute after:size-6 after:bg-transparent after:-left-[24px] after:-top-[1px] after:rounded-tr-full after:shadow-[8.5px_-2.5px_0_2.5px_rgba(255,255,255,1)] 
          before:block before:absolute before:size-6 before:bg-transparent before:-bottom-[23px] before:right-0 before:rounded-tr-full before:shadow-[8.5px_-2.5px_0_2.5px_rgba(255,255,255,1)]"
            ></p>
            <p className="pr-20">{item.title}</p>
            <h1 className="font-bold text-xl mt-12">{item.subTitle}</h1>
            <p className="leading-8 text-sm mt-4">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;
