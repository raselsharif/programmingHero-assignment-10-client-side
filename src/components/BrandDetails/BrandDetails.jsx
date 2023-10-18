import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const BrandDetails = () => {
  const brand = useLoaderData();
  console.log(brand);

  const [cars, setCars] = useState([]);
  console.log(cars);

  useEffect(() => {
    fetch(`http://localhost:5000/cars/${brand.name}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [brand.name]);
  return (
    <div>
      <div>Brand details page</div>
      <h2>Details of {brand.name}</h2>
      <div className="grid grid-cols-3 gap-3">
        {cars.map((car) => (
          <DetailsCard key={car._id} car={car}></DetailsCard>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
