const AddProduct = () => {
  const handleAddCar = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const details = form.details.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const carInfo = {
      image,
      name,
      brandName,
      price,
      rating,
      details,
    };
    console.log(carInfo);
    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <div>
      <h2 className="text-center bg-red-500 py-3 text-white font-bold text-2xl mb-8">
        Add Car
      </h2>
      <div className="max-w-3xl px-4 mx-auto py-10">
        <form onSubmit={handleAddCar} className="space-y-4">
          <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="image"
            placeholder="Past Image URL"
          />{" "}
          <br />
          <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="name"
            placeholder="Type Car Name"
          />{" "}
          <br />
          {/* <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="brandName"
            placeholder="Type Car Brand"
          />{" "} */}
          <select
            name="brandName"
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
          >
            <option value="Audi">Audi</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
            <option value="BMW">BMW</option>
          </select>
          <br />
          <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="details"
            placeholder="Details"
          />{" "}
          <br />
          <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="price"
            placeholder="Price"
          />{" "}
          <br />
          <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="rating"
            placeholder="Rating"
          />{" "}
          <br />
          <div className="text-center ">
            <input
              className="inline-block bg-green-500 py-2 px-3 rounded-lg text-white font-semibold cursor-pointer hover:opacity-80
              w-1/3
              "
              type="submit"
              value={"Add Car"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
