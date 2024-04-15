import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const [formState, setFormState] = useState({
    title: "",
    image: "",
    body: "",
  });
  // const navigate = useNavigate();

  function handleChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    // post request with data
    // setTimeout(() => {
    //   navigate("/read");
    // }, 1000);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-1/3">
        <fieldset className=" flex flex-col gap-2 align-middle">
          <legend className="mb-10 text-2xl">Add An Entry</legend>
          <label>Title</label>
          <input
            required
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
          />
          <label htmlFor="image">Image</label>
          <input
            required
            onChange={handleChange}
            type="text"
            name="image"
            id="image"
          />

          <label htmlFor="body">Text</label>
          <textarea
            rows={10}
            required
            onChange={handleChange}
            type="text"
            name="body"
            id="body"
          />
          <button type="submit">Add</button>
        </fieldset>
      </form>
    </>
  );
}

export default CreateForm;
