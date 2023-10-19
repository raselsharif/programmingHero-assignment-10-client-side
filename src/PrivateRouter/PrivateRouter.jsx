import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../Pages/Loading/Loading";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRouter;
