import { useRef } from "react";

import "./login.scss";
import Button from "../../Button/Button";
function LoginForm({ setlogin }) {
  const username = useRef();
  const password = useRef();
  const title = useRef();

  const handleLogin = () => {
    const valueuser = username.current.value;
    const valuepass = password.current.value;
    const data = JSON.parse(localStorage.getItem("user"));

    if (valueuser && valuepass) {
      if (valueuser === data.username && valuepass === data.password) {
        title.current.innerHTML = "Logged in successfully";
        setlogin(true);
      } else {
        username.current.style.outline = "1px solid red";
        password.current.style.outline = "1px solid red";
        title.current.innerHTML = "Incorrect username or password";
      }
    } else title.current.innerHTML = "Please complete all information";
  };

  return (
    <div className="loginform">
      <div className="form form-group">
        <div ref={title} className="title">
          Please enter login information
        </div>
        <div className="username form-group">
          <label>UserName</label>
          <input ref={username} className="form-control"></input>
        </div>
        <div className="username form-group">
          <label>Password</label>
          <input
            type="password"
            ref={password}
            className="form-control"
          ></input>
        </div>
      </div>
      <div className="submit">
        <Button inline large bg mdbold onClick={() => handleLogin()}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
