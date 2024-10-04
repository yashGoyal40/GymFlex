// src/components/Navbar.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ navItems, activeSection, toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth Scroll Handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-50 transition-all duration-300 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="h-12">
            <img
              src={"./assets/logo.png"}
              alt="logo"
              className="h-full w-auto"
            />
          </span>
          <span className="text-xl font-bold">GymFlex</span>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`hover:text-indigo-500 transition-colors duration-300 ${
                activeSection === item.href.slice(1)
                  ? "text-indigo-500 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
        <Button
          variant="ghost"
          className="md:hidden text-gray-800 dark:text-gray-100 hover:text-indigo-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-800 py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-indigo-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={toggleDarkMode}
              className="mt-4 mx-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 w-full flex items-center justify-center sm:w-auto sm:p-5 sm:mx-2 sm:mt-0"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 sm:w-4 sm:h-4 text-gray-800" />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
