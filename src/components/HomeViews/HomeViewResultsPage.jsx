import React, { useState, useEffect } from "react";
import { supabase } from "../../SupaBase/supabaseClient";
import HomeViewQualifying from "./HomeViewQualifying/HomeViewQualifying";
import HomeViewResultsBar from "./HomeViewResultsBar/HomeViewResultsBar";
import { Home } from "@mui/icons-material";

const HomeViewResultsPage = ({ selectedRace }) => {
  const [results, setResults] = useState([]);

  async function fetchResults() {
    try {
      let { data, error, status } = await supabase
        .from("qualifying")
        .select(
          `qualifyId, number, position, q1, q2, q3, drivers!inner (driverId,driverRef, code, forename, surname, driver_photo), races!inner (name, round, year, date), constructors!inner (name, constructorRef, nationality)`
        )
        .eq("raceId", selectedRace)
        .order("position", { ascending: true });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setResults(data);
        console.log(data)
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

  return (
    <div className="border-r-8 border-b-8 border-t-8 border-f1-black rounded-br-3xl rounded-tr-3xl flex-col p-1.5">
      <div className="bg-candy-apple flex p-4 justify-center">
        <h1 className="font-bold text-white text-2xl font-f1 text-center p-4">
          RESULTS
        </h1>
      </div>{" "}
      <div>
        <HomeViewResultsBar selectedRace={selectedRace}/>
      </div>
      <div className="flex">
        <div className="flex-1">
          <HomeViewQualifying race={results} />
        </div>
      </div>
    </div>
  );
};

export default HomeViewResultsPage;
