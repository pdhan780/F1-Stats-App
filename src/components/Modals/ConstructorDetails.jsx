// IMPLEMENT URL and replace with actual circuit images once we have them
import { useState, useEffect } from "react";
import CloseButton from "./CloseButton";
import AddFavoritesButton from "./AddFavoritesButton";
import { supabase } from "../../SupaBase/supabaseClient";

const ConstructorDetails = ({ constructorId, update,constructor,constructor_profile,addToFavorites }) => {
  const [constructors, setConstructors] = useState([]);

  async function fetchResults() {
    try {
      let { data, error, status } = await supabase
        .from("constructors")
        .select(`name, nationality, url, constructor_profile`)
        .eq("constructorId", constructorId);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setConstructors(data);
        console.log(data);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }

  useEffect(() => {
    if (constructors) {
      fetchResults();
    }
  }, []);

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      {/* Modal Container */}
      <div className="bg-f1-black rounded-lg shadow-2xl p-6 flex flex-col constructor-details-line animate-slidetop">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase">
            Constructor Details
          </h1>
        </div>

        {/* Body */}
        <div className="flex space-y-2 border-b pb-3">
          <div className="flex-1 flex-col space-y-2 text-left text-xl text-white">
            {constructors.length > 0 ? (
              <>
                <h2 className="text-2xl font-bold uppercase">
                  {constructors[0].name}
                </h2>
                <p >
                  Nationality: {constructors[0].nationality}
                </p>
                <a
                  href={constructors[0].url}
                  target="_blank"
                  className="hover:underline hover:decoration-candy-apple"
                >
                  More Info
                  <img
                    src="src/assets/side-chevron.png"
                    alt="Side Arrow"
                    className="h-4 pl-1 pb-1 inline-block"
                  />
                </a>
              </>
            ) : (
              <h2>
                Loading...
              </h2>
            )}
          </div>
          <div className="flex flex-col space-y-2 items-center justify-between">
            <CloseButton update={update} />
            <AddFavoritesButton constructor={constructor} constructor_profile={constructor_profile} addToFavorites={addToFavorites}/>
          </div>
        </div>
        {/* Replace these images with circuit images once we have them */}
        {constructors.length > 0 ? (
          <div className="flex justify-around mt-4 ">
            <img
              src={constructors[0].constructor_profile}
              alt="Constructor placeholder"
              className="constructor_photo_bg rounded border-white border"
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ConstructorDetails;
