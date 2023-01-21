import { Counter } from "../pages/Counter";
import { FilterSearch } from "../pages/FilterSearch";
import { Home } from "../pages/Home";

export const routes = [
  {
    routerLink: "home",
    label: "Home",
    component: <Home />,
    show: false,
    index: true,
  },

  {
    routerLink: "filter-search",
    label: "top 10 - filter search",
    component: <FilterSearch />,
    show: true,
    index: false,
  },
  {
    routerLink: "counter",
    label: "top 9 - Counter",
    component: <Counter />,
    show: true,
    index: false,
  },
];
