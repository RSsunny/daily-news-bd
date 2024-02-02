import timeControl from "@/utils/timeControl";
import Image from "next/image";

const TypeCard2 = ({ data }) => {
  const time = timeControl({ time: data?.createdAt });
  return (
    <div className="flex flex-row-reverse  gap-5 mb-3 pb-3 border-b">
      <Image
        src={data?.img1}
        alt={data?.title}
        width={100}
        height={100}
        className="flex-1"
      />
      <div className="flex-1">
        <p className="font-bold text-sm">{data?.title}</p>
        <p className="text-xs mb-3">{data?.short_des}</p>
        <div className="flex text-xs gap-5">
          <p>{data?.author}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default TypeCard2;
