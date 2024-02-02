import Slide from "./Slide";

const Banner = ({ bannerNews }) => {
  return (
    <div className="mt-2">
      <Slide bannerNews={bannerNews} />
    </div>
  );
};

export default Banner;
