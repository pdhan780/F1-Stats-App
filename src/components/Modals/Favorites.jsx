
import DriverList from './DriverList';
import ConstructorList from './ConstructorList';
import CircuitList from './CircuitList';
import CloseButton from './CloseButton';

function Favorites({ update,driverInfo,constructorInfo,onEmptyFavorites }) {
  console.log(driverInfo)
  console.log(constructorInfo)
  const handleEmptyFavorites = () => {
    onEmptyFavorites(); // Call the function to empty favorites
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-f1-black p-5 rounded-lg max-w-4xl w-full relative animate-slidetop favourites-line">
        <div className="flex justify-between">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase bg-f1-black z-10 pr-2">
            Favorites
          </h1>
        </div>

        {/* Container of lists */}
        
        
          <div className="flex justify-around mt-4 space-x-4">
            {/* Drivers List */}
            
            <DriverList driverInfo={driverInfo}/> 

            {/* Constructors List */}
            <ConstructorList constructorInfo={constructorInfo} />

            {/* Circuits List */}
            <CircuitList />
          </div>
        
 
          <div className="flex py-2 space-x-4">
            <div className="flex-1">
              <button
                className="bg-white hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-3 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleEmptyFavorites}
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