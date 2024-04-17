import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function GlobalLayout() {
  return (
    <div className=" bg-slate-102 min-h-screen font-mono">
      <Navbar />
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default GlobalLayout;
