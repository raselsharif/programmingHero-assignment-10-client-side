const DetailsCard = ({ car }) => {
  const { brandName, image, name, price, rating, details } = car;
  return (
    <div>
      <div>
        <img src={image} alt="car image" className="h-56 w-full" />
        <h3>Brand: {brandName} </h3>
        <h2>Model: {name}</h2>
        <p>Details: {details}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
