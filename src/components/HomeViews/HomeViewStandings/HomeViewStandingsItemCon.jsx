import {
    ListItem,
    ListItemPrefix,
    Avatar,
    Typography,
  } from "@material-tailwind/react";
  import DriverDetails from "../../Modals/DriverDetails";
  import ConstructorDetails from "../../Modals/ConstructorDetails";
  import { useState } from "react";
  
  const HomeViewStandingsItemCon = ({constructor,constructor_profile,pos,points,wins,constructorId,setSelectedConstructor}) => {
    
    const [isConstructorModalOpen, setIsConstructorModalOpen] = useState(false);

    const toggleConstructorModal = () => {
      setIsConstructorModalOpen(!isConstructorModalOpen);
    };
    const handleAddToFavoritesCon = (constructor, constructor_profile) => {
      setSelectedConstructor(constructor, constructor_profile);
    };

  
    return (
      <li className="flex items-left text-center p-3">
        <span className="w-1/12 text-left font-f1 font-bold">{pos}</span>
        <button
          className="w-1/3 font-bold text-left hover:text-candy-apple"
          onClick={toggleConstructorModal}
        >
          <Avatar
            variant="circular"
            alt="candice"
            src={constructor_profile}
            className="inline-block mr-2"
          />
          {constructor}
        </button>
        <button
          className="w-1/6 font-bold text-left hover:text-candy-apple"
          onClick={toggleConstructorModal}
        >
  
        </button>
        <span>Points{points}</span>
        <span> -Wins{wins}</span>
  
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
  
  export default HomeViewStandingsItemCon;
  