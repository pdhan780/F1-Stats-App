import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import QualifyingItem from "./QualifyingItem";

// Parent List component for Qualifying Item
const QualifyingList = ({
  qualifying,
  setSelectedDriver,
  setSelectedConstructor,
}) => {
  return (
    <div className="overflow-y-scroll max-h-custom2 scrollbar">
      <List className="[&>*:nth-child(odd)]:bg-f1-light-gray [&>*:nth-child(even)]:bg-white p-0 m-0">
        {qualifying.map((qualifying, index) => (
          <QualifyingItem
            key={index}
            pos={qualifying.position >0 ? qualifying.position : "-"}
            driver={
              qualifying.drivers.forename + " " + qualifying.drivers.surname
            }
            constructor={qualifying.constructors.name}
            constructor_profile={qualifying.constructors.constructor_profile}
            Q1={qualifying.q1}
            Q2={qualifying.q2}
            Q3={qualifying.q3}
            driver_photo={qualifying.drivers.driver_photo}
            driverId={qualifying.drivers.driverId}
            constructorId={qualifying.constructors.constructorId}
            setSelectedDriver={setSelectedDriver}
            setSelectedConstructor={setSelectedConstructor}
          />
        ))}
      </List>
    </div>
  );
};

export default QualifyingList;
