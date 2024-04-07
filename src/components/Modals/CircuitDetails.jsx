// IMPLEMENT URL and replace with actual circuit images once we have them
import { useState, useEffect } from "react";
import CloseButton from "./CloseButton";
import AddFavoritesButton from "./AddFavoritesButton";
import { supabase } from "../../SupaBase/supabaseClient";

const CircuitDetails = ({ circuitId, update }) => {
  console.log("Circuit ID:", circuitId);
  const [circuit, setCircuit] = useState([]);

  async function fetchResults() {
    try {
      let { data, error, status } = await supabase
        .from("circuits")
        .select(`name,country,location,url`)
        .eq("circuitId", circuitId);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCircuit(data);
        console.log(data);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }

  useEffect(() => {
    if (circuit) {
      fetchResults();
    }
  }, []);

  console.log("Circuit:", circuit);
  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      {/* Modal Container */}
      <div className="bg-f1-black rounded-lg shadow-2xl p-6 flex flex-col circuit-details-line animate-slidetop">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase">
            Circuit Details
          </h1>
        </div>

        {/* Body */}
        <div className="flex space-y-2 border-b pb-3">
          <div className="flex-1 flex-col space-y-2">
            {circuit.length > 0 ? (
              <>
                <h2 className="text-xl text-white font-f1 font-b uppercase">
                  {circuit[0].name}
                </h2>
                <p className="text-white font-f1 font-b uppercase">
                  {circuit[0].location}
                </p>
                <p className="text-white mb-4 font-f1 font-b uppercase">
                  {circuit[0].country}
                </p>
                <p className="text-white mb-4 font-f1 font-b uppercase">
                  Circuit URL
                </p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="flex flex-col space-y-2 items-center justify-between">
            <CloseButton update={update} />
            <AddFavoritesButton />
            <button
              className="bg-white hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-3 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Favorites
            </button>
          </div>
        </div>
        {/* Replace these images with circuit images once we have them */}
        <div className="flex justify-around space-x-2 mt-4 ">
          <img
            src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Miami%20carbon.png.transform/3col/image.png"
            alt="Circuit placeholder"
            className="h-32 p-4 rounded-lg border-white border"
          />
          <img
            src="src/assets/f1-default-share.png"
            alt="Map placeholder"
            className="h-32 p-4 rounded-lg border-white border"
          />
        </div>
      </div>
    </div>
  );
};

export default CircuitDetails;
