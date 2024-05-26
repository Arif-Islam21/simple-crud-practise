const AddMango = () => {
  const handleAddMango = (e) => {
    e.preventDefault();
    const form = e.target;
    const mangoName = form.mangoName.value;
    const mangoPlace = form.mangoPlace.value;
    const mangoType = form.mangoType.value;
    const mangoColor = form.mangoColor.value;
    const mangoDate = form.mangoDate.value;
    const mangoExpire = form.mangoExpire.value;
    const mangoData = {
      mangoName,
      mangoPlace,
      mangoType,
      mangoColor,
      mangoDate,
      mangoExpire,
    };

    console.log(mangoData);
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleAddMango} className="space-y-6">
        <div className="flex justify-around">
          <input
            type="text"
            placeholder="Mango Name"
            name="mangoName"
            className="input input-bordered w-full max-w-sm"
          />
          <input
            type="text"
            placeholder="Mango Place"
            name="mangoPlace"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="flex justify-around">
          <input
            type="text"
            placeholder="Mango Type"
            name="mangoType"
            className="input input-bordered w-full max-w-sm"
          />
          <input
            type="text"
            placeholder="Mango Color"
            name="mangoColor"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="flex justify-around">
          <input
            type="text"
            placeholder="Mango Date"
            name="mangoDate"
            className="input input-bordered w-full max-w-sm"
          />
          <input
            type="text"
            placeholder="Mango Expire"
            name="mangoExpire"
            className="input input-bordered w-full max-w-sm"
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

export default AddMango;
