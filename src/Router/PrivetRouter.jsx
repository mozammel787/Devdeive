/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Lading from "../Components/Lading";

const PrivetRouter = ({ children }) => {
    const { user, lading } = useAuth();
    const location = useLocation();
  
    if (lading) {
      return <Lading />;
    }
  
    if (user) {
      return children;
    }
    return <Navigate to={"/signin"} state={{ from: location }} replace />;
  };
export default PrivetRouter;