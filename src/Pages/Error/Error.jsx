import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>The Route not found</h2>
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
