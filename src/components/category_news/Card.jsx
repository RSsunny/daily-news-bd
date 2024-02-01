import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="">
      <Image src={item?.img1} alt={item?.title} width={500} height={500} />
      <h1>{item?.title}</h1>
    </div>
  );
};

export default Card;
