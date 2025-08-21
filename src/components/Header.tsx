import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownsRef = useRef<HTMLDivElement>(null); // Ref for the container of both dropdowns

  // Effect for header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownsRef.current &&
        !dropdownsRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

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

  const handleDropdownOpen = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  const closeDropdownsAndMenu = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header
      onMouseLeave={handleDropdownClose}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/60 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Centered container for main header content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={closeDropdownsAndMenu}
          >
            <img
              src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755762779/shalom_png_2_xg3jbs.png"
              alt="Shalom Logo"
              className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1"
            ref={dropdownsRef}
          >
            <Link
              to="/"
              className={`px-4 py-2 font-medium transition-all duration-200  hover:text-blue-700 ${
                location.pathname === "/" && !isScrolled
                  ? "text-white border-b-4 border-white-700"
                  : location.pathname === "/"
                  ? "border-b-4 border-blue-700 text-gray-700 font-bold"
                  : "text-gray-700"
              }`}
            >
              Home
            </Link>

            {/* Who We Are Dropdown */}
            <div className="relative">
              <div
                onMouseEnter={() => handleDropdownOpen("who-we-are")}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer hover:bg-blue-50 hover:text-blue-700 ${
                  location.pathname.startsWith("/who-we-are")
                    ? "text-blue-700 bg-blue-50"
                    : !isScrolled && location.pathname === "/"
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                Who We Are
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "who-we-are" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeDropdown === "who-we-are" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-100 rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {whoWeAreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={handleDropdownClose}
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
                onMouseEnter={() => handleDropdownOpen("what-we-do")}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                  location.pathname.startsWith("/what-we-do")
                    ? "text-blue-700 bg-blue-50"
                    : !isScrolled && location.pathname === "/"
                    ? "text-white"
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
                <div className="absolute top-full left-0 mt-2 w-72 bg-gray-100 rounded-lg shadow-xl border border-gray-100 py-2 z-50 max-h-96 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {whatWeDoLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={handleDropdownClose}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link
              to="/where-we-work"
              className={`px-4 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 ${
                location.pathname === "/where-we-work"
                  ? "text-blue-700 bg-blue-50"
                  : !isScrolled && location.pathname === "/"
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Where We Work
            </Link>
            <Link
              to="/partnerships"
              className={`px-4 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 ${
                location.pathname === "/partnerships"
                  ? "text-blue-700 bg-blue-50"
                  : !isScrolled && location.pathname === "/"
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Partnerships
            </Link>
            <Link
              to="/media"
              className={`px-4 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 ${
                location.pathname === "/media"
                  ? "text-blue-700 bg-blue-50"
                  : !isScrolled && location.pathname === "/"
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Media
            </Link>
          </nav>

          {/* Donate Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/donate"
              className="px-5 py-3 rounded-full m-3 cursor-pointer flex items-center space-x-2 text-white font-semibold bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform "
            >
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Donate Now</span>
              <span className="sm:hidden">Donate</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 ..."
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Placed outside the centered container for full width */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" onClick={closeDropdownsAndMenu} className="block ...">
              Home
            </Link>
            {/* ... Mobile link sections for "Who We Are", "What We Do", etc. ... */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
