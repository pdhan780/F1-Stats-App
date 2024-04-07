import {
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import DriverDetails from "../../Modals/DriverDetails";
import ConstructorDetails from "../../Modals/ConstructorDetails";
import { useState } from "react";

const ResultsItem = ({
  pos,
  driver,
  constructor,
  constructor_profile,
  laps,
  points,
  driver_photo,
  driverId,
  constructorId,
  setSelectedDriver,
  setSelectedConstructor,
}) => {
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  const [isConstructorModalOpen, setIsConstructorModalOpen] = useState(false);

  const toggleDriverModal = () => {
    setIsDriverModalOpen(!isDriverModalOpen);
  };

  const toggleConstructorModal = () => {
    setIsConstructorModalOpen(!isConstructorModalOpen);
  };

  const handleAddToFavorites = (name, driverProfile) => {
    setSelectedDriver(name, driverProfile);
  };
  const handleAddToFavoritesCon = (constructor, constructor_profile) => {
    setSelectedConstructor(constructor, constructor_profile);
  };

  return (
    <li className="flex items-left text-center p-3">
      <span className="w-1/6 text-left font-f1 font-bold">{pos}</span>
      <button
        className="w-2/6 font-bold text-left hover:text-candy-apple"
        onClick={toggleDriverModal}
      >
        <Avatar
          variant="circular"
          alt="candice"
          src={driver_photo}
          className="inline-block mr-2"
        />
        {driver}
      </button>
      <button
        className="w-1/6 font-bold text-left hover:text-candy-apple"
        onClick={toggleConstructorModal}
      >
        {constructor}
      </button>
      <span className="w-1/6">{laps || "0"}</span>
      <span className="w-1/6">{points || "-"}</span>

      {isDriverModalOpen && (
        <DriverDetails
          driverId={driverId}
          update={toggleDriverModal}
          name={driver}
          driverProfile={driver_photo}
          addToFavorites={handleAddToFavorites}
        />
      )}
      {isConstructorModalOpen && (
        <ConstructorDetails
          constructorId={constructorId}
          update={toggleConstructorModal}
          constructor={constructor}
          constructor_profile={constructor_profile}
          addToFavorites={handleAddToFavoritesCon}
        />
      )}
    </li>
  );
};

export default ResultsItem;
