import {
    ListItem,
    ListItemPrefix,
    Avatar,
    Typography,
  } from "@material-tailwind/react";

// Child Item component for a Driver
const DriverItem = ({name,driver_photo}) => {
    return (
      <ListItem className='mt-1 mb-1'>
        <ListItemPrefix>
          <Avatar variant="circular" alt="candice" src={driver_photo}/>
        </ListItemPrefix>
        <div>
          <Typography className="pl-2 font-bold flex-1 text-f1-black" variant="h6" color="blue-gray">
            {name}
          </Typography>
        </div>
      </ListItem>
    );
  };


  export default DriverItem