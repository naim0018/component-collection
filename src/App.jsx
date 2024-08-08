import { Outlet } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"

function App() {
 

  return (
    <>
      <MainLayout/>
      <Outlet/>
    </>
  )
}

export default App
