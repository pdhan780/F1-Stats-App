import React from 'react';
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
import CircuitItem from './CircuitItem';

const CircuitList = () => {
  return (
    <Card className="w-1/3 p-2">
      <h6 className="f1-black font-f1 text-xl">Circuits</h6>
      <div className="overflow-auto max-h-64">
        <List>
          <CircuitItem/>
          <CircuitItem/>
          <CircuitItem/>
        </List>
      </div>
    </Card>
  );
};

export default CircuitList;
