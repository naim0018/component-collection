import { NavLink } from "react-router-dom"

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          <h1 className="text-5xl font-bold text-center mb-4">
            About Our React UI Collection
          </h1>
          <div className="w-32 h-1 mx-auto bg-blue-600 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto bg-gray-800/50 p-8 rounded-2xl shadow-2xl">
          <p className="text-lg mb-8 leading-relaxed text-gray-300">
            Welcome to our free React UI components library! We provide a comprehensive collection of ready-to-use React components to help developers build beautiful and functional user interfaces quickly and efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">What We Offer</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Free, Open-Source Components
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Modern Design Patterns
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Responsive Layouts
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Customizable Themes
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Regular Updates
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Component Categories</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Navigation Components
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Form Elements
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Data Display
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Layout Components
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Interactive Elements
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-8 text-center text-blue-400">Why Choose Our Components?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Developer Experience</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Easy Integration
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Well-Documented
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    TypeScript Support
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Quality Assurance</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Thoroughly Tested
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Performance Optimized
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Accessibility Focused
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl mb-8 text-gray-300">Start building your next project with our free components!</p>
            <div className="space-x-6">
              <NavLink 
                to="/component/navbar"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Browse Components
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs