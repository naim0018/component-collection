
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routeGenerator";
import sidebarRoute from "./sidebarRoute";
import Home from "../Page/Home";
import AboutUs from "../Page/AboutUs";
import Component from "../Page/Component";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/component',
        element:<Component/>,
        children:routesGenerator(sidebarRoute)
      },
      {
        path:'/about-us',
        element:<AboutUs/>
      }
    ]
  }
])

