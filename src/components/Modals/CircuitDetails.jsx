// IMPLEMENT URL and replace with actual circuit images once we have them
import { useState } from 'react';

const CircuitDetails = ({ circuit, update }) => {
  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {/* Modal Container */}
      <div className="bg-f1-black rounded-lg shadow-2xl p-6 w-1/2 flex flex-col border-white border">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase">Circuit Details</h1>
        </div>

        {/* Body */}
        <div className="flex space-y-2 border-b pb-3">
        <div className="flex-1 flex-col space-y-2">
          <h2 className="text-xl text-white font-f1 font-b uppercase">{circuit.name}</h2>
          <p className="text-white font-f1 font-b uppercase">{circuit.location}</p>
          <p className="text-white mb-4 font-f1 font-b uppercase">{circuit.country}</p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-between">
          <button
            className="bg-white hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-2 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add Favorites
          </button>
          <button
            className="bg-white hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-2 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
            type="button" onClick={update}
          >
            Close
          </button>
        </div>
        </div>
        {/* Replace these images with circuit images once we have them */}
        <div className="flex justify-around mt-4 ">
          <img
            src="src/assets/f1-default-share.png"
            alt="Circuit placeholder"
            className="h-32 p-4 rounded-lg border-white border"
          />
          <img
            src="src/assets/f1-default-share.png"
            alt="Map placeholder"
            className="h-32 p-4 rounded-lg border-white border"
          />
        </div>
      </div>
    </div>
  );
};

export default CircuitDetails;
