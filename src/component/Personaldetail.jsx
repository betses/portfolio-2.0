import React from 'react';
import profile from '../assets/image.jpg';
import { DevicePhoneMobileIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline'

export default function Personaldetail() {
  return (
    <div className=" text-center text-black bg-white px-4 py-20 rounded-3xl">
      <img
        src={profile}
        className="w-[240px] absolute left-[50%] lg:left-[26%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[250px]"
        alt=""
      />
      <h2 className="mt-6 mb-1 font-semibold text-3xl">Betsegaw Sebsibe</h2>
      <h3 className="my-3 text-[#7b7b7b]">Front-End Developer</h3>
      <div className="flex justify-center space-x-3">
        <a
          href="https://www.github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f3f6f6] p-2 rounded-lg hover:bg-gradient-to-r from-[#fa5252] to-[#e32e6e] text-[#1773EA] hover:text-white ease-in duration-300"
        >
          <span className="socialbtn">
            <svg
              fill="currentColor"
              aria-hidden="true"
              className="octicon octicon-mark-github"
              height="24"
              version="1.1"
              viewBox="0 0 16 16"
              width="24"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </span>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f3f6f6] p-3 rounded-lg flex items-center hover:bg-gradient-to-r from-[#fa5252] to-[#e32e6e] text-[#1773EA] hover:text-white ease-in duration-300"
        >
          <span className="socialbtn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f3f6f6] p-3 rounded-lg flex items-center hover:bg-gradient-to-r from-[#fa5252] to-[#e32e6e] text-[#1773EA] hover:text-white ease-in duration-300"
        >
          <span className="socialbtn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </span>
        </a>
      </div>
      <div className="bg-[#f3f6f6] mt-5 p-5 rounded-xl">
        <div className="flex border-b border-[#E3E3E3] pb-2.5">
          <span className="flex-shrink-0 socialbtn p-3 bg-white text-[#E93B81] shadow-md">
            <DevicePhoneMobileIcon className="w-5 h-5" />
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
            <p className="break-all">
              {' '}
              <a
                className="hover:text-[#FA5252] duration-300 transition"
                href="tel:+251924313213"
              >
                +251 9243 13213
              </a>
            </p>
          </div>
        </div>
        <div className="flex  border-b border-[#E3E3E3] py-2.5">
          <span className="flex-shrink-0 socialbtn p-3 bg-white text-[#6AB5B9] shadow-md">
            <EnvelopeOpenIcon className="h-5 w-5" />
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
            <p className="break-all">
              {' '}
              <a
                className="hover:text-[#FA5252] duration-300 transition"
                href="mailto:betsesebe@gmail.com"
              >
                Betsesebe@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex border-b border-[#E3E3E3] py-2.5">
          <span className="flex-shrink-0 socialbtn p-3 bg-white  text-[#FD7590] shadow-md">
            <MapPinIcon className="h-5 w-5" />
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
              Location
            </p>
            <p className=" break-all">Addis Ababa Ethiopia</p>
          </div>
        </div>
      </div>
      <a
        href="/static/media/cv.174d8bc4469f8aa7c5fa.webp"
        download=""
        className="inline-flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
      >
        Download CV
      </a>
    </div>
  );
}
