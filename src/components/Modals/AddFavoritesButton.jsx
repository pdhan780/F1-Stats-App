const AddFavoritesButton = ({ name, driverProfile, addToFavorites }) => {
  const handleAddToFavorites = () => {
    // Lift up data to parent component (QualifyingItem)
    addToFavorites(name, driverProfile);
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