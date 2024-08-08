"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Article 1", url: "/" },
    { label: "Article 2", url: "/article-2" },
  ];
  const actionButtons = [
    { label: "Log in", url: "/auth/login" },
    { label: "Start free trial", url: "/auth/sign-up" },
  ];

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between  sm:px-6 lg:px-8 h-16">
        <div className="logo-link flex items-center z-50 px-6">
          <div className="shrink-0 flex items-center">
            <Link href={"/"} className="flex items-center gap-1">
              <svg
                width="24"
                height="31"
                viewBox="0 0 24 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.4436 3.87236C16.8283 2.83592 15.676 1.9674 14.3526 1.37761C13.0229 0.785021 11.473 0.452029 10.0131 0.526416L10.0543 1.33431C11.3716 1.26718 12.7951 1.56913 14.0233 2.1165C15.2578 2.66668 16.248 3.44316 16.7481 4.28534L17.4436 3.87236ZM15.6625 5.08395C15.1914 4.29043 14.3161 3.63462 13.3235 3.19224C12.3245 2.74705 11.1591 2.49616 10.0583 2.55225L10.0995 3.36014C11.0577 3.31131 12.0967 3.53115 12.9942 3.93112C13.8979 4.3339 14.6111 4.89767 14.9669 5.49694L15.6625 5.08395ZM21.8131 12.1895L19.1001 11.1012C18.5046 10.8667 17.6353 10.2043 17.2492 9.69437L15.7447 7.70759C12.8244 3.8509 7.31686 3.08997 3.47079 6.00228C-0.377854 8.93327 -1.14683 14.4302 1.77353 18.2869L3.26991 20.263C3.65608 20.773 4.0579 21.7893 4.13276 22.418L4.44467 25.3245C4.5751 26.446 5.1366 27.4083 6.00271 27.9561C6.87686 28.5144 7.99156 28.6399 9.0507 28.2725C10.4878 27.7861 11.855 27.1855 13.1872 26.4943C13.2536 26.4607 13.3181 26.4245 13.3825 26.3882L13.3826 26.3881L13.3827 26.3881C13.4471 26.3518 13.5116 26.3156 13.578 26.282C13.7425 26.1907 13.9177 26.0915 14.0928 25.9923L14.0931 25.9921L14.0938 25.9917C14.4022 25.825 14.7025 25.6478 15.0055 25.4518C15.7231 25.0087 16.4272 24.5257 17.1072 24.0108C17.7765 23.504 18.4217 22.9652 19.0322 22.4027C19.2605 22.1964 19.4887 21.9901 19.6983 21.7813L19.6985 21.7811L19.6985 21.7811L19.6986 21.781L19.6986 21.781C19.8737 21.615 20.0487 21.449 20.2157 21.2725C20.3245 21.1734 20.4253 21.0636 20.526 20.9539L20.5261 20.9538C21.5713 19.8616 22.5253 18.6711 23.3831 17.4197C23.992 16.524 24.1523 15.4331 23.8544 14.4217C23.5485 13.3996 22.8038 12.5927 21.8131 12.1895ZM6.94774 15.6646L11.1444 9.39253C11.2965 9.16528 11.6506 9.31382 11.595 9.58154L10.7845 13.4858C10.7524 13.6403 10.8704 13.7853 11.0282 13.7853H13.4066C13.6121 13.7853 13.7291 14.0203 13.6051 14.1843L8.70361 20.6672C8.53994 20.8837 8.19721 20.7192 8.26376 20.4561L9.29934 16.3618C9.33911 16.2046 9.22025 16.0519 9.05803 16.0519H7.15461C6.95562 16.0519 6.83708 15.8299 6.94774 15.6646ZM12.633 30.2273C13.966 29.6218 14.6467 28.0977 14.4381 26.4946C14.2748 26.598 14.1217 26.6968 13.9687 26.7956C13.8414 26.8831 13.7043 26.9616 13.5659 27.041C13.4993 27.0792 13.4324 27.1175 13.366 27.1572C12.8193 27.4787 12.2514 27.7806 11.6669 28.0461C11.0722 28.3162 10.4609 28.55 9.84889 28.7548C9.59177 28.8423 9.32914 28.9177 9.07677 28.9884C9.00412 29.0077 8.93495 29.0286 8.86706 29.0491L8.86703 29.0491C8.79047 29.0722 8.71553 29.0949 8.63905 29.1141C9.00858 29.5464 9.47514 29.9199 9.96862 30.1349C10.8468 30.5703 11.8229 30.5953 12.633 30.2273Z"
                  fill="url(#paint0_linear_11772_29892)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11772_29892"
                    x1="12"
                    y1="0.516113"
                    x2="12"
                    y2="30.484"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8860F8" />
                    <stop offset="1" stopColor="#7141F8" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl text-[#1D2939] font-poetsenOne">
                Telex
              </span>
            </Link>
          </div>

          {/* links */}
          <div className="hidden sm:flex sm:space-x-8 ml-8">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="buttons hidden sm:flex">
          {actionButtons.map((button) => (
            <a
              key={button.url}
              href={button.url}
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium ${
                button.label === "Start free trial"
                  ? "text-white bg-purple-600 hover:bg-purple-700"
                  : "text-gray-700 bg-white hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {button.label}
            </a>
          ))}
        </div>

        {/* hamburger */}
        <div
          onClick={toggleMenu}
          className="sm:hidden relative h-6 w-6   flex justify-center items-center z-50 "
        >
          <div
            className={`w-full h-0.5 bg-current absolute right-6 transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 bg-gray-50" : "-translate-y-1.5"
            }`}
          />
          <div
            className={`w-full h-0.5 bg-current absolute right-6 transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0 " : "opacity-100"
            }`}
          />
          <div
            className={`w-full h-0.5 bg-current absolute right-6 transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 bg-gray-50" : "translate-y-1.5"
            }`}
          />
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <nav className="sm:hidden bg-[#5A34C6] fixed top-0 inset-x-0 h-72 px-4 pt-20">
          <div className="flex flex-col justify-between gap-4">
            <ul className="px-4 text-white flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>

            {/* mobile buttons */}
            <div className="buttons flex gap-4 px-4 mt-4">
              {actionButtons.map((button) => (
                <a
                  key={button.url}
                  href={button.url}
                  className={`w-full text-center px-4 py-2 rounded-md text-base font-medium ${
                    button.label === "Start free trial"
                      ? "bg-white text-[#5A34C6] hover:bg-gray-100"
                      : "bg-[#5A34C6] text-white border border-white hover:bg-purple-800"
                  }`}
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </nav>
  );
};

export default Header;
