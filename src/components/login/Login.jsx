import LoginPanel from "./loginPanel/LoginPanel.jsx";
import RegisterPanel from "./registerPanel/RegisterPanel.jsx";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <LoginPanel />
      <div className="separator"></div>
      <RegisterPanel />
    </div>
  );
};

export default Login;
