"use client";

import BlogsCard from "@/components/Home/blogs/blogsCard";
import FilterBlogs from "@/components/blogs/filterBlogs";
import HeroSectionBlog from "@/components/blogs/herosection";
import { blogItems } from "@/constants/contstant";
import Paginate from "@/ui/paginate";
import { Paginate_maker } from "@/utils/paginate";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import BlogList from "./blogsList";

const Blogs = () => {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams().get("page") || 1;

  const blogFilter = useMemo(() => {
    let filter = blogItems;

    // Apply search filter
    if (search.trim() !== "") {
      filter = filter.filter((i) => i.title.includes(search));
    }

    // Apply tab filter (only when it's not 'all')
    if (tab !== "all") {
      filter = filter.filter((i) => i.englishTitle === tab);
    }

    return filter;
  }, [tab, search]);

  const { blogs, totalPages } = useMemo(() => {
    const { products: blogs, totalPages } = Paginate_maker(
      blogFilter,
      8,
      searchParams as number
    );
    return { blogs, totalPages };
  }, [searchParams, blogFilter]);

  return (
    <main className="p-4 space-y-10 pb-20 py-8 flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <HeroSectionBlog />
        <FilterBlogs
          tab={tab}
          setTab={setTab}
          search={search}
          setSearch={setSearch}
        />
        <BlogList blogs={blogs} />
        <div
          className={`${
            totalPages > 1 ? "" : "hidden"
          } flex items-center gap-4 mt-8`}
        >
          <Paginate
            blogs={blogs}
            items_per_page={1}
            shape="circle"
            theme="red"
            totalPage={totalPages}
          />
        </div>
      </div>
    </main>
  );
};

export default Blogs;
