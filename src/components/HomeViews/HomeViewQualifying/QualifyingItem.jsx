import {
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import DriverDetails from "../../Modals/DriverDetails";
import { useState } from "react";

const QualifyingItem = ({ pos, driver, constructor, Q1, Q2, Q3, driver_photo,driverId }) => {


  // State to manage the visibility of the modal
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleDriverModal = () => {
    setIsDriverModalOpen(!isDriverModalOpen);
  };

  return (
    <li className="flex items-left text-center p-3">
      <span className="w-1/6 text-left font-f1 font-bold">{pos}</span>
      <button
        className="w-1/6 font-bold text-left hover:text-candy-apple"
        onClick={toggleDriverModal}
      >
      <Avatar variant="circular" alt="candice" src={driver_photo} /> 
        {driver}
      </button>
      <span className="w-1/6 text-left">{constructor}</span>
      <span className="w-1/6">{Q1 || "-"}</span>
      <span className="w-1/6">{Q2 || "-"}</span>
      <span className="w-1/6">{Q3 || "-"}</span>

      {isDriverModalOpen && (
        <DriverDetails driverId={driverId} update={toggleDriverModal} />
      )}
    </li>
  );
};

export default QualifyingItem;
