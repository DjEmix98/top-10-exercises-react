import { Counter } from "../pages/Counter";
import { DisplayList } from "../pages/DisplayList";
import { FilterSearch } from "../pages/FilterSearch";
import { Home } from "../pages/Home";
import { AccordionPage } from "../pages/AccordionPage";
import { ImageSliderPage } from "../pages/ImageSliderPage";
import { ChecklistPage } from "../pages/ChecklistPage";
import { Login } from "../pages/Login";
import { FakeLogin } from "../pages/FakeLogin";
import { PrintDataRestAPI } from "../pages/PrintDataRestAPIPage";
import { PageNotFound } from "../pages/PageNotFound";
import { RouterWithParams } from "../pages/RouterWithParams";

export const routes = [
  {
    routerLink: "/",
    label: "Home",
    component: <Home />,
    index: true,
    id: 1,
    linkToNavigate: "/",
  },

  {
    routerLink: "filter-search",
    label: "top 10 - filter search",
    component: <FilterSearch />,
    index: false,
    id: 2,
    linkToNavigate: "filter-search",
  },
  {
    routerLink: "counter",
    label: "top 9 - Counter",
    component: <Counter />,
    index: false,
    id: 3,
    linkToNavigate: "counter",
  },
  {
    routerLink: "display-list",
    label: "top 8 - Display list",
    component: <DisplayList />,
    index: false,
    id: 4,
    linkToNavigate: "display-list"
  },
  {
    routerLink: "accordion",
    label: "top 7 - Accordion",
    component: <AccordionPage />,
    index: false,
    id: 5,
    linkToNavigate: "accordion"
  },
  {
    routerLink: "image-slider",
    label: "top 6 - Image slider",
    component: <ImageSliderPage />,
    index: false,
    id: 6,
    linkToNavigate: "image-slider"
  },
  {
    routerLink: "checklist",
    label: "top 5 - checklist",
    component: <ChecklistPage />,
    index: false,
    id: 7,
    linkToNavigate: "checklist"
  },
  {
    routerLink: "login",
    label: "top 4 - Login Form",
    component: <Login />,
    index: false,
    id: 8,
    linkToNavigate: "login"
  },
  {
    routerLink: "fake-login",
    component: <FakeLogin />,
    index: false,
    id: 9,
    linkToNavigate: "fake-login"
  },
  {
    routerLink: "rest-api",
    label: "top 3 - Print data from REST API",
    component: <PrintDataRestAPI />,
    index: false,
    id: 10,
    linkToNavigate: "rest-api"
  },
  {
    routerLink: "*",
    label: "",
    component: <PageNotFound />,
    index: false,
    id: 11,
    linkToNavigate: "*"
  },
  {
    routerLink: "page-with-param/:param?", //<-- parametro opzionale nella rotta
    label: "top 2 - Page with optional param",
    component: <RouterWithParams />,
    index: false,
    id: 12,
    linkToNavigate: "page-with-param"
  },
];
