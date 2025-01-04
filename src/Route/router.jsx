import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routeGenerator";
import sidebarRoute from "./sidebarRoute";
import Home from "../Page/Home";
import AboutUs from "../Page/AboutUs";
import Component from "../Page/Component";
import Navbar from "../Component/Navbar/Navbar";

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
        children:[
          {
            index: true,
            element: <Navbar/>
          },
          ...routesGenerator(sidebarRoute)
        ]
      },
      {
        path:'/about-us',
        element:<AboutUs/>
      }
    ]
  }
])
