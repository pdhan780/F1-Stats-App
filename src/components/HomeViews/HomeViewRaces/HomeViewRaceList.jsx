import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import HomeViewRaceItem from "./HomeViewRaceItem";

const HomeViewRaceList = ({ races, onResultsClick}) => {
  return (
    <div className="overflow-y-scroll max-h-custom2 scrollbar">
      <List className="[&>*:nth-child(odd)]:bg-f1-light-gray [&>*:nth-child(even)]:bg-white p-0 m-0">
        {races.map((race) => (
          <HomeViewRaceItem
            key={race.round}
            round={race.round}
            name={race.name}
            raceId={race.raceId}
            onResultsClick={onResultsClick}
          />
        ))}
      </List>
    </div>
  );
};

export default HomeViewRaceList;
