import { useLoaderData } from "react-router-dom";
const CarDetails = () => {
  const car = useLoaderData();
  const { brandName, image, name, price, rating, details, _id } = car;
  console.log(brandName);
  const handleAddCart = () => {
    const result = {
      brandName,
      image,
      name,
      price,
    };
    fetch(`http://localhost:5000/cart/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img className="w-full" src={image} alt="car image" />
      </div>
      <div>
        <h2>Brand: {brandName}</h2>
        <h3>Model: {name}</h3>
        <p>Details: {details}</p>
        <div>
          <p>Price: TK {price} Lakh</p>
          <p>Rating: {rating}</p>
        </div>
        <button onClick={handleAddCart} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
