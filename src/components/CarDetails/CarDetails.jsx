import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const CarDetails = () => {
  const car = useLoaderData();
  const { brandName, image, name, price, rating, details, _id } = car;
  // console.log(brandName);
  const handleAddCart = () => {
    const result = {
      brandName,
      image,
      name,
      price,
    };
    fetch(`https://electronics-server-ten.vercel.app/cart/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Added Successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-14">
      <div>
        <img className="w-full" src={image} alt="car image" />
      </div>
      <div className="bg-slate-100 py-6 rounded-2xl px-5">
        <h2 className="font-semibold text-2xl text-red-500 mb-3">
          Brand: {brandName}
        </h2>
        <h3 className="font-medium  text-xl mb-3 tracking-widest">
          Model: {name}
        </h3>
        <p className="tracking-wide text-justify">
          <span className="font-medium">Details:</span> {details}
        </p>
        <div className="my-3 flex gap-4 font-semibold text-red-500">
          <p>Price: TK {price} Lakh</p>
          <p>Rating: {rating}</p>
        </div>
        <button
          onClick={handleAddCart}
          className="btn btn-primary bg-green-500 border-0 hover:bg-green-600 text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
