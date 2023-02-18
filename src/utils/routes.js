import { Counter } from "../pages/Counter";
import { DisplayList } from "../pages/DisplayList";
import { FilterSearch } from "../pages/FilterSearch";
import { Home } from "../pages/Home";
import { AccordionPage } from "../pages/AccordionPage";
import { ImageSliderPage } from "../pages/ImageSliderPage";
import { ChecklistPage } from "../pages/ChecklistPage";
import { Login } from "../pages/Login";
import { FakeLogin } from "../pages/FakeLogin";

export const routes = [
  {
    routerLink: "home",
    label: "Home",
    component: <Home />,
    index: true,
  },

  {
    routerLink: "filter-search",
    label: "top 10 - filter search",
    component: <FilterSearch />,
    index: false,
  },
  {
    routerLink: "counter",
    label: "top 9 - Counter",
    component: <Counter />,
    index: false,
  },
  {
    routerLink: "display-list",
    label: "top 8 - Display list",
    component: <DisplayList />,
    index: false,
  },
  {
    routerLink: "accordion",
    label: "top 7 - Accordion",
    component: <AccordionPage />,
    index: false,
  },
  {
    routerLink: "image-slider",
    label: "top 6 - Image slider",
    component: <ImageSliderPage/>,
    index: false,
  },
  {
    routerLink: "checklist",
    label: "top 5 - checklist",
    component: <ChecklistPage/>,
    index: false,
  },
  {
    routerLink: "login",
    label: "top 4 - Login Form",
    component: <Login/>,
    index: false,
  },
  {
    routerLink: "fake-login",
    component: <FakeLogin/>,
    index: false
  }
];
