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
    <Card className="w-1/3 p-2 bg-white border-r-4 border-t-4 border-b-4 border-f1-gray hover:border-candy-apple rounded-br-xl rounded-tr-xl transition ease-in-out delay-25">
      <h6 className="text-f1-black font-f1 text-xl border-b-2 border-f1-black">CONSTRUCTORS</h6>
        <div className="overflow-auto max-h-64 scrollbar">
        <List className="[&>*:nth-child(odd)]:bg-f1-light-gray [&>*:nth-child(even)]:bg-white">
          <ConstructorItem/>
          <ConstructorItem/>
          <ConstructorItem/>
        </List>
        </div>
    </Card>
  );
};

export default ConstructorList;
