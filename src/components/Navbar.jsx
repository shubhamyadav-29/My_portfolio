import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-400">
        Shubham
      </h1>

      {/* Menu */}
      <ul className="flex gap-8 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400"
              : "hover:text-blue-400"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400"
              : "hover:text-blue-400"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400"
              : "hover:text-blue-400"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400"
              : "hover:text-blue-400"
          }
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
