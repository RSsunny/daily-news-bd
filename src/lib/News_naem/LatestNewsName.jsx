const LatestNewsName = () => {
  return (
    <div className="flex text-xs">
      <p className="p-1 text-white font-bold bg-red-500">L</p>
      <p className="p-1 text-white font-bold bg-yellow-500">A</p>
      <p className="p-1 text-white font-bold bg-green-500">T</p>
      <p className="p-1 text-white font-bold bg-blue-500">E</p>
      <p className="p-1 text-white font-bold bg-orange-900">S</p>
      <p className="p-1 text-white font-bold bg-deep-purple-600">T</p>
      <div className="flex items-center ml-5 gap-2 font-bold ">
        <p className=" border-red-500 border-4 rounded-full  "></p>
        <p>To Day</p>
      </div>
    </div>
  );
};

export default LatestNewsName;
