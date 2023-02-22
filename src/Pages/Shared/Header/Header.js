import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../../Assets/Images/BrandLogo.png";
import DarkLight from "./Dark_Light/DarkLight";

const Header = () => {
  const menuItems = (
    <>
      <Link class="p-3 text-xl hover:text-black" to="/">
        Home
      </Link>

      <Link class="p-3 text-xl hover:text-black" to="/">
        Catagory
      </Link>

      <Link class="p-3 text-xl hover:text-black" to="/">
        Collections
      </Link>

      <Link class="p-3 text-xl hover:text-black" to="/">
        Contact Us
      </Link>
    </>
  );
  return (
    <div class="flex flex-wrap">
      <section class="relative mx-auto">
        {/* <!-- navbar --> */}
        <nav class="flex justify-between bg-white text-black font-serif w-screen">
          <div class="px-5 xl:px-12 py-2 flex w-full items-center">
            <Link class="text-3xl font-bold font-heading" to="/">
              <img
                class="h-9"
                src={BrandLogo}
                style={{
                  width: "90px",
                  height: "90px",
                }}
                alt="logo"
              />
            </Link>
            {/* <!-- Nav Links --> */}
            <ul class="hidden lg:flex px-4 mx-auto  space-x-12">{menuItems}</ul>
            {/* <!-- Header Icons --> */}
            <div class="hidden lg:flex items-center space-x-5 ">
              <DarkLight></DarkLight>
              <Link class="" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
              <Link class="flex items-center" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="flex absolute -mt-5 ml-4">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </Link>
              {/* <!-- Sign In / Register      --> */}
              <Link class="flex items-center " to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          {/* <!-- Responsive navbar --> */}
          <Link class=" lg:hidden flex mr-6 items-center" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="flex absolute -mt-5 ml-4">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </Link>
          <div className="lg:hidden dropdown dropdown-left flex items-center mr-2">
            <label tabIndex={0} className="">
              <button class="relative group">
                <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                  <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                    <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                    <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                    <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                      <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                      <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                    </div>
                  </div>
                </div>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-3 shadow bg-base-100 font-serif rounded-box "
            >
              {menuItems}
              <Link class="mx-auto mb-3" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
              <DarkLight></DarkLight>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
