import React, { useState, useEffect } from "react";
import { supabase } from "../../../SupaBase/supabaseClient";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomeViewResultsBar = ({ selectedRace }) => {
  console.log("Selected Race:", selectedRace);
  const [results, setResults] = useState([]);

  async function fetchResults() {
    try {
      let { data, error, status } = await supabase
        .from("races")
        .select(
          `raceId, name, round, year, date, url, circuits!inner (circuitId, name)`
        )
        .eq("raceId", selectedRace);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setResults(data);
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

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  console.log("Results:", results);

  return (
    <div className="flex space-x-4 bg-f1-light-gray font-bold text-f1-black">
      <p className="flex-grow  py-2">
        {results.length > 0 ? results[0].name : "No Results"}
      </p>
      <p className="flex-grow  py-2">
        Round: {results.length > 0 ? results[0].round : "No Results"}
      </p>
      <p className="flex-grow  py-2">
        {results.length > 0 ? formatDate(results[0].date) : "No Results"}
      </p>
      <p className="flex-grow  py-2">
        {results.length > 0 ? results[0].circuits.name : "No Results"}
      </p>
      <a
        href={results.length > 0 ? results[0].url: ""}
        target="_blank"
        className="flex-grow py-2 text-center transition ease-in-out delay-25 hover:bg-f1-black hover:text-white focus:outline-none"
      >
        {results.length > 0 ? "More Info" : "No Results"}
      </a>
      <button
        className="flex-grow py-2 transition ease-in-out delay-25 hover:bg-f1-black hover:text-white focus:outline-none"
      >
        <i className="fa-solid fa-flag-checkered"></i> Qualifying
      </button>
      <button
        className="flex-grow py-2 transition ease-in-out delay-25 hover:bg-f1-black hover:text-white focus:outline-none"
      >
        <i className="fa-solid fa-ranking-star"></i> Standings
      </button>
    </div>
  );
};

export default HomeViewResultsBar;