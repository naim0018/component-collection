import { NavLink, Outlet } from 'react-router-dom';
import sidebarRoute from '../Route/sidebarRoute';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-900 to-gray-800'>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className='lg:hidden fixed top-4 right-4 z-20 p-2 rounded-lg bg-gray-800 text-white'
      >
        <svg 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`lg:min-h-screen backdrop-blur-xl bg-black/20 fixed lg:relative z-10 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className='p-6'>
          <div className='flex items-center justify-center lg:justify-start gap-4'>
            <div className='h-12 w-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 p-[2px]'>
              <div className='h-full w-full rounded-2xl bg-gray-900 flex items-center justify-center'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 font-bold text-xl'>CC</span>
              </div>
            </div>
            <h2 className='text-lg font-bold text-white tracking-tight'>Component Collection</h2>
          </div>
          
          <nav className='mt-8'>
            <div className='space-y-2'>
              {sidebarRoute.map((nav, idx) => (
                <NavLink
                  key={idx}
                  to={`/component/${nav.path}`}
                  onClick={() => setIsOpen(false)}
                  className={({isActive}) =>
                    `group flex items-center w-full px-4 py-3 rounded-xl transition-all duration-300 
                    ${isActive 
                      ? 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 text-white shadow-lg' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {({isActive}) => (
                    <div className='flex items-center gap-3 w-full'>
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300
                        group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500
                        ${isActive 
                          ? 'bg-gradient-to-r from-pink-500 to-blue-500' 
                          : 'bg-gray-600'
                        }`
                      }/>
                      <span className='flex-1'>{nav.name}</span>
                      <div className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-[5]"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className="flex-1 p-6 lg:p-10">
        <div className='max-w-6xl mx-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default Sidebar