import { Link } from "react-router-dom";
const DetailsCard = ({ car }) => {
  const { brandName, image, name, price, rating, details, _id } = car;
  return (
    <div className="">
      <img
        src={image}
        alt="car image"
        className="h-56 w-full shadow-lg shadow-slate-600 border-red-400 rounded-lg"
      />
      <h3 className="my-3 font-semibold text-xl text-red-600">
        Brand: {brandName}{" "}
      </h3>
      <h2 className="font-semibold mb-2 text-lg">Model: {name}</h2>
      <p className="text-lg">
        <span className="font-medium">Details: </span>
        {details ? details.slice(0, 200) : "No details"}.....
      </p>
      <div>
        <span>Price: TK {price} Lakh </span>
        <span>Rating: {rating} </span>
      </div>
      <div className="flex justify-between">
        <Link
          to={`/cardetails/${_id}`}
          className="bg-green-500 py-2 px-3 rounded-md font-semibold text-white hover:bg-green-600 inline-block my-3"
        >
          See more
        </Link>
        <Link
          to={`/updatecar/${_id}`}
          className="bg-green-500 py-2 px-3 rounded-md font-semibold text-white hover:bg-green-600 inline-block my-3"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default DetailsCard;
