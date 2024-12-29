import Container from "../../ui/Container";

const Navbar01 = () => {
  const code = `<nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo & Search */}
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center">
                <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                    UI
                  </span>
                </div>
                <span className="ml-2 text-base font-semibold text-gray-800 dark:text-white sm:text-lg md:text-xl lg:text-2xl">
                  Collection
                </span>
              </a>

              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    className="w-72 px-4 py-2.5 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    placeholder="Search..."
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
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
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Pricing
              </a>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-200">
                  Sign in
                </button>
                <span className="text-gray-300 dark:text-gray-600">/</span>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  Sign up
                </button>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden text-gray-500 hover:text-gray-600 dark:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

          {/* Mobile Search - Visible only on mobile */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2.5 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                placeholder="Search..."
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
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

          {/* Mobile Navigation Menu */}
          <div className="md:hidden mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Contact
              </a>
            </nav>

            <div className="mt-4 flex flex-col space-y-2">
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-lg">
                Sign in
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Sign up
              </button>
            </div>
          </div>

          {/* Categories Bar */}
          <div className="mt-4 -mx-6 px-6 py-2 border-t border-gray-100 dark:border-gray-700 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex justify-center space-x-8">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Development
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Design
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Marketing
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Business
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Lifestyle
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Photography
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Music
              </a>
            </div>
          </div>
        </div>
      </nav>`;
  return (
    <Container code={code}>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo & Search */}
            <div className="flex items-center space-x-4 lg:space-x-8">
              <a href="#" className="flex items-center">
                <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                    UI
                  </span>
                </div>
                <span className="ml-2 text-base font-semibold text-gray-800 dark:text-white sm:text-lg md:text-xl lg:text-2xl">
                  Collection
                </span>
              </a>

              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    className="w-72 lg:w-96 px-4 py-2.5 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    placeholder="Search..."
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
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
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 text-sm lg:text-base"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 text-sm lg:text-base"
              >
                Products
              </a>
              
            </div>

            {/* Right Buttons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                <button className="px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-blue-500 dark:text-gray-200">
                  Sign in
                </button>
                <span className="text-gray-300 dark:text-gray-600">/</span>
                <button className="px-4 py-2 text-sm lg:text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  Sign up
                </button>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden text-gray-500 hover:text-gray-600 dark:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

          {/* Mobile Search - Visible only on mobile */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2.5 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                placeholder="Search..."
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
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

          {/* Mobile Navigation Menu */}
          <div className="md:hidden mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                Contact
              </a>
            </nav>

            <div className="mt-4 flex flex-col space-y-2">
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-lg">
                Sign in
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Sign up
              </button>
            </div>
          </div>

          {/* Categories Bar */}
          <div className="mt-4 -mx-6 px-6 py-2 border-t border-gray-100 dark:border-gray-700 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex justify-center space-x-4 lg:space-x-8">
              <a
                href="#"
                className="text-sm lg:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Development
              </a>
              <a
                href="#"
                className="text-sm lg:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Design
              </a>
              <a
                href="#"
                className="text-sm lg:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Marketing
              </a>
              <a
                href="#"
                className="text-sm lg:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Business
              </a>
              <a
                href="#"
                className="text-sm lg:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Lifestyle
              </a>
              <a
                href="#"
                className="text-sm lg:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Photography
              </a>
              <a
                href="#"
                className="text-sm lg:text-base text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                Music
              </a>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};
export default Navbar01;
