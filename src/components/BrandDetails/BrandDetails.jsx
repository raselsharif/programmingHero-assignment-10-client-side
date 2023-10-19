import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import NoFound from "../NoFound/NoFound";
import Advertisement from "../Advertisement/Advertisement";

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
    <div className="my-10">
      <Advertisement></Advertisement>
      <h2 className="text-center bg-green-500 py-3 font-semibold text-2xl text-white">
        {brand.name}
      </h2>

      {cars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 px-3">
          {cars.map((car) => (
            <DetailsCard key={car._id} car={car}></DetailsCard>
          ))}
        </div>
      ) : (
        <NoFound></NoFound>
      )}
    </div>
  );
};

export default BrandDetails;
