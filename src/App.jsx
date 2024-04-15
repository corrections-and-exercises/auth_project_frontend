import { Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Read from "./Pages/Read";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import GlobalLayout from "./UI/GlobalLayout";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import SingleEntry from "./UI/SingleEntry";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Home />} />
          <Route path="read" element={<Read />} />
          <Route path="read/:id" element={<SingleEntry />} />
          <Route path="create" element={<Create />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
