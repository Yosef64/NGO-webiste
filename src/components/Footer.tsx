import { Link } from "react-router-dom";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
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

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">HopeForward</h3>
                <p className="text-gray-300 text-sm">Building Better Futures</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering communities worldwide through sustainable development,
              education, healthcare, and economic opportunities that create
              lasting positive change.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Hope Street</p>
                  <p>Global City, GC 12345</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">info@hopeforward.org</span>
              </div>
            </div>
          </div>

          {/* Who We Are Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Who We Are</h4>
            <ul className="space-y-3">
              {whoWeAreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">What We Do</h4>
            <ul className="space-y-3">
              {whatWeDoLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {whatWeDoLinks.length > 6 && (
                <li className="pt-2">
                  <Link
                    to="/what-we-do/nutrition"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline"
                  >
                    View All Programs →
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Connect With Us
            </h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Link
                  to="/where-we-work"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline"
                >
                  Where We Work
                </Link>
              </li>
              <li>
                <Link
                  to="/partnerships"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  to="/media"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline"
                >
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-semibold hover:underline"
                >
                  Make a Donation
                </Link>
              </li>
            </ul>

            {/* Social Media Links */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-4">
                Follow Our Impact
              </h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="bg-gray-700 p-2.5 rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Call-to-Action Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                Your Support Changes Lives
              </h3>
              <p className="text-orange-100 text-lg">
                Join thousands of donors making a difference in communities
                worldwide.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/donate"
                className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50 text-center"
              >
                Donate Today
              </Link>
              <Link
                to="/partnerships"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 text-center"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 HopeForward NGO. All rights reserved.</p>
              <p className="mt-1">
                Registered 501(c)(3) Non-Profit Organization | Tax ID:
                12-3456789
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Financial Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
