import Image from "next/image";

const Category1 = ({ data }) => {
  //   const { title, short_des, long_des, img1, createdAT } = data || {};
  console.log(data);
  return (
    <div>
      {data?.map((news, indx) => {
        return <div key={indx}></div>;
      })}
    </div>
  );
};

export default Category1;
