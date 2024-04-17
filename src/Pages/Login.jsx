import AuthForm from "../UI/AuthForm";
import { loginUser } from "../utils/authUtils";
function Login() {
  const loginFields = [
    {
      type: "text",
      id: "email",
      name: "email",
      label: "Email",
    },
    {
      type: "password",
      name: "password",
      id: "password",
      label: "Password",
    },
  ];
  return (
    <div className="mx-auto mt-10 w-1/3 ">
      <AuthForm inputList={loginFields} request={loginUser} />
    </div>
  );
}

export default Login;
