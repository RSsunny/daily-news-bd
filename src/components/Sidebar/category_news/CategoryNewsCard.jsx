import Card from "./Card";

const CategoryNewsCard = ({ data }) => {
  return (
    <div className="border-b pb-8 mb-5">
      {data?.news_list?.splice(0, 1).map((item, indx) => (
        <Card key={indx} item={item} />
      ))}
    </div>
  );
};

export default CategoryNewsCard;
