const UkraineNewsCard_r = ({ news, i }) => {
  console.log(news);
  return (
    <div className={` pb-2 mb-2 ${i <= 5 && "border-b"}`}>
      <h2 className=" font-bold ">{news?.title}</h2>

      <p className="text-xs my-2">3 MIN READ</p>
    </div>
  );
};

export default UkraineNewsCard_r;
