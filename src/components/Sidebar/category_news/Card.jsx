import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="">
      <Image src={item?.img1} alt={item?.title} width={500} height={500} />
      <h1 className="mb-2 pb-2 border-b">{item?.title}</h1>
      <h1>{item?.short_des}</h1>
    </div>
  );
};

export default Card;
