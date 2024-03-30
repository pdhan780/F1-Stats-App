import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
  import HomeViewRaceItem from "./HomeViewRaceItem";

  // Parent List component for Drivers
const HomeViewRaceList = () => {
    return (
        <div className="overflow-auto">
          <List>
          <HomeViewRaceItem number="1" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="1" name="Saudi Arabian Grand Prix" />
          </List>
        </div>
    );
  };

  export default HomeViewRaceList