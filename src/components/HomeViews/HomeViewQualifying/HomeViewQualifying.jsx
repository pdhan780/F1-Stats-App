import React, { useState, useEffect } from "react";
import QualifyingList from "./QualifyingList";

const HomeViewQualifying = ({
  selectedRace,
  updateOrder,
  onDriverDetailClick,
  onConstructorDetailClick,
}) => {
  const [isAscending, setIsAscending] = useState(true);

  const handleDriverItemClick = (name, driver_photo) => {
    onDriverDetailClick(name, driver_photo);
  };

  const handleConstructorItemClick = (constructor, constructor_profile) => {
    onConstructorDetailClick(constructor, constructor_profile);
  };

  const togglePosOrder = () => {
    updateOrder([...selectedRace].reverse());
    setIsAscending(!isAscending);
  };

  return (
    <div className=" border-t-8 border-f1-black flex-col ">
      <div className="bg-f1-black flex justify-center">
        <h1 className="font-bold text-white text-2xl font-f1 text-center p-2">
          QUALIFYING
        </h1>
      </div>
      <div className="flex text-center border-b-2 border-f1-black pt-4 pr-4 font-f1 font-bold">
        <button
          onClick={togglePosOrder}
          className="w-1/12 text-left hover:text-candy-apple"
        >
          POS {isAscending ? "▲" : "▼"}
        </button>
        <h1 className="w-1/3"></h1>
        <h1 className="w-1/6"></h1>
        <h1 className="w-1/6">Q1</h1>
        <h1 className="w-1/6">Q2</h1>
        <h1 className="w-1/6">Q3</h1>
      </div>
      <QualifyingList
        qualifying={selectedRace}
        setSelectedDriver={handleDriverItemClick}
        setSelectedConstructor={handleConstructorItemClick}
      />
    </div>
  );
};

export default HomeViewQualifying;
