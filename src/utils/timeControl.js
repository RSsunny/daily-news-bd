const timeControl = ({ time }) => {
  const originalDate = new Date(time);

  const year = originalDate.getFullYear();
  const month = originalDate.getMonth() + 1;
  const day = originalDate.getDate();
  const date = `${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}-${year}`;
  return date;
};

export default timeControl;
