import { Input } from "../components/Input";
import { useState } from "react";
import { userData } from "../data/user-data";
import { useNavigate } from "react-router";
import "../assets/styles/Login.css";

export function Login() {
  const [loginKO, setLoginKO] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (formState) =>
    validateUserData(formState) ? navigate("/fake-login") : setLoginKO(true);
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="login__content">
        <h2 className="mb-4">Login</h2>
        {loginKO && <p>Details do not match!</p>}
        <LoginForm onSubmit={onSubmit}></LoginForm>
      </div>
    </div>
  );
}

function LoginForm({ onSubmit }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const clickButtonLogin = (event) => {
    event.preventDefault();
    onSubmit(formState);
  };
  const handleChange = (value, keyProp) =>
    setFormState({
      ...formState,
      [keyProp]: value,
    });
  return (
    <form>
      <div className="row">
        <div className="col-12 mt-2">
          <Input
            label="Name"
            type="text"
            value={formState.name}
            onChange={(value) => handleChange(value, "name")}
          ></Input>
        </div>
        <div className="col-12 mt-2">
          <Input
            label="email"
            type="email"
            value={formState.email}
            onChange={(value) => handleChange(value, "email")}
          ></Input>
        </div>
        <div className="col-12 mt-2">
          <Input
            label="password"
            type="password"
            value={formState.password}
            onChange={(value) => handleChange(value, "password")}
          ></Input>
        </div>
      </div>
      <div className="d-flex justify-content-start mt-3">
        <button
          className="login__button"
          type="none"
          onClick={(event) => clickButtonLogin(event)}
        >
          LOGIN
        </button>
      </div>
    </form>
  );
}

function validateUserData(formState) {
  const isNotPasswordKey = (key) => key !== "password";
  return (
    Object.keys(formState)
      .filter(isNotPasswordKey)
      .every((key) =>
        Object.keys(userData)
          .filter(isNotPasswordKey)
          .some(
            (keyUserData) =>
              formState[key].toLowerCase() ===
              userData[keyUserData].toLowerCase()
          )
      ) && formState.password === userData.password
  );
}