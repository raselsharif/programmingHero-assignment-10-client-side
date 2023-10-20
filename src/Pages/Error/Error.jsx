import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        className="w-48 h-48 rounded-full shadow-xl shadow-red-500"
        src="https://t3.ftcdn.net/jpg/05/67/69/10/360_F_567691000_yXCtbN5PAWMG2J7nanWF3rByswrlCeq6.jpg"
        alt="opps image"
      />
      <h2 className="my-5 text-2xl font-semibold">The page not found</h2>
      <Link
        className="bg-green-500 py-2 px-3 font-bold text-white rounded-xl hover:bg-green-600"
        to={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
