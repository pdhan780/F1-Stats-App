import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
  import HomeViewStandingsItemDriver from "./HomeViewStandingsItemDriver";
  
  // Parent List component for Drivers
  const HomeViewStandingsListDriver = ({
    driverData,
    setSelectedDriver
  }) => 
  
  {
    console.log(driverData)
    return (
      <div className="overflow-y-scroll max-h-custom2 scrollbar">
        <List className="[&>*:nth-child(odd)]:bg-f1-light-gray [&>*:nth-child(even)]:bg-white p-0 m-0">
        {driverData.map((driver, index) => (
          <HomeViewStandingsItemDriver
            key={index}
            driver={driver.drivers.forename+ " " +driver.drivers.surname}
            driver_photo={driver.drivers.driver_photo}
            pos={driver.position}
            points={driver.points}
            wins={driver.wins}
            driverId={driver.drivers.driverId}
            setSelectedDriver={setSelectedDriver}
          />
        ))}
        </List>
      </div>
    );
  };
  
  export default HomeViewStandingsListDriver;
  