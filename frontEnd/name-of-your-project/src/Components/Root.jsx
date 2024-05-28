import { useLoaderData } from "react-router-dom";
import MangoCard from "./MangoCard";

const Root = () => {
  const mangoData = useLoaderData();
  //   console.log(mangoData);

  return (
    <div>
      {mangoData.map((mango) => (
        <MangoCard key={mango._id} mango={mango}></MangoCard>
      ))}
    </div>
  );
};

export default Root;
