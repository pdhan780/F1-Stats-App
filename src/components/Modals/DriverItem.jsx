import {
    ListItem,
    ListItemPrefix,
    Avatar,
    Typography,
  } from "@material-tailwind/react";

// Child Item component for a Driver
const DriverItem = () => {
    return (
      <ListItem className='mt-1 mb-1'>
        <ListItemPrefix>
          <Avatar variant="circular" alt="candice" src="https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.img.1920.medium.jpg/1708362076344.jpg" />
        </ListItemPrefix>
        <div>
          <Typography className="pl-2 font-bold flex-1 text-f1-black" variant="h6" color="blue-gray">
            Lewis Hamilton
          </Typography>
        </div>
      </ListItem>
    );
  };


  export default DriverItem