/* eslint-disable react/prop-types */
import React from 'react';

import { XCircleIcon, ClipboardDocumentListIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

function Modal({ closeModal, data }) {
  return (
    <>
      <div className="fixed w-full h-full bg-black/75 inset-0">
        <div className="absolute flex left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%]  z-[1040]  mx-auto bg-white  p-8 rounded-xl">
          <div className="p-10 max-h-[80vh] min-w-full overflow-y-scroll scrollbar-hide">
            <button type="button" className="absolute -right-10  -top-12 text-white hover:rotate-45 ease-in-out duration-150" onClick={() => closeModal(false)}>
              <XCircleIcon className="w-14 h-14" />
            </button>
            <div>
              <h1 className="text-4xl text-gray-600 uppercase text-center font-bold">{data.name}</h1>
            </div>
            <div className="max-w-md ">
              <p className="my-4 leading-tight text-lg font-normal text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam
                possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum
                numquam asperiores, voluptatum fugiatreiciendis aspernatur, non, odio aperiam
                voluptas ex tempora vitae. Dolor.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center py-2.5">
                <span className="socialbtn bg-white">
                  <ClipboardDocumentListIcon className="h-5 w-5" />
                </span>
                <div className="flex items-center text-lg ml-2.5">
                  <p className="break-all">
                    {'  '}
                    <a
                      className="hover:text-[#FA5252] duration-300 transition"
                      href="mailto:betsesebe@gmail.com"
                    >
                      Project: Repo
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center py-2.5">
                <span className="socialbtn bg-white">
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </span>
                <div className="flex items-center text-lg ml-2.5">
                  <p className="break-all">
                    {'  '}
                    <a
                      className="hover:text-[#FA5252] duration-300 transition"
                      href="mailto:betsesebe@gmail.com"
                    >
                      Preview: LiveDemo
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <img
              src={data.image}
              className="rounded-lg mt-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </>

  );
}

export default Modal;
