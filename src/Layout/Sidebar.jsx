import { NavLink, Outlet } from 'react-router-dom';
import sidebarRoute from '../Route/sidebarRoute';

const Sidebar = () => {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-[#0F172A]'>
      <div className='w-full lg:w-72 lg:min-h-screen border-b lg:border-r border-gray-700'>
        <div className='px-4 py-6 lg:px-6 lg:py-8'>
          <h2 className='text-3xl font-extrabold text-center lg:text-left'>
            <span className='text-blue-400'>UI</span>
            <span className='text-purple-400'>Kit</span>
          </h2>
          <nav className='mt-8 grid grid-cols-2 gap-3 lg:grid-cols-1'>
            {sidebarRoute.map((nav, idx) => (
              <NavLink
                key={idx}
                to={`/component/${nav.path}`}
                className={({ isActive }) =>
                  `relative px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-white/10 text-white before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-400 before:to-purple-400 before:rounded-full' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400'></div>
                  <span>{nav.name}</span>
                </div>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex-1 p-6 lg:p-10 bg-[#243447]">
        <div className='max-w-6xl mx-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default Sidebar