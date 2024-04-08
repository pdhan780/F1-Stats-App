import React, { useState, useEffect } from "react";
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

  const handleRaceItemClick = (raceId) => {
    setSelectedRace(raceId);
  };

  const handleDriverItemClick = (name, driver_photo) => {
    setSelectedDriver([...selectedDriver, { name, driver_photo }]);
  };

  const handleConstructorItemClick = (constructor, constructor_profile) => {
    setSelectedConstructor([
      ...selectedConstructor,
      { constructor, constructor_profile },
    ]);
  };

  const handleCircuitItemClick = (circuitName, circuitProfile) => {
    setSelectedCircuit([...selectedCircuit, { circuitName, circuitProfile }]);
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <HomeViewHeader
        onSeasonSelect={setSelectedSeason}
        driverInfo={selectedDriver}
        constructorInfo={selectedConstructor}
        circuitInfo={selectedCircuit}
        onEmptyFavorites={handleEmptyFavorites}
      />
      <div className="flex-grow flex justify-center p-4 space-x-8">
        <div className="flex">
          <HomeViewRaces
            season={selectedSeason}
            onRaceItemClick={handleRaceItemClick}
          />
        </div>

        <div className="flex-1">
          <HomeViewResultsPage selectedRace ={selectedRace} onDriverItemClick ={handleDriverItemClick} onConstructorItemClick={handleConstructorItemClick} onCircuitItemClick={handleCircuitItemClick}/>
        </div>

  {/*}
        <div className="flex-1">
          <HomeViewStandingsPage
            selectedRace={selectedRace}
            onDriverItemClick={handleDriverItemClick}
            onConstructorItemClick={handleConstructorItemClick}
            onCircuitItemClick={handleCircuitItemClick}
          />
  </div>*/}
      </div>
      <HomeViewFooter />
    </div>
  );
};

export default HomeViewPage;
