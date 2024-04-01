import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
import QualifyingItem from "./QualifyingItem";

  // Parent List component for Drivers
const QualifyingList = () => {
    return (
        <div className="overflow-y-scroll max-h-64 scrollbar">
          <List className="[&>*:nth-child(odd)]:bg-f1-light-gray [&>*:nth-child(even)]:bg-white p-0 m-0">
          <QualifyingItem pos="1" driver="Max Verstappen" constructor="Red Bull Racing" Q1="1:27:23" Q2="1:27:23" Q3="1:27:23"/>
          <QualifyingItem pos="10" driver="Max Verstappen" constructor="Red Bull Racing" Q1="1:27:23" Q2="1:27:23" Q3="1:27:23"/>
          <QualifyingItem pos="1" driver="Max Verstappen" constructor="Red Bull Racing" Q1="1:27:23" Q2="1:27:23" Q3="1:27:23"/>
          <QualifyingItem pos="1" driver="Max Verstappen" constructor="Red Bull Racing" Q1="1:27:23" Q2="1:27:23" Q3="1:27:23"/>
          <QualifyingItem pos="1" driver="Max Verstappen" constructor="Red Bull Racing" Q1="1:27:23" Q2="1:27:23" Q3="1:27:23"/>
          <QualifyingItem pos="1" driver="Max Verstappen" constructor="Red Bull Racing" Q1="1:27:23" Q2="1:27:23" Q3="1:27:23"/>
          <QualifyingItem pos="1" driver="Max Verstappen" constructor="Red Bull Racing" Q1="1:27:23" Q2="1:27:23" Q3="1:27:23"/>
          </List>
        </div>
    );
  };

  export default QualifyingList