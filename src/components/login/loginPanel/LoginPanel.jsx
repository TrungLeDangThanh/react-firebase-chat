import "./loginPanel.css";

const LoginPanel = () => {
  return (
    <div className="loginPanel">
      <div className="texts">
        <span>👋</span>
        <h2>Welcome back!</h2>
      </div>
      <form action="">
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="submit" value="Sign In" className="signIn" />
      </form>
    </div>
  );
};

export default LoginPanel;
