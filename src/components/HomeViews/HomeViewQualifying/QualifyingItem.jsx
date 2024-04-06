import {
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import DriverDetails from "../../Modals/DriverDetails";
import ConstructorDetails from "../../Modals/ConstructorDetails";
import { useState } from "react";

const QualifyingItem = ({ pos, driver, constructor, Q1, Q2, Q3, driver_photo, driverId, constructorId }) => {
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  const [isConstructorModalOpen, setIsConstructorModalOpen] = useState(false);

  const toggleDriverModal = () => {
    setIsDriverModalOpen(!isDriverModalOpen);
  };

  const toggleConstructorModal = () => {
    setIsConstructorModalOpen(!isConstructorModalOpen);
  }

  return (
    <li className="flex items-left text-center p-3">
      <span className="w-1/6 text-left font-f1 font-bold">{pos}</span>
      <button
        className="w-1/6 font-bold text-left hover:text-candy-apple"
        onClick={toggleDriverModal}
      >
      <Avatar variant="circular" alt="candice" src={driver_photo} className="inline-block mr-2"/>  
        {driver}
      </button>
      <button
        className="w-1/6 font-bold text-left hover:text-candy-apple"
        onClick={toggleConstructorModal}
      >{constructor}</button>
      <span className="w-1/6">{Q1 || "-"}</span>
      <span className="w-1/6">{Q2 || "-"}</span>
      <span className="w-1/6">{Q3 || "-"}</span>

      {isDriverModalOpen && (
        <DriverDetails driverId={driverId} update={toggleDriverModal} />
      )}
            {isConstructorModalOpen && (
        <ConstructorDetails constructorId={constructorId} update={toggleConstructorModal} />
      )}
    </li>
  );
};

export default QualifyingItem;
