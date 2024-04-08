import React, { useState,useEffect } from "react";
import HomeViewHeader from "./HomeViewHeader/HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter/HomeViewFooter";
import HomeViewRaces from "./HomeViewRaces/HomeViewRaces";
import HomeViewResultsPage from "./HomeViewResultsPage";
import HomeViewStandingsPage from "./HomeViewStandingsPage";

const HomeViewPage = () => {
  const [selectedSeason, setSelectedSeason] = useState("2023");
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState([]);
  const [selectedConstructor, setSelectedConstructor] = useState([]);
  const [selectedCircuit, setSelectedCircuit] = useState([]);

  const handleEmptyFavorites = () => {
    setSelectedDriver([]);
    setSelectedConstructor([]);
    setSelectedCircuit([]);
  };

  // Callback function to receive data from HomeViewRaces
  const handleRaceItemClick = (raceId) => {
    setSelectedRace(raceId);
    console.log("Results clicked for race:", raceId);
    console.log("Data lifted to HomeViewPage component!");
  };

   // Callback function to receive data from HomeViewResultsPage
  const handleDriverItemClick = (name, driver_photo) => {
    // Push the new selected driver to the array
    setSelectedDriver([...selectedDriver, { name, driver_photo }]);
    console.log("Results clicked for driver in HOMEVIEW:", name, driver_photo);
    console.log("Data lifted to HomeViewPage component!");
  };

     // Callback function to receive data from HomeViewResultsPage
   const handleConstructorItemClick = (constructor,constructor_profile) => {
      // Push the new selected driver to the array
      setSelectedConstructor([...selectedConstructor, { constructor,constructor_profile}]);
      console.log("Results clicked for constructor IN HOMEVIEW",constructor,constructor_profile);
      console.log("Data lifted to HomeViewPage component!");
    };

    
     // Callback function to receive data from HomeViewResultsPage
   const handleCircuitItemClick = (circuitName,circuitProfile) => {
    // Push the new selected driver to the array
    setSelectedCircuit([...selectedCircuit, { circuitName,circuitProfile}]);
    console.log("Results clicked for circuit IN HOMEVIEW",circuitName,circuitProfile);
    console.log("Data lifted to HomeViewPage component!");
  };
 

 

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <HomeViewHeader onSeasonSelect={setSelectedSeason} driverInfo ={selectedDriver} constructorInfo ={selectedConstructor} circuitInfo ={selectedCircuit}onEmptyFavorites={handleEmptyFavorites}  />
      <div className="flex-grow flex justify-center p-4 space-x-8">
        <div className="flex">
          <HomeViewRaces season={selectedSeason} onRaceItemClick={handleRaceItemClick}/>
        </div>
        {/*
        <div className="flex-1">
          <HomeViewResultsPage selectedRace ={selectedRace} onDriverItemClick ={handleDriverItemClick} onConstructorItemClick={handleConstructorItemClick} onCircuitItemClick={handleCircuitItemClick}/>
        </div>
  */}
        <div className="flex-1">
          <HomeViewStandingsPage selectedRace ={selectedRace} onDriverItemClick ={handleDriverItemClick} onConstructorItemClick={handleConstructorItemClick} onCircuitItemClick={handleCircuitItemClick}/>
        </div>
      </div>
      <HomeViewFooter />
    </div>
  );
};

export default HomeViewPage;
