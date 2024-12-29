import Container from "../../ui/Container";
import { Link } from "react-router-dom";


const Navbar03 = () => {
  const code = `<nav className="px-4 lg:px-6 py-4 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center space-x-2" to="/">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">UI</span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Collection</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                to="/"
              >
                Features
              </Link>
              <Link 
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                to="/"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                to="/"
              >
                About
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                to="/"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                to="/"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                to="/"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                to="/"
              >
                About
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                to="/"
              >
                Contact
              </Link>
            </div>
          </nav>
        </nav>`;
  return (
    <Container code={code}>
      <div className="relative bg-white shadow dark:bg-gray-800">
        <nav className="px-4 lg:px-6 py-4 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center space-x-2" to="/">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">UI</span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Collection</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                to="/"
              >
                Features
              </Link>
              <Link 
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                to="/"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                to="/"
              >
                About
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                to="/"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                to="/"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                to="/"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                to="/"
              >
                About
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                to="/"
              >
                Contact
              </Link>
            </div>
          </nav>
        </nav>
      </div>
    </Container>
  );
};

export default Navbar03;
