import QualifyingList from "./QualifyingList";
import React, { useState, useEffect } from "react";
import { supabase } from "../../../SupaBase/supabaseClient";

const HomeViewQualifying = ({ race }) => {
  console.log("Check2:", race);

  const [qualifying, setQualifying] = useState([]);

  async function fetchQualifying() {
    try {
      let { data, error, status } = await supabase
        .from("qualifying")
        .select(
          `qualifyId, number, position, q1, q2, q3, drivers!inner (driverRef, code, forename, surname), races!inner (name, round, year, date), constructors!inner (name, constructorRef, nationality)`
        )
        .eq("raceId", race)
        .order("position", { ascending: true });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setQualifying(data);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }

  useEffect(() => {
    if (race) {
      fetchQualifying();
    }
  }, [race]);

  return (
    <div className="border-r-8 border-b-8 border-t-8 border-f1-black rounded-br-3xl rounded-tr-3xl flex-col p-1.5">
      <div className="test flex p-4 justify-center">
        <h1 className="font-bold text-candy-apple text-2xl font-f1 text-center p-4 bg-white">
          QUALIFYING
        </h1>
      </div>
      <div className="flex text-center border-b-2 border-f1-black pt-4 pr-4 font-f1 font-bold">
        <h1 className="w-1/6 text-left">POS</h1>
        <h1 className="w-1/6"></h1>
        <h1 className="w-1/6"></h1>
        <h1 className="w-1/6">Q1</h1>
        <h1 className="w-1/6">Q2</h1>
        <h1 className="w-1/6">Q3</h1>
      </div>
      <QualifyingList qualifying={qualifying} />
    </div>
  );
};

export default HomeViewQualifying;
