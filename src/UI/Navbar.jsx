import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center gap-20 pt-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/read">Read</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
        {/* <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
