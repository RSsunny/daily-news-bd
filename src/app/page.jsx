import Banner from "@/components/Header/Banner/Banner";
import Navbar from "@/components/Header/Navbar/Navbar";
import Logo from "@/utils/Logo";

const HomePage = async () => {
  return (
    <>
      <Logo />
      <Navbar />
      <Banner />
    </>
  );
};

export default HomePage;
