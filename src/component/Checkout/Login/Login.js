import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "../../Button/Button";
import "./login.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Login({ setLoginAuth, hideCheckOut }) {
  const [register, setRegister] = useState(false);
  const loginForm = useRef();

  const closeModal = () => {
    hideCheckOut(false);
  };

  return (
    <div ref={loginForm} className="login">
      <div className="close">
        <button
          className="closebtn btn btn-danger"
          onClick={() => closeModal()}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="title">GUMAX Xin Chào</div>
      <div className="typelogin">
        <div className="btnregister">
          {register ? (
            <Button inline onClick={() => setRegister(false)}>
              Register
            </Button>
          ) : (
            <Button inline bg onClick={() => setRegister(false)}>
              Register
            </Button>
          )}
        </div>
        <div className="btnlogin">
          {register ? (
            <Button inline bg onClick={() => setRegister(true)}>
              Login
            </Button>
          ) : (
            <Button inline onClick={() => setRegister(true)}>
              Login
            </Button>
          )}
        </div>
      </div>
      {register ? (
        <LoginForm setlogin={setLoginAuth} />
      ) : (
        <RegisterForm setlogin={setLoginAuth} />
      )}
    </div>
  );
}

export default Login;
