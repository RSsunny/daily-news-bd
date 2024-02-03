const UkraineNewsCard_l = ({ news, i }) => {
  return (
    <div className={` pb-2 mb-2 ${i <= 1 && "border-b"}`}>
      <h2 className=" font-bold ">{news?.title}</h2>
      <p className="my-2 ">{news?.short_des}</p>
      <p className="text-xs my-2">3 MIN READ</p>
    </div>
  );
};

export default UkraineNewsCard_l;
