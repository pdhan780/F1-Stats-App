
import DriverList from './DriverList';
import ConstructorList from './ConstructorList';
import CircuitList from './CircuitList';
import CloseButton from './CloseButton';

<<<<<<< HEAD
function Favorites({ update,updateEmpty,favoritesEmpty,driverInfo }) {
  console.log(driverInfo)
=======
function Favorites({ update,updateEmpty,favoritesEmpty }) {
  // Use React state to manage the empty state of the favorites container
  const test = ["max", "lewis"];
  console.log(test);
  
>>>>>>> 826dfcf1d7df77e8b49c96d198ccda89e88b7957

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-f1-black p-5 rounded-lg max-w-4xl w-full relative animate-slidetop favourites-line">
        <div className="flex justify-between">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase bg-f1-black z-10 pr-2">
            Favorites
          </h1>
        </div>

        {/* Container of lists */}
        
        {!favoritesEmpty && (
          <div className="flex justify-around mt-4 space-x-4">
            {/* Drivers List */}
<<<<<<< HEAD
            
            <DriverList driverInfo={driverInfo}/> 
=======
            <DriverList test={test} />
>>>>>>> 826dfcf1d7df77e8b49c96d198ccda89e88b7957

            {/* Constructors List */}
            <ConstructorList />

            {/* Circuits List */}
            <CircuitList />
          </div>
        )}
 
          <div className="flex py-2 space-x-4">
            <div className="flex-1">
              <button
                className="bg-white hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-3 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
                type="button"
                onClick={updateEmpty}
              >
                Empty Favorites
              </button>
            </div>
            <div className="flex-1"> </div>
            <div className="flex-1 text-right">
              <CloseButton update={update} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Favorites;