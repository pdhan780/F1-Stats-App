import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
  import DriverItem from './DriverItem';

  // Parent List component for Drivers
const DriverList = () => {
    return (
      <Card className="w-1/3 p-2">
        <h6 className="f1-black font-f1 text-xl">Drivers</h6>
        <div className="overflow-auto max-h-64">
          <List>
            <DriverItem />
            <DriverItem />
            <DriverItem />
            <DriverItem />
            <DriverItem />
          </List>
        </div>
      </Card>
    );
  };

  export default DriverList