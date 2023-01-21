import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/variables.css";
import { Routes, Route, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
function App() {
  const location = useLocation();
  return (
    <div className="container">
      {location.pathname !== "/" && (
        <div className="row justify-content-start">
          <div className="col-7">
            <Link to="/">Home</Link>
          </div>
        </div>
      )}
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.index ? "/" : route.routerLink}
            index={route.index}
            element={route.component}
          ></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
