import AboutLink from "../NavLink/AboutLink";

async function getData() {
  try {
    const category = (
      await (
        await fetch(`http://localhost:3000/api/news/category/find_category`, {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];

    return { category };
  } catch (error) {
    return {
      category: [],
    };
  }
}
const Navbar = async () => {
  const category = (await getData()).category;

  return (
    <div>
      <div className="flex items-center justify-center gap-5 border-y  py-3 ">
        {category?.splice(0, 5).map((data, idx) => (
          <AboutLink key={idx} category={data} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
