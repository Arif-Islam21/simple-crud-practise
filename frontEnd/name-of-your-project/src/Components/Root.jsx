import { useLoaderData } from "react-router-dom";
import MangoCard from "./MangoCard";
import { useState } from "react";

const Root = () => {
  const mangoData = useLoaderData();

  const [mangos, setMango] = useState(mangoData);
  //   console.log(mangoData);

  return (
    <div className="container mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
      {mangos.map((mango) => (
        <MangoCard
          key={mango._id}
          setMango={setMango}
          mango={mango}
          mangos={mangos}
        ></MangoCard>
      ))}
    </div>
  );
};

export default Root;
