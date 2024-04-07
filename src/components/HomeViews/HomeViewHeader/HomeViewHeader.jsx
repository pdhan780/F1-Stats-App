import React, { useState, useEffect, useRef } from "react";
import Favorites from "../../Modals/Favorites";
import About from "../../Modals/About";
import SeasonDropdown from "./SeasonDropdown";

const HomeViewHeader = ({ onSeasonSelect,driverInfo,constructorInfo, onEmptyFavorites }) => {
  console.log(driverInfo)
  console.log(constructorInfo)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
 

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  const handleSeasonSelect = (season) => {
    onSeasonSelect(season);
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
        <div className="flex items-center space-x-10 relative">
          <SeasonDropdown onSeasonSelect={handleSeasonSelect} />
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={driverInfo.length === 0 && constructorInfo.length === 0}
            className="transition ease-in-out delay-25 text-white font-f1 hover:bg-f1-black hover:text-white px-3 py-6 focus:outline-none"
          >
            FAVORITES
          </button>
          <button
            onClick={() => setIsAboutOpen(true)}
            className="transition ease-in-out delay-25 text-white font-f1 hover:bg-f1-black hover:text-white px-3 py-6 focus:outline-none"
          >
            ABOUT
          </button>
        </div>
        <div className="flex"></div>
        <div className="flex"></div>
      </div>
      {isModalOpen && <Favorites update={toggleModal} driverInfo ={driverInfo} constructorInfo={constructorInfo} onEmptyFavorites={onEmptyFavorites}/>}
      {isAboutOpen && <About update={toggleAbout} />}
    </nav>
  );
};

export default HomeViewHeader;
