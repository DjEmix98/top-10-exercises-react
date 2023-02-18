import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/variables.css";
import { Routes, Route, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useEffect, useRef } from "react";
function App() {
  const location = useLocation();
  const previusPathName = useRef(location.pathname);
  useEffect(() => {
    handleLocationChange(location, previusPathName.current);
    previusPathName.current = location.pathname;
  }, [location]);
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

function handleLocationChange(location, previusPathName) {
  const body = document.getElementsByTagName("body")[0];
  if (location.pathname.includes("login")) {
    body.className = `dark-mode`;
  } else if (!previusPathName.includes("login")) {
    body.className = ``;
  } else {
    body.className = `light-mode`;
  }
}

export default App;
