import Accordion from "../Component/Accordion/Accordion";
import Card from "../Component/Card/Card";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Input from "../Component/Input/Input";
import Pricing from "../Component/Pricing/Pricing";
import ProductCollection from "../Component/ProductCollection/ProductCollection";
import Search from "../Component/Search/Search";
import SignUp from "../Component/SignUp/SignUp";
import SignIn from "../Component/SingIn/SignIn";

const sidebarRoute = [
  {
    name: "Card",
    path: "card",
    element: <Card />,
  },
  {
    name: "Accordion",
    path: "accordion",
    element: <Accordion />,
  },
  {
    name: "ErrorPage",
    path: "error-page",
    element: <ErrorPage />,
  },
  {
    name: "Input",
    path: "input",
    element: <Input />,
  },
  {
    name: "SignIn",
    path: "signin",
    element: <SignIn />,
  },
  {
    name: "Pricing",
    path: "pricing",
    element: <Pricing />,
  },
  {
    name: "ProductCollection",
    path: "product-collection",
    element: <ProductCollection />,
  },
  {
    name: "Search",
    path: "search",
    element: <Search />,
  },
  {
    name: "SignUp",
    path: "signup",
    element: <SignUp />,
  },
];

export default sidebarRoute;
