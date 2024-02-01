import TopNewsCard from "./TopNewsCard";

async function getData() {
  try {
    let topNews = (
      await (
        await fetch(`http://localhost:3000/api/news/latest`, {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];

    return { topNews };
  } catch (error) {
    return { topNews: [] };
  }
}
const TopNews = async () => {
  const { topNews } = await getData();

  return (
    <div>
      {topNews?.splice(0, 10).map((data, indx) => (
        <TopNewsCard key={indx} data={data} />
      ))}
    </div>
  );
};

export default TopNews;
