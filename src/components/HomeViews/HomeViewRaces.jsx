import HomeViewRaceList from "./HomeViewRaceList";

const HomeViewRaces = () => {
  return (<div className="border-r-8 border-b-8 border-t-8 border-f1-black rounded-br-3xl rounded-tr-3xl flex-col">
    <h1 className="font-bold text-candy-apple text-2xl font-f1 text-center p-8">2024 RACES</h1>
    <div className="flex space-x-10">
    <h1 className="flex-1 font-f1 font-bold ">ROUND</h1>
    <h1 className="flex-1 font-f1 font-bold ">CIRCUIT</h1>
    <h1 className="flex-1"></h1>
    <h1 className="flex-1"></h1>
    </div>
    <div className="flex">
    <HomeViewRaceList />
    </div>
  </div>);
};

export default HomeViewRaces;
