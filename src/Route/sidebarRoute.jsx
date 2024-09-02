import Accordion from "../Component/Accordion/Accordion";
import Button from "../Component/Button/Button";
import Card from "../Component/Card/Card";
import CardDetails from "../Component/CardDetails/CardDetails";
import ContactUs from "../Component/ContactUs/ContactUs";
import Divider from "../Component/Divider/Divider";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Gallery from "../Component/Gallery/Gallery";
import Hero from "../Component/Hero/Hero";
import InfoCard from "../Component/InfoCard/InfoCard";
import Input from "../Component/Input/Input";
import Loading from "../Component/Loading/Loading";
import Login from "../Component/Login/Login";
import Menu from "../Component/Menu/Menu";
import Navbar from "../Component/Navbar/Navbar";
import Pricing from "../Component/Pricing/Pricing";
import ProductCollection from "../Component/ProductCollection/ProductCollection";
import Reviews from "../Component/Reviews/Reviews";
import Search from "../Component/Search/Search";
import SignUp from "../Component/SignUp/SignUp";
import Social from "../Component/Social/Social";
import Switch from "../Component/Switch/Switch";
import TextAnimation from "../Component/TextAnimation/TextAnimation";

const sidebarRoute = [
  {
    name: "Navbar",
    path: "navbar",
    element: <Navbar />,
  },
  {
    name: "SignUp",
    path: "sign-up",
    element: <SignUp />,
  },
  {
    name: "Login",
    path: "login",
    element: <Login />,
  },
  {
    name: "Hero",
    path: "hero",
    element: <Hero/>,
  },
  {
    name: "Card",
    path: "card",
    element: <Card />,
  },
  {
    name: "Info-Card",
    path: "info-card",
    element: <InfoCard/>,
  },
  {
    name: "Card-Details",
    path: "card-details",
    element: <CardDetails/>,
  },
  {
    name: "Switch",
    path: "switch",
    element: <Switch/>,
  },
  {
    name: "Button",
    path: "button",
    element: <Button/>,
  },
  {
    name: "Social",
    path: "social",
    element: <Social/>,
  },
  {
    name: "Menu",
    path: "menu",
    element: <Menu />,
  },
  {
    name: "Accordion",
    path: "accordion",
    element: <Accordion />,
  },
  {
    name: "Loading",
    path: "loading",
    element: <Loading />,
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
    name: "Contact-Us",
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    name: "Gallery",
    path: "gallery",
    element: <Gallery/>,
  },
  {
    name: "Reviews",
    path: "reviews",
    element: <Reviews/>,
  },
  {
    name: "Divider",
    path: "divider",
    element: <Divider/>,
  },
  {
    name: "Text-Animation",
    path: "text-animation",
    element: <TextAnimation/>,
  },
];
export default sidebarRoute;
