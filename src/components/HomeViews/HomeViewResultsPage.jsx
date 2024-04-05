import HomeViewQualifying from "./HomeViewQualifying/HomeViewQualifying";

const HomeViewResultsPage = ({selectedRace}) => {
  console.log("Check1:", selectedRace);
  return (
    <div className="border-r-8 border-b-8 border-t-8 border-f1-black rounded-br-3xl rounded-tr-3xl flex-col p-1.5">
      <div className="bg-candy-apple flex p-4 justify-center">
        <h1 className="font-bold text-white text-2xl font-f1 text-center p-4">
          RESULTS
        </h1>
      </div>
      <div className="flex">
        <div className="flex-1 pt-4">
          <HomeViewQualifying race={selectedRace}/>
        </div>
      </div>
    </div>
  );
};

export default HomeViewResultsPage;
