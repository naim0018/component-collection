import Container from "../../ui/Container";

const Navbar02 = () => {
  const code = `<nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-lg">UI</span>
                </div>
                <span className="ml-2 sm:ml-3 text-base sm:text-xl font-semibold text-gray-800 dark:text-white">
                  Collection
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 sm:space-x-8">
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                Home
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                Products
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                Resources
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                Pricing
              </a>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              {/* Search */}
              <div className="hidden lg:block">
                <div className="relative">
                  <input
                    type="text"
                    className="w-48 sm:w-64 px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    placeholder="Search..."
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Notification */}
              <button className="hidden lg:block text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-blue-500"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
                <span className="hidden lg:block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">John Doe</span>
              </div>

              {/* Mobile menu button */}
              <button className="lg:hidden text-gray-500 hover:text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search - Only visible on mobile */}
          <div className="mt-3 sm:mt-4 lg:hidden">
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              placeholder="Search..."
            />
          </div>

          {/* Mobile Navigation - Only visible on mobile */}
          <div className="lg:hidden mt-3 sm:mt-4 border-t border-gray-100 dark:border-gray-700 pt-3 sm:pt-4">
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-1.5 sm:py-2">
                Dashboard
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-1.5 sm:py-2">
                Projects
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-1.5 sm:py-2">
                Team
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-1.5 sm:py-2">
                Reports
              </a>
            </nav>
          </div>
        </div>
      </nav>`;
  return (
    <Container code={code}>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-lg">
                    UI
                  </span>
                </div>
                <span className="ml-2 sm:ml-3 text-base sm:text-xl font-semibold text-gray-800 dark:text-white">
                  Collection
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 sm:space-x-8">
              <a
                href="#"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Products
              </a>
              <a
                href="#"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Pricing
              </a>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              {/* Search */}
              <div className="hidden lg:block">
                <div className="relative">
                  <input
                    type="text"
                    className="w-48 sm:w-64 px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    placeholder="Search..."
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Notification */}
              <button className="hidden lg:block text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-blue-500"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
                <span className="hidden lg:block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  John Doe
                </span>
              </div>

              {/* Mobile menu button */}
              <button className="lg:hidden text-gray-500 hover:text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search - Only visible on mobile */}
          <div className="mt-3 sm:mt-4 lg:hidden">
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              placeholder="Search..."
            />
          </div>

          {/* Mobile Navigation - Only visible on mobile */}
          <div className="lg:hidden mt-3 sm:mt-4 border-t border-gray-100 dark:border-gray-700 pt-3 sm:pt-4">
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              <a
                href="#"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-1.5 sm:py-2"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-1.5 sm:py-2"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-1.5 sm:py-2"
              >
                Team
              </a>
              <a
                href="#"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-1.5 sm:py-2"
              >
                Reports
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </Container>
  );
};
export default Navbar02;
