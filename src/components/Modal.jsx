import React, { useState } from "react";

const Modal = ({handle}) => {
    
    
    return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={handle}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
        <p className="text-gray-700 mb-4">
          This is a Tailwind CSS styled modal. You can add any content you want here.
        </p>
        <div className="flex justify-end">
          <button
            onClick={handle}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
