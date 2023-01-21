import { Link } from "react-router-dom";
import "../assets/styles/Home.css";
import { routes } from "../utils/routes";
export function Home() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2>This is a home component, choose 1 exercice to see result!</h2>
          <div className="row justify-content-start home__list-links">
            {routes
              .filter((route) => !route.index)
              .map((route, index) => (
                <div className="col-11" key={index}>
                  <Link to={route.routerLink}>{route.label}</Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
