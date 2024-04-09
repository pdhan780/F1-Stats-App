//Where the orgin for the first home view begins..
//Here we can fetch proper qualfiying data
//You will notice we have two fetches, this is because old races
//e.g 1993 and below do not have corresponding race id in qualifying
//In this case we omit some of the info but still fetch from results
//to at least display constructors, driver names , etc

import React, { useState, useEffect } from "react";
import { supabase } from "../../SupaBase/supabaseClient";
import HomeViewQualifying from "./HomeViewQualifying/HomeViewQualifying";
import HomeViewResultsBar from "./HomeViewResultsBar/HomeViewResultsBar";
import HomeViewResults from "./HomeViewResults/HomeViewResults";

const HomeViewResultsPage = ({
  selectedRace,
  onDriverItemClick,
  onConstructorItemClick,
  onCircuitItemClick,
}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetchedBackup, setHasFetchedBackup] = useState(false);
  const [currentView, setCurrentView] = useState("qualifying");

  const handleQualifyingClick = () => {
    setCurrentView("qualifying");
  };

  const handleResultsClick = () => {
    setCurrentView("results");
  };

  const fetchResults = async () => {
    setIsLoading(true);
    try {
      let { data, error } = await supabase
        .from("qualifying")
        .select(
          `qualifyId, number, position, q1, q2, q3, drivers!inner (driverId, driverRef, code, forename, surname, driver_photo), races!inner (name, round, year, date), constructors!inner (name,constructor_profile, constructorId, constructorRef, nationality)`
        )
        .eq("raceId", selectedRace)
        .order("position", { ascending: true });

      if (error) throw error;

      if (data.length > 0) {
        setResults(data);
      } else {
        await fetchBackupResults();
      }
    } catch (error) {
      console.error("error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  async function fetchBackupResults() {
    try {
      let { data, error, status } = await supabase

        .from("results")
        .select(
          `drivers!inner (driverId, driverRef, code, forename, surname, driver_photo, driver_profile), races!inner (name, round, year, date), constructors!inner (name, constructorId, constructorRef, nationality, constructor_profile)`
        )
        .eq("raceId", selectedRace)
        .order("positionOrder", { ascending: true });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setResults(data);
        console.log(data);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }

  useEffect(() => {
    if (selectedRace) {
      fetchResults();
    }
  }, [selectedRace]);

  const handleDriverItemClick = (name, driver_photo) => {
    onDriverItemClick(name, driver_photo);
  };

  const handleConstructorItemClick = (constructor, constructor_profile) => {
    onConstructorItemClick(constructor, constructor_profile);
  };

  const handleCircuitItemClick = (circuitName, circuitProfile) => {
    onCircuitItemClick(circuitName, circuitProfile);
  };

  return (
    <div className="border-r-8 border-b-8 border-t-8 border-f1-black rounded-br-3xl rounded-tr-3xl flex-col p-1.5">
      <div className="bg-candy-apple flex p-4 justify-center">
        <h1 className="font-bold text-white text-2xl font-f1 text-center p-4">
          RESULTS
        </h1>
      </div>
      <div>
        <HomeViewResultsBar
          selectedRace={selectedRace}
          onQualifyingClick={handleQualifyingClick}
          onResultsClick={handleResultsClick}
          onCircuitDetailClick={handleCircuitItemClick}
        />
      </div>
      <div className="flex">
        <div className="flex-1">
          {currentView === "qualifying" ? (
            <HomeViewQualifying
              selectedRace={results}
              updateOrder={setResults}
              onDriverDetailClick={handleDriverItemClick}
              onConstructorDetailClick={handleConstructorItemClick}
            />
          ) : (
            <HomeViewResults
              selectedRace={selectedRace}
              onDriverDetailClick={handleDriverItemClick}
              onConstructorDetailClick={handleConstructorItemClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeViewResultsPage;
