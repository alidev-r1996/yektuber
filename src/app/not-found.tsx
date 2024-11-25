import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-max  min-w-screen bg-gray-50 flex items-center py-4 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">
            {" "}
            404
          </div>
          <p className="md:text-2xl text-lg font-light leading-normal mb-8">
            متأسفم، صفحه موردنظر توسعه داده نشده است!
          </p>

          <Link
            href="/" className="text-sm md:text-base px-4 py-2 rounded-lg bg-green-600 text-white hover:shadow-[0_0_10px_rgba(34,197,94,0.5)] cursor-pointer">
                بازگشت به صفحه اصلی
          </Link>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <img
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            className=""
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
