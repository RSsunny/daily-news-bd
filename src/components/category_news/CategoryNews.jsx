import CategoryNewsCard from "./CategoryNewsCard";

async function getData() {
  try {
    const category_news = (
      await (
        await fetch("http://localhost:3000/api/news/category/find_category", {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];
    return category_news;
  } catch (error) {
    return { category: [] };
  }
}

const CategoryNews = async () => {
  const news = await getData();

  return (
    <div>
      {news?.map((data, indx) => (
        <CategoryNewsCard key={indx} data={data} />
      ))}
    </div>
  );
};

export default CategoryNews;
