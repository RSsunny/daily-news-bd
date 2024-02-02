import Footer from "../Footer/Footer";
import Navbar from "../../Header/Navbar/Navbar";
import Logo from "@/utils/Logo";

const PageLayout = ({ children }) => {
  return (
    <>
      <Logo />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
