import { NavLink, Outlet } from 'react-router-dom';
import sidebarRoute from '../Route/sidebarRoute';




const Sidebar = () => {
  return (
    <div className='flex items-start gap-10 '>
        <div className='bg-[#0F172A]/90 w-64 h-screen flex flex-col items-center justify-start gap-2 pt-10 '>
        {
            sidebarRoute.map((nav,idx)=><NavLink to={`/component/${nav.path}`} className="text-gray-200  w-full text-center" key={idx}>{nav.name}</NavLink>)
        }
        </div>
        <div className="container mx-auto my-10 ">
            <Outlet/>
        </div>
   </div>
  )
}
export default Sidebar