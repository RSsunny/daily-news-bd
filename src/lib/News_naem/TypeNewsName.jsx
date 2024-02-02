const TypeNewsName = ({ type }) => {
  return (
    <div className="flex text-xs my-2">
      <p className="p-1 text-white font-bold bg-red-500">T</p>
      <p className="p-1 text-white font-bold bg-yellow-500">Y</p>
      <p className="p-1 text-white font-bold bg-green-500">P</p>
      <p className="p-1 text-white font-bold bg-blue-500">E</p>

      <div className="flex items-center ml-5 gap-2 font-bold ">
        <p className=" border-red-500 border-4 rounded-full  "></p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default TypeNewsName;
