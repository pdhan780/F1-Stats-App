import React, { useState, useEffect } from "react";
import { supabase } from "../../SupaBase/supabaseClient";
import HomeViewQualifying from "./HomeViewQualifying/HomeViewQualifying";
import HomeViewResultsBar from "./HomeViewResultsBar/HomeViewResultsBar";
import HomeViewResults from "./HomeViewResults/HomeViewResults";
import HomeViewStandingsListDriver from "./HomeViewStandings/HomeViewStandingsListDriver";
import HomeViewStandingsListCon from "./HomeViewStandings/HomeViewStandingsListCon";

const HomeViewStandingsPage = ({
  selectedRace,
  onDriverItemClick,
  onConstructorItemClick
}) => {
  const [driverResults, setDriverResults] = useState([]);
  const [constructorResults, setConstructorResults] = useState([]);
  const [currentView, setCurrentView] = useState("qualifying");

  const handleQualifyingClick = () => {
    setCurrentView("qualifying");
  };

  const handleResultsClick = () => {
    setCurrentView("results");
  };

  async function fetchResultsDrivers() {
    try {
      let { data, error, status } = await supabase
      .from('driverStandings')
      .select(`position,points,wins,drivers!inner (driverId,forename, surname,driver_photo), races!inner (raceId,round)`)
        .eq("raceId", selectedRace)
        .order("position", { ascending: true });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setDriverResults(data);
        console.log(data);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }

  async function fetchResultsConstructor() {
    try {
      let { data, error, status } = await supabase
      .from('constructorStandings')
      .select(`position,points,wins, constructors!inner (constructorId,name,constructor_profile), races!inner (raceId)`)
        .eq("raceId", selectedRace)
        .order("position", { ascending: true });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setConstructorResults(data);
        console.log(data);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }
  useEffect(() => {
    if (selectedRace) {
      fetchResultsDrivers();
      fetchResultsConstructor();
    }
  }, [selectedRace]);

 

  const handleDriverItemClick = (name, driver_photo) => {
    onDriverItemClick(name, driver_photo);
  };

  const handleConstructorItemClick = (constructor, constructor_profile) => {
    onConstructorItemClick(constructor, constructor_profile);
  };

 

  return (
    <div className="border-r-8 border-b-8 border-t-8 border-f1-black rounded-br-3xl rounded-tr-3xl flex-col p-1.5">
      <div className="bg-candy-apple flex p-4 justify-center">
        <h1 className="font-bold text-white text-2xl font-f1 text-center p-4">
          STANDINGS AFTER ROUND: {driverResults.length > 0 ? driverResults[0].races.round : " "}     
        </h1>
        </div>
    <div className="flex">
      <div className="flex-1">
        <HomeViewStandingsListDriver  driverData={driverResults}
        setSelectedDriver={handleDriverItemClick}/>
      </div>
      <div className="flex-1">
      <HomeViewStandingsListCon  constructorData={constructorResults}
        setSelectedConstructor={handleConstructorItemClick} />
      </div>
    </div>
  </div>
  );
};

export default HomeViewStandingsPage;
