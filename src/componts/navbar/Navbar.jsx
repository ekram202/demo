import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <nav className=" p-4 mx-auto font-semibold">
        <div className="flex flex-wrap items-center justify-between mx-auto p-5">
          <span className="self-center text-3xl whitespace-nowrap text-white">
            <Link className="block py-2 px-3" to="">
              START FRAMEWORK
            </Link>
          </span>

          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium text-1xl text-white flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0">
              <NavLink className="block py-2 px-3" to="about">
                about
              </NavLink>
              <NavLink className="block py-2 px-3" to="portflio">
                portflio
              </NavLink>
              <NavLink className="block py-2 px-3" to="contact">
                contact
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
