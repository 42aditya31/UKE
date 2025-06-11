import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearUserInfo } from "../../store/userSlice";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(clearUserInfo());
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-black hover:text-green-600 transition";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white px-6 py-3 rounded-full shadow-md flex justify-between items-center mx-4 mt-4 relative z-50">
      {/* Logo */}
      <div className="text-3xl font-sans font-bold text-green-600"><Link to={"/"}>UKE</Link></div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FiX className="text-2xl text-black" />
          ) : (
            <FiMenu className="text-2xl text-black" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute md:static top-full rounded-b-md left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row items-center gap-6 text-sm px-6 py-4 md:py-0 md:px-0 transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <NavLink to="/home" onClick={toggleMenu} className={navLinkClasses}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={toggleMenu} className={navLinkClasses}>
          Products
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu} className={navLinkClasses}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu} className={navLinkClasses}>
          Contact
        </NavLink>

        <NavLink
          onClick={toggleMenu}
          to="/cart"
          className={({ isActive }) =>
            `flex items-center gap-1 ${
              isActive
                ? "text-green-600"
                : "text-black hover:text-green-600 transition"
            }`
          }
        >
          <FiShoppingCart className="text-lg" />
          Cart
        </NavLink>

        {!user ? (
          <NavLink
            onClick={toggleMenu}
            to="/signin"
            className="bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 transition"
          >
            Sign In
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/profile"
              onClick={toggleMenu}
              className={navLinkClasses}
            >
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
