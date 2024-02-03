import Link from "next/link";
import UkraineNewsCard_l from "./UkraineNewsCard_l";
import UkraineNewsCard_m from "./UkraineNewsCard_m";
import UkraineNewsCard from "./UkraineNewsCard_m";
import UkraineNewsCard_r from "./UkraineNewsCard_r";
import { MdKeyboardDoubleArrowRight } from "@/lib/React_icon/reactIcon";

async function getData() {
  try {
    let country = (
      await (
        await fetch(`http://localhost:3000/api/news/latest`, {
          next: { revalidate: 5 },
        })
      ).json()
    )["data"];

    return { country };
  } catch (error) {
    return { country: [] };
  }
}
const UkraineNews = async () => {
  let data = await getData();

  return (
    <div className="grid grid-cols-11 gap-5 my-5 border-y py-5 border-black relative">
      <div className="col-span-3 border-r pr-5">
        {data?.country?.slice(1, 4).map((news, indx) => (
          <UkraineNewsCard_l key={indx} news={news} i={indx} />
        ))}
      </div>
      <div className="col-span-5">
        {data?.country?.slice(0, 1).map((news, indx) => (
          <UkraineNewsCard_m key={indx} news={news} />
        ))}
      </div>
      <div className="col-span-3 border-l pl-5">
        {data?.country?.slice(4, 10).map((news, indx) => (
          <UkraineNewsCard_r key={indx} news={news} i={indx} />
        ))}
      </div>
      <Link href={"/"} className="absolute bottom-1 right-2 text-xs">
        <p className="inline-block"> see more news</p>
        <MdKeyboardDoubleArrowRight className="inline-block ml-2" />
      </Link>
    </div>
  );
};

export default UkraineNews;
