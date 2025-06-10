import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearUserInfo } from '../../store/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(clearUserInfo());
    localStorage.removeItem('userId'); 
    localStorage.removeItem('token');
    navigate('/signin'); 
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      <div className="text-lg font-semibold">MyApp</div>

      <div className="flex gap-4 items-center">
        {!user ? (
          <>
            <Link to="/signin" className="hover:underline">
              Sign In
            </Link>
            <Link to="/signup" className="hover:underline">
              Sign Up
            </Link>
            <Link to="/cart" className="hover:underline">
              Profile
            </Link>
            <Link to="/profile" className="hover:underline">
              Cart
            </Link>

          </>
        ) : (
          <>
            <span className="text-sm">Hello, {user.username}</span>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
            <Link to="/cart" className="hover:underline">
              Cart
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
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
