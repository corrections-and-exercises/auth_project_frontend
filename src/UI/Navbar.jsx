import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const {
    context: { setToken, setUser, setIsAuthenticated, isAuthenticated },
  } = useUserContext();

  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  }
  return (
    <nav>
      <ul className="flex justify-center gap-20 pt-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/read">Read</NavLink>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <NavLink to="/private/create">Create</NavLink>
            </li>
            <li>
              <NavLink to="/private/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
