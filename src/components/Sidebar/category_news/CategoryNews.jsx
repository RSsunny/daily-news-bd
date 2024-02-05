import Link from "next/link";
import CategoryNewsCard from "./CategoryNewsCard";
import { FcNews, MdKeyboardDoubleArrowRight } from "@/lib/React_icon/reactIcon";
import { Suspense } from "react";
import SkeletonImg_c from "@/lib/skleton/SkeletonImg_c";
const CategoryNews = async ({ category }) => {
  return (
    <>
      <div className="flex items-center gap-5 font-bold text-xl capitalize my-2">
        <FcNews />
        <h2>international</h2>
      </div>
      <Suspense fallback={<SkeletonImg_c />}>
        <div className="relative">
          <div>
            {category?.splice(0, 2).map((data, indx) => (
              <CategoryNewsCard key={indx} data={data} />
            ))}
          </div>
          <Link href={"/"} className="absolute bottom-1 right-2 text-xs">
            <p className="inline-block"> see more news</p>
            <MdKeyboardDoubleArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </Suspense>
    </>
  );
};

export default CategoryNews;
