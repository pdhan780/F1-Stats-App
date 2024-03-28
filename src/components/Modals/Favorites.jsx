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
  import DriverList from './DriverList';  
  import ConstructorList from './ConstructorList'; 
  import CircuitList from './CircuitList';

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
          <DriverList />

          {/* Constructors List */}       
         <ConstructorList/>

          {/* Circuits List */}      
         <CircuitList/>
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
