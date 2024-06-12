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

    // https://i.postimg.cc/h4md6Tny/1.png
    // https://i.postimg.cc/Wb6JbVh0/2.png
    // https://i.postimg.cc/zfMyPXcY/3.png
    // https://i.postimg.cc/LshqTZvV/4.png
    // https://i.postimg.cc/QtTFLG29/5.png
    // https://i.postimg.cc/jSMwPh65/6.png

    console.log(mangoData);
    fetch(
      "https://coffee-store-server-with-auth-main-86oe4f4xx.vercel.app//mangoData",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(mangoData),
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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
        <div className="flex ">
          <input
            type="text"
            placeholder="Mango Link"
            name="mangoLink"
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

export default AddMango;
