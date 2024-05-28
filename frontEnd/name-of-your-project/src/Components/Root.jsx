import { useLoaderData } from "react-router-dom";
import MangoCard from "./MangoCard";

const Root = () => {
  const mangoData = useLoaderData();
  //   console.log(mangoData);

  return (
    <div className="container mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
      {mangoData.map((mango) => (
        <MangoCard key={mango._id} mango={mango}></MangoCard>
      ))}
    </div>
  );
};

export default Root;
