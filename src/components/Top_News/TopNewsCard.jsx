import timeControl from "@/utils/timeControl";
import Image from "next/image";
import Link from "next/link";

const TopNewsCard = ({ data }) => {
  const time = timeControl({ time: data?.createdAt });

  return (
    <Link
      href={`/newsDetails?id=${data?.id}`}
      className="flex gap-5 border-b border-black pb-8 mb-8 cursor-pointer"
    >
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-5">{data?.title}</h1>
        <p className="pb-5 border-b my-5">{data?.short_des}</p>
        <p>{data?.long_des.slice(0, 200)}.......see more</p>
      </div>
      <div className="flex-1">
        <Image
          src={data?.img1}
          width={500}
          height={500}
          alt={`${data?.title}`}
          className="h-[350px]"
        />
        <div className="flex items-center justify-between">
          <h1>{data?.author}</h1>
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default TopNewsCard;
