import { Link } from "react-router-dom";
import "../assets/styles/Home.css";
export function Home() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2>This is a home component, choose 1 exercice to see result!</h2>
          <div className="row justify-content-start home__list-links">
            <div className="col-11">
              <Link to="filter-search">top 10 - filter search</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
