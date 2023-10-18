import { useLoaderData } from "react-router-dom";
const CarUpdate = () => {
  const loadedCars = useLoaderData();
  const { image, name, brandName, price, rating, details, _id } = loadedCars;
  const handleUpdateCar = (e) => {
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
    fetch(`http://localhost:5000/cars/${_id}`, {
      method: "PUT",
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
        Update Car
      </h2>
      <div className="max-w-3xl px-4 mx-auto py-10">
        <form onSubmit={handleUpdateCar} className="space-y-4">
          <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="image"
            placeholder="Past Image URL"
            defaultValue={image}
          />{" "}
          <br />
          <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="name"
            placeholder="Type Car Name"
            defaultValue={name}
          />{" "}
          <br />
          <select
            name="brandName"
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            defaultValue={brandName}
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
            defaultValue={details}
          />{" "}
          <br />
          <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="price"
            placeholder="Price"
            defaultValue={price}
          />{" "}
          <br />
          <input
            className="border border-red-400 py-2 px-3 mb-2 w-full focus:outline-red-500"
            type="text"
            name="rating"
            placeholder="Rating"
            defaultValue={rating}
          />{" "}
          <br />
          <div className="text-center ">
            <input
              className="inline-block bg-green-500 py-2 px-3 rounded-lg text-white font-semibold cursor-pointer hover:opacity-80
            w-1/3
            "
              type="submit"
              value={"Update Car"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarUpdate;
