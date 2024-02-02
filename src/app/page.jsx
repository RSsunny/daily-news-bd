import Banner from "@/components/Header/Banner/Banner";
import Navbar from "@/components/Header/Navbar/Navbar";
import TopNewsLyout from "@/components/layout/TopNewsLyout";

import Logo from "@/utils/Logo";

async function getData() {
  try {
    const bannerNews = (
      await (
        await fetch(`http://localhost:3000/api/news/latest`, {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];

    const category = (
      await (
        await fetch(`http://localhost:3000/api/news/category/find_category`, {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];

    let latestNews = (
      await (
        await fetch(`http://localhost:3000/api/news/latest`, {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];

    return { bannerNews, category, latestNews };
  } catch (error) {
    return {
      latestNews: [],
    };
  }
}

const HomePage = async () => {
  const data = await getData();

  return (
    <div className="max-w-7xl mx-auto">
      <Logo />
      <Navbar />
      <Banner bannerNews={data?.bannerNews} />
      <TopNewsLyout latestNews={data?.latestNews} category={data?.category} />
    </div>
  );
};

export default HomePage;
