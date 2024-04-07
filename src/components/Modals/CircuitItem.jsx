import React from 'react';
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";

const CircuitItem = ({name,profile}) => {
  return (
    <ListItem className='mt-1 mb-1'>
      <ListItemPrefix>
        <Avatar variant="circular" alt="candice" src={profile}/>
      </ListItemPrefix>
      <div>
        <Typography className="pl-2 font-bold flex-1 text-f1-black" variant="h6" color="blue-gray">
          {name}
        </Typography>
      </div>
    </ListItem>
  );
};

export default CircuitItem;
