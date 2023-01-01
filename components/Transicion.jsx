"use client";
import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
export default function Transicion() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className=" mt-8 flex flex-col justify-center">
        <div className="m-auto text-center w-1/3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="  bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className=" pr-0.5">Menu</span>
            {!isOpen ? (
              <svg
                className=" block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          <Transition show={isOpen} className="text-white">
            hola
          </Transition>
        </div>
      </div>
    </div>
  );
}
