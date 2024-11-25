import BlogsCard from "@/components/Home/blogs/blogsCard";
import Image from "next/image";

const BlogList = ({ blogs }: { blogs: Array<any> }) => {

  if( blogs.length === 0) return <SearchError />

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full mt-5">
      {blogs.map((i) => {
        return <BlogsCard key={i.id} {...i} />;
      })}
    </div>
  );
};

export default BlogList;


export function SearchError(){
  return (
    <div className=" py-8 flex flex-col md:flex-row justify-center items-center w-full gap-4">
      <h1 className="px-5 py-1 rounded-full "> مقاله موردنظر شما یافت نشد!</h1>
      <div className="relative aspect-video w-full md:w-1/3 ">
        <Image src='/assets/images/robot-404.png' fill alt="" />
      </div>
    </div>
  )
}
