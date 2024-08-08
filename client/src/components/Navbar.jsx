import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNotificationStore } from "../lib/notificationStore";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  useEffect(() => {
    if (currentUser) fetch();
  }, [currentUser, fetch]);

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center h-16 px-4 lg:h-[100px] lg:pr-0 bg-white">
        <div className="flex items-center lg:w-[60%]">
          <Link
            className="flex gap-2 text-xl lg:text-[20px] transition-all duration-400 ease-in-out hover:scale-105"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <img className="w-6 lg:w-[28px]" src="/logo.png" alt="" />
            <span className="font-bold">Real Estate</span>
          </Link>
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:mr-8">
            <NavLinks handleNavigation={handleNavigation} />
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="text-2xl block lg:hidden"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <div className="hidden lg:flex lg:w-[40%] lg:items-center lg:justify-end lg:bg-[#fcf5f3] lg:h-full lg:absolute lg:right-0">
          <AuthButtons currentUser={currentUser} handleNavigation={handleNavigation} number={number} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden z-50">
          <NavLinks handleNavigation={handleNavigation} />
          <AuthButtons currentUser={currentUser} handleNavigation={handleNavigation} number={number} />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ handleNavigation }) => (
  <div className="flex flex-col lg:flex-row lg:gap-5 items-center">
    {['Home', 'Explore', 'About'].map((item) => (
      <Link
        key={item}
        className="p-2 lg:p-0 transition-all duration-400 ease-in-out hover:scale-105"
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        onClick={() => handleNavigation(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
      >
        {item}
      </Link>
    ))}
  </div>
);

const AuthButtons = ({ currentUser, handleNavigation, number }) => (
  <div className="flex justify-between lg:flex-row">
    {currentUser ? (
      <>
        <div className="py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105 flex items-center gap-2">
          <img
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
            src={currentUser.avatar || "/noAvatar.png"}
            alt=""
          />
          <span>{currentUser.username}</span>
        </div>
        <Link
          className="bg-yellow-400 py-2 px-4 m-2 lg:p-[10px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105 relative flex items-center justify-center"
          to="/ProfilePage"
          onClick={() => handleNavigation('/ProfilePage')}
        >
          <span className="text-center">Profile</span>
          {number > 0 && (
            <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {number}
            </span>
          )}
        </Link>
      </>
    ) : (
      <>
        <Link
          className="py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105"
          to="/login"
          onClick={() => handleNavigation('/login')}
        >
          Sign in
        </Link>
        <Link
          className="bg-yellow-400 py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105"
          to="/register"
          onClick={() => handleNavigation('/register')}
        >
          Sign up
        </Link>
      </>
    )}
  </div>
);

export default Navbar;
