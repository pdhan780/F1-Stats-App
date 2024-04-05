import QualifyingList from "./QualifyingList";
import React, { useState, useEffect } from "react";
import { supabase } from "../../SupaBase/supabaseClient";

const HomeViewQualifying = (circuit) => {;

  console.log("Inside Qualifying:" , circuit)

    return (<div className="border-r-8 border-b-8 border-t-8 border-f1-black rounded-br-3xl rounded-tr-3xl flex-col p-1.5">
    <div className="test flex p-4 justify-center">
    <h1 className="font-bold text-candy-apple text-2xl font-f1 text-center p-4 bg-white">QUALIFYING</h1></div>
    <div className="grid grid-cols-6 gap-4 items-left border-b-2 border-f1-black pt-4 font-f1 font-bold">
    <h1 className="col-span-1">POS</h1>
    <h1 className="col-span-1"></h1>
    <h1 className="col-span-1"></h1>
    <h1 className="col-span-1">Q1</h1>
    <h1 className="col-span-1">Q2</h1>
    <h1 className="col-span-1">Q3</h1>
    </div>
        <QualifyingList />
  </div>);
}

export default HomeViewQualifying;