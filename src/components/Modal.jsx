import React from "react";

const Modal = ({ toggle, children }) => {
  return (
    <div
      className={`z-50 absolute left-0 top-10 w-full text-center h-96 transition delay-150 duration-300 ease-in-out ${
        toggle ? "visible" : "hidden transition-opacity"
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
