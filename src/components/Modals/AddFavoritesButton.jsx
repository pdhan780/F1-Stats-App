const AddFavoritesButton = ({ name, driverProfile,constructor, constructor_profile,circuitName,circuitProfile,addToFavorites }) => {
  const handleAddToFavorites = () => {
    // Lift up data to parent component (QualifyingItem)
    if(name && driverProfile){
      console.log("driver was clicked!")
    addToFavorites(name, driverProfile);
    }
    
    if(constructor && constructor_profile){
      console.log("constructor was clicked!")
      addToFavorites(constructor,constructor_profile)
    }

    if(circuitName && circuitProfile){
      console.log("circuit was clicked")
      addToFavorites(circuitName,circuitProfile)
    }

  };

  return (
    <button
      className="bg-white hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-3 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
      type="button"
      onClick={handleAddToFavorites}
    >
      Add Favorites
    </button>
  );
};

export default AddFavoritesButton;