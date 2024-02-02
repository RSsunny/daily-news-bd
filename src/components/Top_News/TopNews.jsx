import TopNewsCard from "./TopNewsCard";

const TopNews = async ({ latestNews }) => {
  return (
    <div className="border-t pt-10 border-black">
      {latestNews?.splice(0, 10).map((data, indx) => (
        <TopNewsCard key={indx} data={data} />
      ))}
    </div>
  );
};

export default TopNews;
