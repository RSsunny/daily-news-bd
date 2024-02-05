import TopNews from "../../Top_News/TopNews";
import CategoryNews from "../../Sidebar/category_news/CategoryNews";

import LatestNewsName from "@/lib/News_naem/LatestNewsName";
import TypeNews from "../../Sidebar/type_news/TypeNews";

const TopNewsLyout = ({ latestNews, category }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 gap-5 my-10 ">
        <div className="col-span-8  border-r  pr-5 border-black">
          <TopNews latestNews={latestNews} />
        </div>
        <div className="col-span-4  border-t  border-black">
          <CategoryNews category={category} />
          <TypeNews />
          <CategoryNews category={category} />
          <TypeNews />
          <CategoryNews category={category} />
        </div>
      </div>
      <div className="absolute top-2 left-0">
        <LatestNewsName />
      </div>
    </div>
  );
};

export default TopNewsLyout;
