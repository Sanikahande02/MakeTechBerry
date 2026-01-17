import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent animate-in fade-in slide-in-from-top-4 duration-500">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        <Link
          to="/"
          className="flex items-center text-xl font-semibold text-slate-900"
        >
          <img 
            src="./public/images/logo.png" 
            className="w-12 h-12 object-contain" 
            alt="MakeTechBerry Logo" 
          />
          <span className="ml-2 text-2xl font-bold text-[#373771]">
            MakeTechBerry
          </span>
        </Link>

        {/* Center Pill Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-white/95 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-white/50 absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out hover:scale-105 overflow-hidden">

          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
            { name: "Register", path: "/register" }
          ].map((item) => {
            const isActive = currentPath === item.path || (item.path === "/" && currentPath === "/");
            const isHovered = hoveredButton === item.name;
            const shouldShowBg = isHovered || (isActive && hoveredButton === null);
            
            return (
              <Link
                key={item.name}
                to={item.path}
                onMouseEnter={() => setHoveredButton(item.name)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full 
                           transition-all duration-300 ease-out
                           ${shouldShowBg 
                             ? "bg-[#9062FF] text-white" 
                             : "text-slate-700 hover:text-slate-900"
                           }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Button */}
        <Link
          to="/admin/login"
          className="px-6 py-2.5 text-sm font-semibold rounded-full ml-auto border-2 border-[#9062FF]
                     text-[#9062FF] transition-all duration-300 ease-out shadow-sm
                     hover:bg-[#9062FF] hover:text-white hover:shadow-md hover:scale-105"
        >
          Admin Login
        </Link>

      </nav>
    </header>
  );
};

export default Navbar;
