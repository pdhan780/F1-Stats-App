//First home view results tab (top 3 drivers info, etc)

import { useEffect, useState } from "react";
import { supabase } from "../../../SupaBase/supabaseClient";
import ResultsList from "./ResultsList";
import ResultsPodium from "./ResultsPodium";

const HomeViewResults = ({
  selectedRace,
  onDriverDetailClick,
  onConstructorDetailClick,
}) => {
  const [results, setResults] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  const handleDriverItemClick = (name, driver_photo) => {
    onDriverDetailClick(name, driver_photo);
  };

  const handleConstructorItemClick = (constructor, constructor_profile) => {
    onConstructorDetailClick(constructor, constructor_profile);
  };

  async function fetchResults() {
    try {
      let { data, error, status } = await supabase
        .from("results")
        .select(
          `resultId, laps, points, positionOrder, drivers!inner (driverId, driverRef, code, forename, surname, driver_photo, driver_profile), races!inner (name, round, year, date), constructors!inner (name, constructorId, constructorRef, nationality, constructor_profile)`
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

  const getTopThreeDrivers = (results) => {
    const topThree = results.filter(
      (result) =>
        result.positionOrder === 1 ||
        result.positionOrder === 2 ||
        result.positionOrder === 3
    );
    topThree.sort((a, b) => a.positionOrder - b.positionOrder);
    return topThree;
  };

  const podiumResults = getTopThreeDrivers(results);

  const toggleResultsOrder = () => {
    setResults([...results].reverse());
    setIsAscending(!isAscending);
  };

  return (
    <div className=" border-t-8 border-f1-black flex-col ">
      <div className="bg-f1-black flex justify-center">
        <h1 className="font-bold text-white text-2xl font-f1 text-center p-2">
          Results
        </h1>
      </div>
      <div>
        <ResultsPodium
          results={podiumResults}
          setSelectedDriver={handleDriverItemClick}
        />
      </div>
      <div className="flex text-center border-b-2 border-f1-black pt-4 pr-4 font-f1 font-bold">
        <button
          onClick={toggleResultsOrder}
          className="w-1/6 text-left hover:text-candy-apple"
        >
          POS {isAscending ? "▲" : "▼"}
        </button>
        <h1 className="w-2/6"></h1>
        <h1 className="w-1/6"></h1>
        <h1 className="w-1/6">LAPS</h1>
        <h1 className="w-1/6">PTS</h1>
      </div>
      <ResultsList
        race={results}
        setSelectedDriver={handleDriverItemClick}
        setSelectedConstructor={handleConstructorItemClick}
      />
    </div>
  );
};

export default HomeViewResults;
