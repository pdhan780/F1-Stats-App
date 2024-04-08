import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
  import HomeViewStandingsItemCon from "./HomeViewStandingsItemCon";
  
  // Parent List component for Constructors
  const HomeViewStandingsListCon = ({
    constructorData,
    setSelectedConstructor
  }) => 
  
  {
    console.log(constructorData)
    return (
      <div className="overflow-y-scroll max-h-custom4 scrollbar">
        <List className="[&>*:nth-child(odd)]:bg-f1-light-gray [&>*:nth-child(even)]:bg-white p-0 m-0">
        {constructorData.map((constructor, index) => (
          <HomeViewStandingsItemCon
            key={index}
            constructor={constructor.constructors.name}
            constructor_profile={constructor.constructors.constructor_profile}
            pos={constructor.position}
            points={constructor.points}
            wins={constructor.wins}
            constructorId ={constructor.constructors.constructorId}
            setSelectedConstructor={setSelectedConstructor}
          />
        ))}
        </List>
      </div>
    );
  };
  
  export default HomeViewStandingsListCon;
  