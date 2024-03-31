const HomeViewRaceItem = ({ number, name }) => {
  return (
    <ol className="list-decimal list-inside space-y-4">
      <li className="flex items-center space-x-4 p-2">
        <span className="font-f1 font-bold border-2 border-candy-apple p-2 rounded">{number}</span>
        <span className="font-bold pl-8 flex-1">{name}</span>
        <button className="bg-f1-black2 hover:bg-f1-dark-gray text-white font-bold py-2 px-4 rounded hover:-translate-y-0.5">
          Results
        </button>
        <button className="bg-f1-black2 hover:bg-f1-dark-gray text-white font-bold py-2 px-4 rounded hover:-translate-y-0.5">
          Standings
        </button>
      </li>
    </ol>
  );
};

export default HomeViewRaceItem;
