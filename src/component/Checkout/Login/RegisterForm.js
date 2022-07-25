import { useRef } from "react";
import Button from "../../Button/Button";
import "./login.scss";

function RegisterForm() {
  const nameE = useRef();
  const passE = useRef();
  const rePassE = useRef();
  const title = useRef();

  const handleRegister = () => {
    let usernameU = nameE.current.value;
    let passwordE = passE.current.value;
    const repasswordE = rePassE.current.value;

    if (usernameU && passwordE && repasswordE) {
      if (passwordE === repasswordE) {
        const user = {
          username: usernameU,
          password: passwordE,
        };
        const data = JSON.stringify(user);
        localStorage.setItem("user", data);
        title.current.innerHTML = "Sign up successfully";
      } else {
        title.current.innerHTML = "Passwords do not match";
        nameE.current.style.outline = "1px solid red";
        passE.current.style.outline = "1px solid red";
        rePassE.current.style.outline = "1px solid red";
      }
    } else {
      title.current.innerHTML = "Please complete all information";
      nameE.current.style.outline = "1px solid red";
      passE.current.style.outline = "1px solid red";
      rePassE.current.style.outline = "1px solid red";
    }
  };
  return (
    <div className="registerform">
      <div className="form form-group">
        <div ref={title} className="title">
          Please enter registration information
        </div>
        <div className="username form-group">
          <label>UserName</label>
          <input ref={nameE} className="form-control" required></input>
        </div>
        <div className="password form-group">
          <label>Password</label>
          <input
            ref={passE}
            className="form-control"
            type="password"
            required
          ></input>
        </div>
        <div className="password form-group">
          <label>Re-Password</label>
          <input
            ref={rePassE}
            className="form-control"
            type="password"
            required
          ></input>
        </div>
      </div>
      <div className="submit">
        <Button inline large mdbold bg onClick={() => handleRegister()}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default RegisterForm;
