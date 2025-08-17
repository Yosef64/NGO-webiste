import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whoWeAreLinks = [
    { name: "Overview", path: "/who-we-are/overview" },
    { name: "Background", path: "/who-we-are/background" },
    { name: "Organizational Structure", path: "/who-we-are/structure" },
  ];

  const whatWeDoLinks = [
    { name: "Education", path: "/what-we-do/education" },
    { name: "School Construction", path: "/what-we-do/school-construction" },
    {
      name: "Agricultural & Irrigation",
      path: "/what-we-do/agricultural-irrigation",
    },
    { name: "Water & Sanitation", path: "/what-we-do/water-sanitation" },
    {
      name: "Women & Girls Empowerment",
      path: "/what-we-do/women-empowerment",
    },
    { name: "Health Sector", path: "/what-we-do/health" },
    { name: "Nutrition Sector", path: "/what-we-do/nutrition" },
    { name: "Climate Change", path: "/what-we-do/climate-change" },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                HopeForward
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                Building Better Futures
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                location.pathname === "/"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700"
              }`}
            >
              Home
            </Link>

            {/* Who We Are Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("who-we-are")}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                  location.pathname.startsWith("/who-we-are")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                }`}
              >
                Who We Are
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "who-we-are" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "who-we-are" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {whoWeAreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeDropdowns}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* What We Do Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("what-we-do")}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                  location.pathname.startsWith("/what-we-do")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                }`}
              >
                What We Do
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "what-we-do" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "what-we-do" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto">
                  {whatWeDoLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeDropdowns}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/where-we-work"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                location.pathname === "/where-we-work"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700"
              }`}
            >
              Where We Work
            </Link>
            <Link
              to="/partnerships"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                location.pathname === "/partnerships"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700"
              }`}
            >
              Partnerships
            </Link>
            <Link
              to="/media"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                location.pathname === "/media"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700"
              }`}
            >
              Media
            </Link>
          </nav>

          {/* Donate Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/donate"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-orange-600 hover:to-orange-700 flex items-center space-x-2"
            >
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Donate Now</span>
              <span className="sm:hidden">Donate</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
              >
                Home
              </Link>

              <div>
                <div className="font-semibold text-gray-900 mb-2">
                  Who We Are
                </div>
                <div className="pl-4 space-y-2">
                  {whoWeAreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 text-gray-600 hover:text-blue-700"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-semibold text-gray-900 mb-2">
                  What We Do
                </div>
                <div className="pl-4 space-y-2">
                  {whatWeDoLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 text-gray-600 hover:text-blue-700"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/where-we-work"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
              >
                Where We Work
              </Link>
              <Link
                to="/partnerships"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
              >
                Partnerships
              </Link>
              <Link
                to="/media"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
              >
                Media
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for dropdowns */}
      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={closeDropdowns} />
      )}
    </header>
  );
};

export default Header;
