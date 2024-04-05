import React, { useState } from "react";
import HomeViewHeader from "./HomeViewHeader/HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter/HomeViewFooter";
import HomeViewRaces from "./HomeViewRaces";
import HomeViewResultsPage from "./HomeViewResultsPage";

const HomeViewPage = () => {
  const [selectedSeason, setSelectedSeason] = useState("2024");
  const [selectedRace, setSelectedRace] = useState(null);

  // Callback function to receive data from HomeViewRaces
  const handleRaceItemClick = (name) => {
    setSelectedRace(name);
    console.log("Results clicked for race:", name);
    console.log("Data lifted to HomeViewPage component!");
  };

  

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <HomeViewHeader onSeasonSelect={setSelectedSeason} />
      <div className="flex-grow flex justify-center p-4 space-x-8">
        <div className="flex">
          <HomeViewRaces season={selectedSeason} onRaceItemClick={handleRaceItemClick}/>
        </div>
        <div className="flex-1">
          <HomeViewResultsPage selectedRace ={selectedRace}/>
        </div>
      </div>
      <HomeViewFooter />
    </div>
  );
};

export default HomeViewPage;
