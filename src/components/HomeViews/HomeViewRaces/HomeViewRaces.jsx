import React, { useState, useEffect } from "react";
import { supabase } from "../../../SupaBase/supabaseClient";
import HomeViewRaceList from "./HomeViewRaceList";

const HomeViewRaces = ({ season, onRaceItemClick }) => {
  const [races, setRaces] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    if (season) {
      fetchRacesForSeason(season);
    }
  }, [season]);

  async function fetchRacesForSeason(season) {
    try {
      const { data, error } = await supabase
        .from("races")
        .select("raceId, round, name")
        .eq("year", season)
        .order("round", { ascending: true });

      if (error) throw error;

      setRaces(data);
    } catch (error) {
      console.error("error", error.message);
    }
  }

  const handleRaceItemClick = (name) => {
    onRaceItemClick(name)
  };

  const toggleRaceOrder = () => {
    setRaces([...races].reverse());
    setIsAscending(!isAscending);
  };

  return (
    <div className="border-r-8 border-b-8 border-t-8 border-f1-black rounded-br-3xl rounded-tr-3xl flex-col p-1.5">
      <div className="test flex p-4 justify-center">
        <h1 className="font-bold text-candy-apple text-2xl font-f1 text-center p-4 bg-white">
          {season} RACES
        </h1>
      </div>
      <div className="flex space-x-10 border-b-2 border-f1-black pt-4">        
        <button onClick={toggleRaceOrder} className="flex-1 font-f1 font-bold hover:text-candy-apple">
    ROUND {isAscending ? '▲' : '▼'}
  </button>
        <h1 className="flex-1 font-f1 font-bold ">CIRCUIT</h1>
        <h1 className="flex-1"></h1>
        <h1 className="flex-1"></h1>
      </div>
      <div className="flex">
        {races.length > 0 ? (
          <HomeViewRaceList races={races}  onResultsClick={handleRaceItemClick} />
        ) : (
          <p>No races to display.</p> // Placeholder text when no races are found
        )}
      </div>
    </div>
  );
};

export default HomeViewRaces;
