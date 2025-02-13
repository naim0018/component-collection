import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react"

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false)

  const Navbar = () => {
    const navLinks = [
      { path: '/', name: 'Home' },
      { path: '/component', name: 'Components' },
      { path: '/about-us', name: 'About Us' }
    ]

    return (
      <nav className="bg-[#0F172A] shadow-lg border-b border-white/20 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-8">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.path}
                      className={({isActive}) =>
                        `px-3 py-2 rounded-md text-lg font-medium transition-colors
                        ${isActive 
                          ? 'text-blue-500 bg-[#1E293B]' 
                          : 'text-gray-300 hover:text-blue-400 hover:bg-[#1E293B]'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:hidden absolute right-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1E293B]"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({isActive}) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${isActive 
                      ? 'text-blue-500 bg-[#1E293B]' 
                      : 'text-gray-300 hover:text-blue-400 hover:bg-[#1E293B]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default MainLayout