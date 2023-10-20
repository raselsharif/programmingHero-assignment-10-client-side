import Swal from "sweetalert2";

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
    // console.log(carInfo);
    fetch("https://electronics-server-ten.vercel.app/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Car Added Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });
  };
  return (
    <div className="mt-12">
      <div className="max-w-3xl px-4 mx-auto pb-10 pt-5">
        <h2 className="text-center bg-green-600 py-4 text-white font-bold text-2xl mb-8">
          Add Car
        </h2>
        <form onSubmit={handleAddCar} className="space-y-4">
          <input
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            type="text"
            name="image"
            placeholder="Past Image URL"
            required
          />{" "}
          <br />
          <input
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            type="text"
            name="name"
            placeholder="Type Car Name"
            required
          />{" "}
          <br />
          <select
            name="brandName"
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            required
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
            required
          />{" "}
          <br />
          <input
            className="border border-green-400  py-2 px-3 mb-2 w-full focus:outline-red-300"
            type="text"
            name="price"
            placeholder="Price"
            required
          />{" "}
          <br />
          <input
            className="border border-green-400 py-2 px-3 mb-2 w-full focus:outline-red-300"
            type="text"
            name="rating"
            placeholder="Rating"
            required
          />{" "}
          <br />
          <div className="text-center ">
            <input
              className="btn inline-block bg-green-500 py-2 px-3 rounded-lg text-white font-semibold cursor-pointer hover:bg-green-600
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
