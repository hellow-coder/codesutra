// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="flex justify-between items-center p-4">
//       <div className="flex items-center">
//         {/* Left side with Brand Name and Nav Items */}
//         <span className="mr-4">CodeSutra</span>
//         <ul className="flex space-x-4">
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//       <div>
//         {/* Right side with Login button */}
//         <button>Login</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/developer", label: "Developers" },
    { path: "/explore", label: "Explore" },
    { path: "/feature", label: "Features" },
    { path: "/primium", label: "Premium" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 tracking-wide"
        >
          TroCode
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-700 hover:text-indigo-600 transition ${
                location.pathname === link.path
                  ? "text-indigo-600 font-semibold"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <Link
          to="/login"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
