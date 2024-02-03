import Image from "next/image";

const UkraineNewsCard_m = ({ news }) => {
  return (
    <div className="">
      <Image
        src={news?.img1}
        alt={news?.title}
        width={500}
        height={500}
        className="h-[400px] w-full"
      />
      <p className="my-2 text-xl font-bold">{news?.title}</p>
      <p className="text-sm">{news?.short_des}</p>
      <p className="text-xs my-2">3 MIN READ</p>
    </div>
  );
};

export default UkraineNewsCard_m;
