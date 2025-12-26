import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-amber-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="font-bold text-xl">B</span>
            </div>
            <h1 className="text-xl font-bold">Shree Balaji Enterprise</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg hover:bg-white/10 transition ${
                  location.pathname === item.path ? "bg-white/20" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919427378493"
              className="ml-4 bg-white text-amber-600 px-6 py-2 rounded-lg 
                       font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <FiPhone /> Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-amber-700">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg hover:bg-white/10 transition ${
                    location.pathname === item.path ? "bg-white/20" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+919427378493"
                onClick={() => setIsOpen(false)}
                className="block mt-4 bg-white text-amber-600 px-4 py-3 rounded-lg 
                         font-semibold text-center hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                <FiPhone /> Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}