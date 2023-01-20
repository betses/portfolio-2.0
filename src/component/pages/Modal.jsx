/* eslint-disable react/prop-types */
import React from 'react';

function Modal({ closeModal, data }) {
  return (
    <>
      <div className="fixed w-full h-full bg-black right-0 left-0 top-0 bottom-0 opacity-50 z-[1040]" />
      <div className=" fixed bg-white z-[1040] top-20 left-[25%] h-3/4 w-2/4 ">
        <button type="button" onClick={() => closeModal(false)}>X</button>
        <div>
          <h1>{data.name}</h1>
        </div>
        <div>
          <p>the body page</p>
        </div>
        <div>
          <button type="button">close</button>
          <button type="button">close</button>
        </div>
      </div>
    </>

  );
}

export default Modal;
