"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, isSetOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });

  return (
    <>
      <div
        onClick={() => isSetOpen(!isOpen)}
        className={` ${
          isOpen ? "absolute" : "hidden"
        } inset-0 bg-transparent z-10 tablet:hidden`}
      ></div>
      <nav
        className={`w-full tablet:pt-[32px] tablet:px-[30px] tablet:pb-0 py-[15px] px-[20px] flex desktop:absolute tablet:absolute fixed bg-white  tablet:shadow-none left-0 top-0 ${
          fixed ? "shadow-[0px_0px_16px_0px_rgba(0,0,0,0.1)]" : ""
        }`}
      >
        <div className="desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] flex flex-1 flex-row items-center justify-between mx-auto desktop:h-auto relative">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="h-[44px] w-[160px] relative">
              <img
                src="https://framerusercontent.com/images/7mPbRQo7CMruViPxkmnrYAhUxE.svg"
                className="w-full h-full object-center object-contain"
                alt="Logo"
              />
            </div>
          </a>
          <div className="flex tablet:order-2 space-x-3 tablet:space-x-0 rtl:space-x-reverse desktop:hidden relative">
            <button
              onClick={() => isSetOpen(!isOpen)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-[3px] w-[30px] h-[30px] justify-center text-sm rounded-lg tablet:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              {isOpen ? (
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#1c1817"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#1c1817"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
          <div
            className={`w-full tablet:hidden ${
              isOpen ? "absolute" : "hidden"
            }  bottom-[-356px] left-0 z-10 bg-white`}
          >
            <div className="flex flex-col items-center justify-start w-full gap-4 py-4 px-5">
              <a
                href="/"
                className="block w-full text-base font-medium hover:opacity-50 text-[#221260]"
              >
                Home
              </a>
              <a
                href="/about"
                className="block w-full text-base font-medium hover:opacity-50 text-[#221260]"
              >
                About us
              </a>
              <a
                href="/serrvices"
                className="block w-full text-base font-medium hover:opacity-50 text-[#221260]"
              >
                Service
              </a>
              <a
                href="/root-canal"
                className="block w-full text-base font-medium hover:opacity-50 text-[#221260]"
              >
                Service Details
              </a>
              <a
                href="/team"
                className="block w-full text-base font-medium hover:opacity-50 text-[#221260]"
              >
                Our Team
              </a>
              <a
                href="/contact"
                className="block w-full text-base font-medium hover:opacity-50 text-[#221260]"
              >
                Contact
              </a>
              <a
                href="/appoinment"
                className="block w-full text-base font-medium hover:opacity-50 text-[#221260]"
              >
                Appoinment
              </a>
              <a
                href="/404"
                className="block w-full text-base font-medium hover:opacity-50 text-[#221260]"
              >
                404
              </a>
            </div>
          </div>
          <div className="items-center justify-between hidden w-full desktop:flex tablet:flex desktop:w-auto tablet:w-auto gap-8">
            <ul className="flex flex-col flex-none gap-10 border border-gray-100 rounded-desktop desktop:flex-row tablet:flex-row desktop:mt-0  tablet:mt-0 desktop:border-0 tablet:border-0 dark:bg-gray-800 tablet:dark:bg-gray-900 dark:border-gray-700">
              <li className="relative group flex flex-row items-center justify-center gap-[5px]">
                <a
                  href="/"
                  className="block text-base font-medium hover:opacity-50 text-[#221260]"
                >
                  All Pages
                </a>
                <div className="flex flex-col whitespace-nowrap items-center w-4 h-4 justify-center transform group-hover:rotate-180 duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="block w-full h-full"
                    stroke="#221260"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="group-hover:flex flex-col bg-white hidden items-center justify-center gap-2 z-50 border-[1px] w-[200px] h-auto rounded-[15px] py-4 px-5 absolute right-0 top-[20px] left-0">
                  <a
                    href="/"
                    className="block whitespace-nowrap w-full h-full text-base font-normal text-[#221260]"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="block w-full h-full text-base font-normal text-[#221260]"
                  >
                    About us
                  </a>
                  <a
                    href="/services"
                    className="block w-full h-full text-base font-normal text-[#221260]"
                  >
                    Service
                  </a>
                  <a
                    href="/root-canal"
                    className="block w-full h-full text-base font-normal text-[#221260]"
                  >
                    Service Details
                  </a>

                  <a
                    href="/team"
                    className="block w-full h-full text-base font-normal text-[#221260]"
                  >
                    Our Team
                  </a>

                  <a
                    href="/contact"
                    className="block w-full h-full text-base font-normal text-[#221260]"
                  >
                    Contact
                  </a>
                  <a
                    href="/appoinment"
                    className="block w-full h-full text-base font-normal text-[#221260]"
                  >
                    Appoinment
                  </a>
                  <a
                    href="/404"
                    className="block w-full h-full text-base font-normal text-[#221260]"
                  >
                    404
                  </a>
                </div>
              </li>
              <li className="cursor-pointer hover:opacity-50">
                <a
                  href="/about"
                  className="block w-full h-full text-base font-medium text-[#221260]"
                >
                  About us
                </a>
              </li>
              <li className="relative group flex flex-row items-center justify-center gap-[5px]">
                <a
                  href="/services"
                  className="block w-full h-full text-base font-medium text-[#221260]"
                >
                  Services
                </a>
              </li>
            </ul>
            <div className="flex flex-row w-full gap-4">
              <a
                href="#"
                className="desktop:flex hidden flex-row items-center justify-center py-[13px] px-6 gap-3 border-[1px] border-[#22126033] rounded-2xl"
              >
                <div className="h-6 w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#221260"
                    className="w-full h-full"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="">
                  <p className="text-base font-medium text-[#221260] leading-[1.8em]">
                    Call us: 395-495-3990
                  </p>
                </div>
              </a>

              <a className="flex flex-row items-center justify-center py-[13px] px-6 gap-3 border-[1px] bg-[#74f4bb] rounded-2xl">
                <div>
                  <p className="text-base font-[540] text-[#221260] leading-[1.7em] ">
                    Book An Appointment
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
