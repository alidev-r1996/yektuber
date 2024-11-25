import { FaMagnifyingGlass } from "react-icons/fa6";
import { filterTabItems } from "@/constants/contstant";

type FilterBlogs = {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const FilterBlogs: React.FC<FilterBlogs> = ({
  search,
  setSearch,
  setTab,
  tab,
}) => {
  return (
    <div className="flex flex-col-reverse mt-8 justify-between w-full md:flex-row gap-4 overflow-x-hidden">
      <div className="flex items-center gap-2 text-sm overflow-x-auto py-4 md:py-0">
        {filterTabItems.map((item) => (
          <span
            onClick={() => setTab(item.englishTitle)}
            key={item.id}
            className={`${
              tab == item.englishTitle
                ? "bg-red-600 text-white"
                : " text-black hover:bg-red-600 hover:text-white"
            } transition-all duration-300 cursor-pointer px-3 py-1 rounded-full  whitespace-nowrap select-none`}
          >
            {item.title}
          </span>
        ))}
      </div>

      <form className="flex items-center gap-2 text-sm w-full md:w-1/3 bg-slate-100 p-2 rounded-full justify-between px-4">
        <input
          type="text"
          placeholder="جستجو"
          className="outline-none flex-1 bg-transparent px-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>
          <FaMagnifyingGlass className="text-slate-400 size-4" />
        </p>
      </form>
    </div>
  );
};

export default FilterBlogs;
