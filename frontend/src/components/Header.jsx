import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="header-2">
          <nav className="bg-white py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
              <div className="flex justify-between items-center">
                <a href="#" className="font-bold text-xl text-indigo-600 ">
                  Blog App
                </a>
                <button
                  className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                  id="navbar-toggle"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div
                className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                <Link
                  to={"/"}
                  className="p-2 lg:px-4 md:mx-2 text-white rounded bg-gradient-to-r from-indigo-500 to-purple-600"
                >
                  My Feed
                </Link>
                <a
                  href="#"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Discussion
                </a>
                <a
                  href="#"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  More
                </a>
                {/* <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Signup
              </a> */}
              </div>
            </div>
          </nav>
        </div>
        <header class="flex content-between items-center border-b border-grey-light py-3">
          <h1 class="font-serif text-4xl text-black ml-auto">Personal Blogs</h1>
          <div class="flex items-center ml-auto mr-5">
            <button class="font-sans flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 text-sm font-medium border-0 rounded-full py-2 px-4 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none">
              <Link
                to={"/createblog"}
                href="#"
                class="no-underline flex items-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="stroke-current mr-2"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
                Create Blog
              </Link>
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
