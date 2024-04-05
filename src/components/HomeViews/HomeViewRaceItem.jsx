const HomeViewRaceItem = ({ round, name, onResultsClick}) => {
  const handleResultsClick = () => {
    // Call the onResultsClick callback function and pass the name data
    onResultsClick(name);
  };
 

  return (
    <li className="flex items-center space-x-4 p-2">
      <span className="font-f1 font-bold border-2 border-candy-apple p-2 rounded">
        {round}
      </span>
      <span className="font-bold pl-8 flex-1">{name}</span>
      <button className="bg-f1-black2 hover:bg-f1-dark-gray text-white font-bold py-2 px-4 rounded hover:-translate-y-0.5"
      onClick={handleResultsClick}>
        Results
      </button>
      <button className="bg-f1-black2 hover:bg-f1-dark-gray text-white font-bold py-2 px-4 rounded hover:-translate-y-0.5">
        Standings
      </button>
    </li>
  );
};

export default HomeViewRaceItem;
