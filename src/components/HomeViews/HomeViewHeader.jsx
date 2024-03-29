import React, { useState } from "react";
import Favorites from "../Modals/Favorites";

const HomeViewHeader = () => {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="m-0 p-0">
      <div className="flex items-center justify-between bg-candy-apple m-0 p-0">
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/f1-default-share.png"
            alt="F1 Logo"
            className="h-8 ml-4"
          />
          <h1 className="text-white font-bold text-xl font-f1 ml-4">
            F1 ANALYSIS
          </h1>
        </div>
        <div className="flex items-center space-x-10">
          <button className="text-white font-f1 flex items-center hover:bg-f1-black hover:text-white px-3 py-6 focus:outline-none">
            SEASON
            <img
              src="src/assets/dropdown-chevron.png"
              alt="Down Arrow"
              className="h-2 ml-1" // Add some left margin to separate the text and the icon
            />
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white font-f1 hover:bg-f1-black hover:text-white px-3 py-6 focus:outline-none"
          >
            FAVORITES
          </button>
          <a
            href="/about"
            className="hover:bg-f1-black font-f1 text-white px-4 py-6"
          >
            ABOUT
          </a>
        </div>
        <div className="flex"></div>
        <div className="flex"></div>
      </div>
      {isModalOpen && <Favorites update={toggleModal} />}
    </nav>
  );
};

export default HomeViewHeader;
