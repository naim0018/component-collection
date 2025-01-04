import { NavLink } from "react-router-dom";

// Home component - Landing page for ComponentUI library
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Hero section */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
            Component<span className="text-blue-500">UI</span>
          </h1>
          
          <p className="text-xl text-gray-300">
            A modern React component library built with Tailwind CSS
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/component" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
              Get Started
            </NavLink>
            <NavLink to="/component" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-200">
              View Components
            </NavLink>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast & Lightweight</h3>
              <p className="text-gray-400">Optimized for performance without sacrificing functionality</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Customizable</h3>
              <p className="text-gray-400">Easily modify components to match your brand</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
              <p className="text-gray-400">Simple integration with clear documentation</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Components</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-gray-400">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Contributors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
