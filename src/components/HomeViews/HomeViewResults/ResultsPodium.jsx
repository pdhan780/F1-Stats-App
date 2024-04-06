const ResultsPodium = ({ results }) => {
    
  const topThreeResults = results.slice(0, 3);
  // Create a podium where the first place sits in the middle and the second and third place sit on either side of the first place.
  return (
    <div className="flex justify-center">
      {topThreeResults.map((result) => (
        <div key={result.resultId} className="flex flex-col items-center">
          <img
            className="w-20 h-20"
            src={result.drivers.driver_photo}
            alt={result.drivers.forename}
          />
          <h1 className="font-f1 font-bold text-lg">
            {result.drivers.forename} {result.drivers.surname}
          </h1>
          <h1 className="font-f1 font-bold text-lg">
            {result.constructors.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ResultsPodium;