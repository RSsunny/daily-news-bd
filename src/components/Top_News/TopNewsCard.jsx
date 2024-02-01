import Image from "next/image";

const TopNewsCard = ({ data }) => {
  const originalDate = new Date(data?.createdAt);

  const year = originalDate.getFullYear();
  const month = originalDate.getMonth() + 1;
  const day = originalDate.getDate();
  const time = `${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}-${year}`;

  return (
    <div className="flex gap-5 border-b border-black pb-8 mb-8">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-5">{data?.title}</h1>
        <p className="pb-5 border-b my-5">{data?.short_des}</p>
        <p>{data?.long_des}.......see more</p>
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
    </div>
  );
};

export default TopNewsCard;
