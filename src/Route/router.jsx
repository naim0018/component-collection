
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { routesGenerator } from "../utils/routeGenerator";
import sidebarRoute from "./sidebarRoute";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:routesGenerator(sidebarRoute)
  }
])

