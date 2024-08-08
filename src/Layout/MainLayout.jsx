import { NavLink } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="bg-gray-700">
        <div className="text-white flex items-center justify-center p-5 gap-5">
            <NavLink to='/' className='tex-lg'>Home</NavLink>
            <NavLink to='/component' className='tex-lg'>Components</NavLink>
        </div>
    </div>
  )
}
export default MainLayout