import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
import "../assets/styles/Home.css";
export function Home() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2>This is a home component, choose 1 exercice to see result!</h2>
          <p>
            the top 2 exercise is different the exercise top 10 web site
            since for do redirect in other pages react router it's already implemented
          </p>
          <div className="row justify-content-start home__list-links">
            {routes
              .filter((route) => !route.index)
              .map(
                (route) =>
                  route.label && (
                    <div className="col-11" key={route.id}>
                      <Link to={route.linkToNavigate}>{route.label}</Link>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
