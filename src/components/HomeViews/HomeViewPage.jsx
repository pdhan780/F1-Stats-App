//HomeViewPage serves almost as the central hub for the main components
//Here we can conditional render between the two main views; Results and Standings
//A lot of the work being done here is data being "lifted up" to it from lower
//child components
//For example if a race item is needs to be added to favorites, the data
//is lifted up all the way to this component, then it may send it to HomeViewHeader who can pass
//it along to favorites
//HomeViewRaceItem has the results and standings button, it lifts up the corresponding race id
//all the way to here. From there we can use it to fetch data correctly

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
  const [currentView, setCurrentView] = useState("results");

  const handleResultsClick = () => {
    setCurrentView("results");
  };

  const handleStandingsClick = () => {
    setCurrentView("standings");
  };

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
            onResultsClick={handleResultsClick}
            onStandingsClick={handleStandingsClick}
          />
        </div>

        <div className="flex-1">
          {currentView === "results" ? (
          <HomeViewResultsPage selectedRace ={selectedRace} onDriverItemClick ={handleDriverItemClick} onConstructorItemClick={handleConstructorItemClick} onCircuitItemClick={handleCircuitItemClick}/>
          ) : ( <HomeViewStandingsPage selectedRace={selectedRace} onDriverItemClick={handleDriverItemClick} onConstructorItemClick={handleConstructorItemClick} onCircuitItemClick={handleCircuitItemClick} />) }
          </div>
      </div>
      <HomeViewFooter />
    </div>
  );
};

export default HomeViewPage;
