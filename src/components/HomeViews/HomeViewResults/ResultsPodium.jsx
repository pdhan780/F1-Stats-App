import PodiumPlace from "./PodiumPlace";
import DriverDetails from "../../Modals/DriverDetails";
import { useState } from "react";

const ResultsPodium = ({ results, setSelectedDriver }) => {
  const backgroundHeights = ["h-32", "h-24", "h-20"]; // Heights for 1st, 2nd, and 3rd places
  const imageWidth = ["w-28", "w-24"]; // Sizes for 1st and 2nd/3rd places
  const imageHeight = ["h-28", "h-24"]; // Sizes for 1st and 2nd/3rd places

  // Only render if we have results
  if (results.length < 3) return null;

  const [isDriver1ModalOpen, setIsDriver1ModalOpen] = useState(false);
  const [isDriver2ModalOpen, setIsDriver2ModalOpen] = useState(false);
  const [isDriver3ModalOpen, setIsDriver3ModalOpen] = useState(false);

  const toggleDriver1Modal = () => {
    setIsDriver1ModalOpen(!isDriver1ModalOpen);
  };

  const toggleDriver2Modal = () => {
    setIsDriver2ModalOpen(!isDriver2ModalOpen);
  };

  const toggleDriver3Modal = () => {
    setIsDriver3ModalOpen(!isDriver3ModalOpen);
  };
  const handleAddToFavorites = (name, driverProfile) => {
    setSelectedDriver(name, driverProfile);
  };

  return (
    <div className="flex border-b-4 border-r-4 rounded-br-2xl border-f1-black ">
      <div className="flex-1"></div>
      <div className="flex-grow flex justify-center py-4 space-x-10 ">
        <button onClick={toggleDriver2Modal}>
          <PodiumPlace
            result={results[1]}
            backgroundHeight={backgroundHeights[1]}
            positionOrder="2"
            imageWidth={imageWidth[1]}
            imageHeight={imageHeight[1]}
          />
        </button>
        <button onClick={toggleDriver1Modal}>
          <PodiumPlace
            result={results[0]}
            backgroundHeight={backgroundHeights[0]}
            positionOrder="1"
            imageWidth={imageWidth[0]}
            imageHeight={imageHeight[0]}
          />
        </button>
        <button onClick={toggleDriver3Modal}>
          <PodiumPlace
            result={results[2]}
            backgroundHeight={backgroundHeights[2]}
            positionOrder="3"
            imageWidth={imageWidth[1]}
            imageHeight={imageHeight[1]}
          />
        </button>
        {isDriver1ModalOpen && (
          <DriverDetails
            driverId={results[0].drivers.driverId}
            update={toggleDriver1Modal}
            name={
              results[0].drivers.forename + " " + results[1].drivers.surname
            }
            driverProfile={results[0].drivers.driver_photo}
            addToFavorites={handleAddToFavorites}
          />
        )}
        {isDriver2ModalOpen && (
          <DriverDetails
            driverId={results[1].drivers.driverId}
            update={toggleDriver2Modal}
            name={
              results[1].drivers.forename + " " + results[1].drivers.surname
            }
            driverProfile={results[1].drivers.driver_photo}
            addToFavorites={handleAddToFavorites}
          />
        )}
        {isDriver3ModalOpen && (
          <DriverDetails
            driverId={results[2].drivers.driverId}
            update={toggleDriver3Modal}
            name={
              results[2].drivers.forename + " " + results[2].drivers.surname
            }
            driverProfile={results[2].drivers.driver_photo}
            addToFavorites={handleAddToFavorites}
          />
        )}
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default ResultsPodium;
