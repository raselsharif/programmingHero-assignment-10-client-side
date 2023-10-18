import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { name, photo, _id } = brand;

  return (
    <Link to={`/detailsbrand/${_id}`}>
      <div className="border border-gray-300 text-center cursor-pointer hover:opacity-80">
        <img className="mx-auto" src={photo} alt="" />
        <h3 className="font-semibold text-[#DF331C] my-3 text-xl">{name}</h3>
      </div>
    </Link>
  );
};

export default BrandCard;
