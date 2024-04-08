import {
    ListItem,
    ListItemPrefix,
    Avatar,
    Typography,
  } from "@material-tailwind/react";
  import DriverDetails from "../../Modals/DriverDetails";
  import ConstructorDetails from "../../Modals/ConstructorDetails";
  import { useState } from "react";
  
  const HomeViewStandingsItemDriver = ({
 driver,driver_photo,
 pos,points,wins,driverId,
    setSelectedDriver
  }) => {
    const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  
  
    const toggleDriverModal = () => {
      setIsDriverModalOpen(!isDriverModalOpen);
    };
  
    const toggleConstructorModal = () => {
      setIsConstructorModalOpen(!isConstructorModalOpen);
    };
    const handleAddToFavorites = (name, driverProfile) => {
      setSelectedDriver(name, driverProfile);
    };

  
    return (
      <li className="flex items-left text-center p-3">
        <span className="w-1/12 text-left font-f1 font-bold">{pos}</span>
        <button
          className="w-1/3 font-bold text-left hover:text-candy-apple"
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
          onClick={toggleDriverModal}
        >
          {constructor}
        </button>
        <span>{points || "-"}</span>
        <span>{wins}</span>
  
        {isDriverModalOpen && (
          <DriverDetails
            driverId={driverId}
            update={toggleDriverModal}
            name={driver}
            driverProfile={driver_photo}
            addToFavorites={handleAddToFavorites}
          />
        )}
      </li>
    );
  };
  
  export default HomeViewStandingsItemDriver;
  