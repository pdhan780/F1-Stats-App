import QualifyingList from "./QualifyingList";

const HomeViewQualifying = ({ race,onDriverDetailClick }) => {
    // Define a function to handle race item click
    const handleDriverItemClick = (name,driver_photo) => {
      // Do something with the clicked race name, such as sending it to the parent
      onDriverDetailClick(name,driver_photo)
      console.log("Results clicked for driver detail:", name,driver_photo);
      console.log("Data lifted to HomeViewRaces component!");
    };
  return (
    <div className=" border-t-8 border-f1-black flex-col ">
      <div className="bg-f1-black flex justify-center">
        <h1 className="font-bold text-white text-2xl font-f1 text-center p-2">
          QUALIFYING
        </h1>
      </div>
      <div className="flex text-center border-b-2 border-f1-black pt-4 pr-4 font-f1 font-bold">
        <h1 className="w-1/6 text-left">POS</h1>
        <h1 className="w-1/6"></h1>
        <h1 className="w-1/6"></h1>
        <h1 className="w-1/6">Q1</h1>
        <h1 className="w-1/6">Q2</h1>
        <h1 className="w-1/6">Q3</h1>
      </div>
      <QualifyingList qualifying={race} setSelectedDriver={handleDriverItemClick} />
    </div>
  );
};

export default HomeViewQualifying;
