import Banner from "@/components/Header/Banner/Banner";
import Navbar from "@/components/Header/Navbar/Navbar";
import TopNewsLyout from "@/components/layout/TopNewsLyout";
import Logo from "@/utils/Logo";

async function getData() {
  try {
    const categoy = (
      await (
        await fetch(`http://localhost:3000/api/news/category/find_category`, {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];

    return { categoy };
  } catch (error) {
    return {
      category: [],
    };
  }
}

const HomePage = async () => {
  return (
    <>
      <Logo />
      <Navbar />
      <Banner />
      <TopNewsLyout />
    </>
  );
};

export default HomePage;
