import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function AuthForm({ inputList, request }) {
  const navigate = useNavigate();
  const {
    context: { setToken, setIsAuthenticated, setLoadingAuthRequest },
  } = useUserContext();

  const [formState, setFormState] = useState({});

  function handleChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoadingAuthRequest(true);
    const { token } = await request(formState);
    setToken(token);
    localStorage.setItem("token", token);
    console.log("setting");
    setIsAuthenticated(true);
    setLoadingAuthRequest(false);
    navigate("/private/dashboard ");
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex flex-col gap-6">
        {inputList.map((input) => {
          return (
            <div key={input.id}>
              <label>{input.label}</label>
              <input
                className="w-full rounded border text-lg"
                onChange={handleChange}
                type={input.type}
                name={input.name}
                id={input.id}
              />
            </div>
          );
        })}
        <button type="submit">Send</button>
      </fieldset>
    </form>
  );
}

export default AuthForm;
