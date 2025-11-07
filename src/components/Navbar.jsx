import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="flex justify-between md:items-center md:px-20 bg-gray-800 text-white relative">
        <span className="text-2xl pl-8 py-4 font-bold">Portfolio</span>


        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } mr-8 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
        >
          <li className="md:text-xl p-1">
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="md:text-xl p-1"> 
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className=" md:text-xl p-1">
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li className="md:text-xl p-1">
            <NavLink to="/skills" onClick={closeMenu}>
              Skills
            </NavLink>
          </li>
          <li className="md:text-xl p-1">
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        {menuOpen ? (
          <RxCross2
            onClick={closeMenu}
            className="md:hidden absolute right-4 top-6 size-6 transition-all duration-300 cursor-pointer"
          />
        ) : (
          <FaBarsStaggered
            className="md:hidden absolute right-4 top-6 size-6 transition-all duration-300 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
