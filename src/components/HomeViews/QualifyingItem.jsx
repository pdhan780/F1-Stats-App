import DriverDetails from "../Modals/DriverDetails";
import { useState } from 'react';

const QualifyingItem = ({ pos, driver, constructor, Q1, Q2, Q3 }) => {
    
    const [driver1, setDriver] = useState({
        name: 'Lewis Hamilton',
        dob: 'January 7, 1985',
        age: 36
      });

      // State to manage the visibility of the modal
      const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
    
      // Function to toggle the modal
      const toggleDriverModal = () => {
        setIsDriverModalOpen(!isDriverModalOpen);
      };

    return (
        <li className="grid grid-cols-6 gap-4 items-left">
        <span className="text-left font-f1 font-bold p-3">{pos}</span>
        <button className="col-span-1 font-bold text-left hover:text-candy-apple" onClick={toggleDriverModal}>{driver}</button>
        <span className="col-span-1 ">{constructor}</span>
        <span className="col-span-1">{Q1}</span>
        <span className="col-span-1">{Q2}</span>
        <span className="col-span-1">{Q3}</span>
        
      {isDriverModalOpen && <DriverDetails driver={driver1} update={toggleDriverModal}/>}
    </li>
    );
  };
  
  export default QualifyingItem;
  