import TopNews from "../Top_News/TopNews";
import CategoryNews from "../category_news/CategoryNews";

const TopNewsLyout = () => {
  return (
    <div className="grid grid-cols-12 gap-5 my-10">
      <div className="col-span-9  ">
        <TopNews />
      </div>
      <div className="col-span-3  ">
        <CategoryNews />
      </div>
    </div>
  );
};

export default TopNewsLyout;
