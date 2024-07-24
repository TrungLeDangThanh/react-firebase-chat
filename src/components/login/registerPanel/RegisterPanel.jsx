import { useState } from "react";
import "./registerPanel.css";

const RegisterPanel = () => {
  const [avatar, setAvatar] = useState({
    url: "",
  });

  const handleAvatar = (avatar) => {
    setAvatar({
      url: URL.createObjectURL(avatar.target.files[0]),
    });
  };

  return (
    <div className="registerPanel">
      <div className="texts">
        <span>🤔</span>
        <h2>New to EasyChat?</h2>
      </div>
      <form action="">
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
        />
        <label htmlFor="file">
          <img src={avatar.url || "/avatar.png"} alt="" className="avatar" />
          Upload your avatar
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleAvatar}
        />
        <input type="submit" value="Sign Up" className="signUp" />
      </form>
    </div>
  );
};

export default RegisterPanel;
