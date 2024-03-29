// IMPLEMENT URL and replace with actual circuit images once we have them
import { useState } from "react";
import CloseButton from "./CloseButton";
import AddFavoritesButton from "./AddFavoritesButton";

const DriverDetails = ({ driver, update }) => {
  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {/* Modal Container */}
      <div className="bg-f1-black rounded-lg shadow-2xl p-6 flex flex-col driver-details-line animate-slidetop">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase">
            Driver Details
          </h1>
        </div>

        {/* Body */}
        <div className="flex space-y-2 border-b pb-3">
          <div className="flex-1 flex-col space-y-2">
            <h2 className="text-xl text-white font-f1 font-b uppercase">
              Lewis Hamilton
            </h2>
            <p className="text-white font-f1 font-b uppercase">
              DOB: 07/01/1985
            </p>
            <p className="text-white mb-4 font-f1 font-b uppercase">
              AGE: 39
            </p>
            <p className="text-white mb-4 font-f1 font-b uppercase">
              NATIONALITY: United Kingdom
            </p>
            <p className="text-white mb-4 font-f1 font-b uppercase">
              url
            </p>
          </div>
          <div className="flex flex-col space-y-2 items-center justify-between">
            <CloseButton update={update} />
            <AddFavoritesButton />
          </div>
        </div>
        {/* Replace these images with circuit images once we have them */}
        <div className="flex justify-around mt-4 ">
          <img
            src="https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.img.1920.medium.jpg/1708362076344.jpg"
            alt="Driver placeholder"
            className="p-4 driver-picture-size rounded-lg border-white border"
          />
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
