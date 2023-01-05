import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/variables.css";
import { Home } from "./pages/Home";
import { FilterSearch } from "./pages/FilterSearch";
import { Routes, Route, useLocation } from "react-router";
import { Link } from "react-router-dom";
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
        <Route index element={<Home />}></Route>
        <Route path="/filter-search" element={<FilterSearch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
