import React, { useState, useEffect } from "react";
import HomeViewStandingsListDriver from "./HomeViewStandingsListDriver";

const HomeViewStandingsDriver = ({ driverData, setSelectedDriver, updateOrder}) => {
  const [isAscending, setIsAscending] = useState(true);

  const togglePosOrder = () => {
    updateOrder([...driverData].reverse());
    setIsAscending(!isAscending);
  };

  return (
    <div className=" border-t-8 border-f1-black flex-col ">
      <div className="bg-f1-black flex justify-center">
        <h1 className="font-bold text-white text-2xl font-f1 text-center p-2">
          DRIVERS
        </h1>
      </div>
      <div className="flex text-center border-b-2 border-f1-black pt-4 pr-4 font-f1 font-bold">
        <button
          onClick={togglePosOrder}
          className="w-1/4 text-left hover:text-candy-apple"
        >
          POS {isAscending ? "▲" : "▼"}
        </button>
        <h1 className="w-2/4"></h1>
        <h1 className="w-1/4">PTS</h1>
        <h1 className="w-1/4">WINS</h1>
      </div>
      <HomeViewStandingsListDriver
        driverData={driverData}
        setSelectedDriver={setSelectedDriver}
      />
    </div>
  );
};

export default HomeViewStandingsDriver;
