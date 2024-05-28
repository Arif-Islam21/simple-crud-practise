import { useLoaderData } from "react-router-dom";

const UpdateMango = () => {
  const data = useLoaderData();

  const {
    _id,
    mangoLink,
    mangoExpire,
    mangoDate,
    mangoName,
    mangoPlace,
    mangoColor,
    mangoType,
  } = data;
  console.log(data);

  const handleUpdateMango = (e) => {
    e.preventDefault();
    const form = e.target;
    const mangoName = form.mangoName.value;
    const mangoPlace = form.mangoPlace.value;
    const mangoType = form.mangoType.value;
    const mangoColor = form.mangoColor.value;
    const mangoDate = form.mangoDate.value;
    const mangoExpire = form.mangoExpire.value;
    const mangoLink = form.mangoLink.value;
    const mangoData = {
      mangoName,
      mangoPlace,
      mangoType,
      mangoColor,
      mangoDate,
      mangoExpire,
      mangoLink,
    };

    fetch(`http://localhost:5000/mangoData/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mangoData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleUpdateMango} className="space-y-6">
        <div className="flex justify-around">
          <input
            type="text"
            placeholder="Mango Name"
            name="mangoName"
            defaultValue={mangoName}
            className="input input-bordered w-full max-w-sm"
          />
          <input
            type="text"
            placeholder="Mango Place"
            name="mangoPlace"
            defaultValue={mangoPlace}
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="flex justify-around">
          <input
            type="text"
            placeholder="Mango Type"
            name="mangoType"
            defaultValue={mangoType}
            className="input input-bordered w-full max-w-sm"
          />
          <input
            type="text"
            placeholder="Mango Color"
            name="mangoColor"
            defaultValue={mangoColor}
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="flex justify-around">
          <input
            type="text"
            placeholder="Mango Date"
            name="mangoDate"
            defaultValue={mangoDate}
            className="input input-bordered w-full max-w-sm"
          />
          <input
            type="text"
            placeholder="Mango Expire"
            name="mangoExpire"
            defaultValue={mangoExpire}
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="flex ">
          <input
            type="text"
            placeholder="Mango Link"
            name="mangoLink"
            defaultValue={mangoLink}
            className="input input-bordered w-full mx-16"
          />
        </div>
        <input
          type="submit"
          value="Add MAngo"
          className="btn btn-secondary w-2/3 flex  mx-auto"
        />
      </form>
    </div>
  );
};

export default UpdateMango;
