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
        <div className="overflow-y-scroll max-h-96 scrollbar">
          <List className="[&>*:nth-child(odd)]:bg-f1-light-gray [&>*:nth-child(even)]:bg-white p-0 m-0">
          <HomeViewRaceItem number="1" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="2" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="3" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="4" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="5" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="6" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="7" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="8" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="9" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="10" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="11" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="12" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="13" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="14" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="15" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="16" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="17" name="Saudi Arabian Grand Prix" />
          <HomeViewRaceItem number="18" name="Saudi Arabian Grand Prix" />
          </List>
        </div>
    );
  };

  export default HomeViewRaceList