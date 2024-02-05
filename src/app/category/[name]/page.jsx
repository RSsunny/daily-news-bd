import Category1 from "@/components/shared/details/Category1";
import PageLayout from "@/components/shared/layOut/PageLayout";
import Image from "next/image";
import React from "react";
import bg from "../../../../public/image/Brown Elegant Minimalist Thank You Letter.jpg";
export async function generateMetadata({ params, searchParams }, parent) {
  const { name } = params;

  let details = (
    await (
      await fetch(`http://localhost:3000/api/news/details?id=${name}`, {
        next: { revalidate: 5 },
      })
    ).json()
  )["data"];

  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: details?.title,
    description: details?.short_des,
    openGraph: {
      images: details?.img1,
    },
  };
}

async function getData(id) {
  try {
    let details = (
      await (
        await fetch(`http://localhost:3000/api/news/details?id=${id}`, {
          next: { revalidate: 5 },
        })
      ).json()
    )["data"];
    let type1 = (
      await (
        await fetch(
          `http://localhost:3000//api/news/type?type=${details?.type}`,
          { next: { revalidate: 5 } }
        )
      ).json()
    )["data"];
    return { details, type1 };
  } catch (error) {
    return { details: [], type1: [] };
  }
}
const page = async ({ params }) => {
  const { name } = params;
  const data = await getData(name);

  return (
    <PageLayout>
      <div
        className={`max-w-5xl mx-auto my-10 relative px-40 pt-56 pb-72 font-bold text-center leading-10 text-2xl`}
      >
        <Image
          alt="bg-image"
          src={bg}
          placeholder="blur"
          fill
          style={{
            zIndex: -1,
          }}
          className="h-full absolute top-10"
        />
        <div className="my-10 text-center">
          <h1 className="text-6xl font-bold ">{data?.details?.title}</h1>
        </div>

        <div>
          <p className="my-10 text-base">{data?.details?.short_des}</p>

          <p className="my-5 ">{data?.details?.long_des.slice(0, 500)}</p>

          <div className="flex items-center gap-5">
            <div className="flex-1 ">
              <p className="my-5">
                {data?.details?.long_des.slice(1000, 1300)}
              </p>
            </div>
            <div className=" flex-1 h-full">
              <Image
                src={data?.details?.img1}
                alt={data?.details?.title}
                width={500}
                height={1000}
                priority={true}
                className="h-[400px] rounded-full"
              />
            </div>
          </div>
          <p className="my-5">{data?.details?.long_des.slice(1300, 2000)}</p>

          <div className="">
            <Image
              src={data?.details?.img1}
              alt={data?.details?.title}
              width={500}
              height={1000}
              priority={true}
              className="h-[200px] w-full"
            />
          </div>
          <p className="my-5">{data?.details?.long_des.slice(2000, 2500)}</p>
        </div>
        <Category1 data={data?.type1} />
      </div>
    </PageLayout>
  );
};

export default page;
