import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function GlobalLayout() {
  return (
    <div className=" min-h-screen bg-slate-100 font-mono">
      <Navbar />
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default GlobalLayout;
