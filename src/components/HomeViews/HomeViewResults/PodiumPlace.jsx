const PodiumPlace = ({ result, backgroundHeight, positionOrder, imageWidth, imageHeight }) => {
    if (!result) return null; // If there's no result, don't render anything
    const getSlashesForPosition = (position) => {
      return '/'.repeat(position);
    };

    
  const slashes = getSlashesForPosition(positionOrder);
  
    return (
      <div className="flex flex-col items-center mx-1 relative hover:-translate-y-2 hover:scale-105 transition ease-in-out delay-25">
        <div className={`winner_photo_bg rounded-t-lg rounded-br-lg absolute bottom-0 ${backgroundHeight} ${imageWidth}`}></div>
        <img
          className={`${imageWidth} ${imageHeight} relative z-10`}
          src={result.drivers.driver_photo}
          alt={`${result.drivers.forename} ${result.drivers.surname}`}
        />
        <div className="z-10 py-1 relative bg-white w-full h-full rounded-br-lg border-f1-black border-r border-b hover:border-candy-apple">
          <h1 className="font-f1 text-lg font-bold text-center"><div className="text-xl text-candy-apple inline-block pr-2">{slashes}</div>{result.drivers.code}
          </h1>
        </div>
      </div>
    );
  };

export default PodiumPlace;