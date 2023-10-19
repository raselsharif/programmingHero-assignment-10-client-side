import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
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
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to Update it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16A34A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
            Swal.fire("Updated!", "Your file has been Updated!.", "success");
            form.reset();
          });
      }
    });
  };
  return (
    <div className="mt-12">
      <div className="max-w-3xl px-4 mx-auto pb-10 pt-5">
        <h2 className="text-center bg-green-600 py-4 text-white font-bold text-2xl mb-8">
          Update Car
        </h2>
        <form onSubmit={handleUpdateCar} className="space-y-4">
          <input
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            type="text"
            name="image"
            placeholder="Past Image URL"
            defaultValue={image}
            title="Image URL"
          />{" "}
          <br />
          <input
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            type="text"
            name="name"
            placeholder="Type Car Name"
            defaultValue={name}
            title="Model Number"
          />{" "}
          <br />
          <select
            name="brandName"
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            defaultValue={brandName}
            title="Brand"
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
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            type="text"
            name="details"
            placeholder="Details"
            defaultValue={details}
            title="Details"
          />{" "}
          <br />
          <input
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            type="text"
            name="price"
            placeholder="Price"
            defaultValue={price}
            title="Price"
          />{" "}
          <br />
          <input
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            type="text"
            name="rating"
            placeholder="Rating"
            defaultValue={rating}
            title="Rating"
          />{" "}
          <br />
          <div className="text-center ">
            <input
              className="btn inline-block bg-green-500 py-2 px-3 rounded-lg text-white font-semibold cursor-pointer hover:bg-green-600
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
