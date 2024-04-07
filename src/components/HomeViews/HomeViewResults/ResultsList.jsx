import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import ResultsItem from "./ResultsItem";

// Parent List component for Drivers
const ResultsList = ({ race }) => {
  return (
    <div className="overflow-y-scroll max-h-custom1 scrollbar">
      <List className="[&>*:nth-child(odd)]:bg-f1-light-gray [&>*:nth-child(even)]:bg-white p-0 m-0">
        {race.map((race, index) => (
          <ResultsItem
            key={index}
            pos={race.positionOrder}
            driver={race.drivers.forename + " " + race.drivers.surname}
            constructor={race.constructors.name}
            laps={race.laps}
            points={race.points}
            driver_photo={race.drivers.driver_photo}
            driverId={race.drivers.driverId}
            constructorId={race.constructors.constructorId}
          />
        ))}
      </List>
    </div>
  );
};

export default ResultsList;
