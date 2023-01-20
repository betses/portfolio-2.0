import React from 'react';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fa5252] to-[#e32e6e]">
        Portfolio
      </h1>
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=" text-3xl "
          height="0.8em"
          width="0.8em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </div>
  );
}
