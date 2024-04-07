import React, { useState } from "react";
import HomeViewHeader from "./HomeViewHeader/HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter/HomeViewFooter";
import HomeViewRaces from "./HomeViewRaces/HomeViewRaces";
import HomeViewResultsPage from "./HomeViewResultsPage";

const HomeViewPage = () => {
  const [selectedSeason, setSelectedSeason] = useState("2023");
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState([]);

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
    console.log("Results clicked for driver:", name, driver_photo);
    console.log("Data lifted to HomeViewPage component!");
  };
  

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <HomeViewHeader onSeasonSelect={setSelectedSeason} driverInfo ={selectedDriver}/>
      <div className="flex-grow flex justify-center p-4 space-x-8">
        <div className="flex">
          <HomeViewRaces season={selectedSeason} onRaceItemClick={handleRaceItemClick}/>
        </div>
        <div className="flex-1">
          <HomeViewResultsPage selectedRace ={selectedRace} onDriverItemClick ={handleDriverItemClick} />
        </div>
      </div>
      <HomeViewFooter />
    </div>
  );
};

export default HomeViewPage;
