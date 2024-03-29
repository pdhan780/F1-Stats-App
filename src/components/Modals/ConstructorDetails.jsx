// IMPLEMENT URL and replace with actual circuit images once we have them
import { useState } from "react";
import CloseButton from "./CloseButton";
import AddFavoritesButton from "./AddFavoritesButton";

const ConstructorDetails = ({ constructor, update }) => {
  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {/* Modal Container */}
      <div className="bg-f1-black rounded-lg shadow-2xl p-6 flex flex-col constructor-details-line animate-slidetop">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase">
            Constructor Details
          </h1>
        </div>

        {/* Body */}
        <div className="flex space-y-2 border-b pb-3">
          <div className="flex-1 flex-col space-y-2">
            <h2 className="text-xl text-white font-f1 font-b uppercase">
              Red Bull Racing
            </h2>
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
            <button
              className="bg-white hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-3 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Favorites
            </button>
          </div>
        </div>
        {/* Replace these images with circuit images once we have them */}
        <div className="flex justify-around mt-4 ">
          <img
            src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/6col/image.png"
            alt="Constructor placeholder"
            className="p-4 rounded-lg border-white border"
          />
        </div>
      </div>
    </div>
  );
};

export default ConstructorDetails;
