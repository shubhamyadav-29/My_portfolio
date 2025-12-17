import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-slate-100 dark:bg-slate-900 shadow px-4 sm:px-6 md:px-10 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Shubham
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  px-1 pb-1 transition
                  text-gray-800 dark:text-gray-200
                  hover:text-blue-600 dark:hover:text-blue-400
                  ${
                    isActive
                      ? "border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400"
                      : ""
                  }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}
          </ul>

          <a href={`${import.meta.env.BASE_URL}my_resume.pdf`}
  target="_blank"
  rel="noopener noreferrer" className="border border-blue-600 dark:border-blue-400 
    text-blue-600 dark:text-blue-400 
    px-3 py-1 rounded 
    hover:bg-blue-600 hover:text-white transition"
>
  Resume
</a>


          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 rounded-lg bg-slate-100 dark:bg-slate-800 p-4 space-y-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `
                  text-gray-800 dark:text-gray-200
                  hover:text-blue-600 dark:hover:text-blue-400
                  ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : ""
                  }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}
          </ul>

          <div className="flex items-center gap-4 pt-2 border-t border-slate-300 dark:border-slate-700">
            <a
              href="/my_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 dark:border-blue-400 
                text-blue-600 dark:text-blue-400 
                px-3 py-1 rounded 
                hover:bg-blue-600 hover:text-white transition"
            >
              Resume
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-700"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
