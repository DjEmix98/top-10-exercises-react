import "../assets/styles/Login.css";
import "../assets/styles/FakeLogin.css";
import { useNavigate } from "react-router";
export function FakeLogin() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="login__content fake-login__content">
        <h2 className="fake-login__title">
          Welcome,{" "}
          <span className="fake-login__username ms-1">Emmanuel Bellissimo</span>
        </h2>
        <div className="d-flex justify-content-start mt-5">
          <button
            className="login__button"
            type="none"
            onClick={() => navigate("/login")}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}
