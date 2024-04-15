import { useState } from "react";

function AuthForm({ inputList }) {
  const [formState, setFormState] = useState({});

  function handleChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
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
