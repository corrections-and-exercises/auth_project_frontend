import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function Protect() {
  const {
    context: { isAuthenticated },
  } = useUserContext();
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default Protect;
