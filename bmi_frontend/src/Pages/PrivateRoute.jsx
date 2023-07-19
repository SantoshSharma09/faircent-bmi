import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AppContext);
  if (!isAuth) {
    <Navigate to="/" />;
  } else {
    <Navigate to="/bmi" />;
  }
  return children;
}

export default PrivateRoute;
