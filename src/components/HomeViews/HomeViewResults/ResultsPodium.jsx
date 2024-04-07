import PodiumPlace from "./PodiumPlace";

const ResultsPodium = ({ results }) => {
  const backgroundHeights = ["h-28", "h-24", "h-20"]; // Heights for 1st, 2nd, and 3rd places
  const imageWidth = ["w-28", "w-24"]; // Sizes for 1st and 2nd/3rd places
  const imageHeight = ["h-28", "h-24"]; // Sizes for 1st and 2nd/3rd places

  // Only render if we have results
  if (results.length < 3) return null;

  return (
    <div className="flex border-b-4 border-f1-black ">
      <div className="flex-1">
      </div>
      <div className="flex-grow flex justify-center items-end py-4 space-x-10 ">
        <PodiumPlace
          result={results[1]}
          backgroundHeight={backgroundHeights[1]}
          positionOrder="2"
          imageWidth={imageWidth[1]}
          imageHeight={imageHeight[1]}
        />
        <PodiumPlace
          result={results[0]}
          backgroundHeight={backgroundHeights[0]}
          positionOrder="1"
          imageWidth={imageWidth[0]}
          imageHeight={imageHeight[0]}
        />
        <PodiumPlace
          result={results[2]}
          backgroundHeight={backgroundHeights[2]}
          positionOrder="3"
          imageWidth={imageWidth[1]}
          imageHeight={imageHeight[1]}
        />
      </div>
      <div className="flex-1">
      </div>
    </div>
  );
};

export default ResultsPodium;
