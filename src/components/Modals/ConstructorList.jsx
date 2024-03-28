import React from 'react';
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
import ConstructorItem from './ConstructorItem';

const ConstructorList = () => {
  return (
    <Card className="w-1/3 p-2 ml-3 mr-3">
      <h6 className="f1-black font-f1 text-xl">Constructors</h6>
      <div className="overflow-auto max-h-64">
        <List>
          <ConstructorItem/>
          <ConstructorItem/>
          <ConstructorItem/>
        </List>
      </div>
    </Card>
  );
};

export default ConstructorList;
