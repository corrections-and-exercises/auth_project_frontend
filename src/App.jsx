import { Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Read from "./Pages/Read";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import GlobalLayout from "./UI/GlobalLayout";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import SingleEntry from "./UI/SingleEntry";
import { getUser } from "./utils/authUtils";
import { useEffect } from "react";
import { useUserContext } from "./context/UserContext";
import Protect from "./UI/Protect";

function App() {
  const {
    context: {
      token,
      setToken,
      setUser,
      setIsAuthenticated,
      isAuthenticated,
      setLoadingAuthRequest,
    },
  } = useUserContext();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    token && validateToken();
    async function validateToken() {
      try {
        setLoadingAuthRequest(true);
        const { data, error } = await getUser(token);
        if (error) throw error;
        setUser(data);
        setIsAuthenticated(true);
        setLoadingAuthRequest(false);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        setLoadingAuthRequest(false);
      }
    }
  }, [token]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<GlobalLayout isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<Home />} />
          <Route path="read" element={<Read />} />
          <Route path="read/:id" element={<SingleEntry />} />

          <Route path="private" element={<Protect />}>
            <Route path="create" element={<Create />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
