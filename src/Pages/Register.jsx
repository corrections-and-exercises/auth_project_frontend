import AuthForm from "../UI/AuthForm";
function Register() {
  const registerFields = [
    {
      type: "text",
      id: "firstName",
      name: "firstName",
      label: "Firstname",
    },
    {
      type: "text",
      id: "lastName",
      name: "lastName",
      label: "Lastname",
    },
    { type: "email", id: "email", name: "email", label: "Email" },
    {
      type: "password",
      id: "password",
      name: "password",
      label: "Password",
    },
  ];

  return (
    <div className="mx-auto max-w-64">
      <AuthForm inputList={registerFields} />
    </div>
  );
}
export default Register;
