import { useState } from "react";
import Container from "../../ui/Container";

const Navbar04 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const code = `<nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UI</span>
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
                  Collection
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Contact</a>
              
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">About</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Services</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Contact</a>
                
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  Get Started
                </button>
              </nav>
            </div>
          )}
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
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UI</span>
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
                  Collection
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Contact</a>
              
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">About</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Services</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Contact</a>
                
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar04;
