import Image from "next/image";

const HeroSectionBlog = () => {
    return ( 
        <div className="flex flex-col-reverse md:flex-row md:justify-between w-full items-center">
          <div className="flex flex-col gap-14 w-full md:w-[38%]">
            <h1 className="inline font-bold text-2xl  md:text-3xl items-center">
              به دنیای مقاله‌های
              <strong className="relative px-2 ">
                یکتیوبر
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
              خوش آمدید!
            </h1>
            <p className="text-sm text-slate-500">
              از بین مقاله های موجود ،{" "}
              <strong className="font-bold">دسته بندی</strong> مورد نظرت رو
              انتخاب کن تا به تمامی مقالات اون دسته بندی دسترسی پیدا کنی!
            </p>
          </div>
          <div className="relative aspect-square w-full md:w-1/4">
            <Image src='/assets/images/blogs/avatar-girl.png' alt="" className="object-cover" fill />
          </div>
        </div>
     );
}
 
export default HeroSectionBlog;