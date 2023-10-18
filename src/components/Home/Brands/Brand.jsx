import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import { Link } from "react-router-dom";

const Brand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      <h2 className="my-2">Our Brands</h2>
      <Link
        to={"/createbrand"}
        className="bg-green-500 py-2 px-3 font-semibold text-white"
      >
        Add New Brand
      </Link>
      <div className="grid grid-cols-3 gap-5  py-8 px-4 ">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brand;
