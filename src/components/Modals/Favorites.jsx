import React from 'react';
// Import necessary components
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";

function Favorites({update}) {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"> 
      <div className="bg-f1-black p-5 rounded-lg max-w-4xl w-full relative">
        <div className="flex justify-between">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase">Favorites</h1>
        </div>
        <div className = "absolute top-0 right-0 mt-2 mr-5">
        <button
              className="bg-white  hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-3 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
              type="button"
              onClick={update}
            >
              Close
            </button>
        </div>
         
         {/*Container of lists*/}
        <div className="flex justify-around mt-4">


          {/* Drivers List */}
          <Card className="w-1/3 p-2">
            <h6 className="f1-black font-f1 text-xl">Drivers</h6>
        <div className="overflow-auto max-h-64">    
        <List>   
        <ListItem className='mt-1 mb-1'>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src="https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.img.1920.medium.jpg/1708362076344.jpg" />
          </ListItemPrefix>
          <div>
            <Typography className = "p-2" variant="h6" color="blue-gray">
              Lewis Hamilton
            </Typography>
          </div>
        </ListItem>
        <ListItem className='mt-1 mb-1'>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src="https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.img.1920.medium.jpg/1708362076344.jpg" />
          </ListItemPrefix>
          <div>
            <Typography className = "p-2" variant="h6" color="blue-gray">
              Lewis Hamilton
            </Typography>
          </div>
        </ListItem>
        <ListItem className='mt-1 mb-1'>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src="https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.img.1920.medium.jpg/1708362076344.jpg" />
          </ListItemPrefix>
          <div>
            <Typography className = "p-2" variant="h6" color="blue-gray">
              Lewis Hamilton
            </Typography>
          </div>
        </ListItem>
        <ListItem className='mt-1 mb-1'>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src="https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.img.1920.medium.jpg/1708362076344.jpg" />
          </ListItemPrefix>
          <div>
            <Typography className = "p-2" variant="h6" color="blue-gray">
              Lewis Hamilton
            </Typography>
          </div>
        </ListItem>
        <ListItem className='mt-1 mb-1'>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src="https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.img.1920.medium.jpg/1708362076344.jpg" />
          </ListItemPrefix>
          <div>
            <Typography className = "p-2" variant="h6" color="blue-gray">
              Lewis Hamilton
            </Typography>
          </div>
        </ListItem>
            </List>
            </div>
          </Card>
          
          {/* Constructors List */}
          
          <Card className="w-1/3 p-2 ml-3 mr-3">
            <h6 className="f1-black font-f1 text-xl">Constructors</h6>
            <div className="overflow-auto max-h-64">       
            <List>
            <ListItem>Mercedes</ListItem>
            <ListItem>Red Bull</ListItem>
            <ListItem>Mclaren</ListItem>
            </List>
            </div>
          </Card>
          
          {/* Circuits List */}
       
          <Card className="w-1/3 p-2">
          <h6 className="f1-black font-f1 text-xl">Circuits</h6>
          <div className="overflow-auto max-h-64">    
            <List>
            <ListItem>Monza</ListItem>
            <ListItem>Dubai</ListItem>
            <ListItem>Roma</ListItem>
            </List>
            </div>
          </Card>
        </div>

        <div className="text-right mt-4">
          <button className="bg-white hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-3 px-4 mt-3 rounded shadow-xl focus:outline-none focus:shadow-outline color=red" onClick={() => {/* handle empty favorites */}}>
            Empty Favorites
          </button>
        </div>
      </div>
    </div>

  );
}

export default Favorites;
