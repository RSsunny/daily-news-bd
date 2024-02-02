import TypeNewsName from "@/lib/News_naem/TypeNewsName";
import TypeCard from "./TypeCard";
import TypeCard2 from "./TypeCard2";

async function getData() {
  try {
    const typeNews1 = (
      await (
        await fetch("http://localhost:3000/api/news/type?type=Science", {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];
    const typeNews2 = (
      await (
        await fetch("http://localhost:3000/api/news/type?type=Environment", {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];
    const typeNews3 = (
      await (
        await fetch("http://localhost:3000/api/news/type?type=Agriculture", {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];
    const typeNews4 = (
      await (
        await fetch("http://localhost:3000/api/news/type?type=Health", {
          next: { revalidate: 10 },
        })
      ).json()
    )["data"];
    return { typeNews1, typeNews2, typeNews3, typeNews4 };
  } catch (error) {
    return { typeNews1: [], typeNews2: [], typeNews3: [], typeNews4: [] };
  }
}
const TypeNews = async () => {
  const news = await getData();

  return (
    <>
      <TypeNewsName type="Science" />
      <div>
        {news?.typeNews1?.splice(0, 2).map((data, indx) => (
          <TypeCard key={indx} data={data} />
        ))}
      </div>
      <TypeNewsName type="Agriculture" />
      <div>
        {news?.typeNews3?.splice(0, 2).map((data, indx) => (
          <TypeCard2 key={indx} data={data} />
        ))}
      </div>
      <TypeNewsName type="Environment" />
      <div>
        {news?.typeNews2?.splice(0, 2).map((data, indx) => (
          <TypeCard key={indx} data={data} />
        ))}
      </div>
      <TypeNewsName type="Health" />
      <div>
        {news?.typeNews4?.splice(0, 2).map((data, indx) => (
          <TypeCard2 key={indx} data={data} />
        ))}
      </div>
    </>
  );
};

export default TypeNews;
