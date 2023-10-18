import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const brand = useLoaderData();
  return (
    <div>
      <div>Brand details page</div>
      <h2>Details of {brand.name}</h2>
    </div>
  );
};

export default BrandDetails;
