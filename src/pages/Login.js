import { Input } from "../components/Input";
import "../assets/styles/Login.css";
export function Login() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="login__content">
          <h2 className="mb-4">Login</h2>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <form>
      <div className="row">
        <div className="col-12 mt-2">
          <Input label="Name" type="text"></Input>
        </div>
        <div className="col-12 mt-2">
          <Input label="email" type="email"></Input>
        </div>
        <div className="col-12 mt-2">
          <Input name="password" label="password" type="password"></Input>
        </div>
      </div>
      <div className="d-flex justify-content-start mt-3">
          <button className="btn btn-warning login__button">LOGIN</button>
      </div>
    </form>
  );
}
