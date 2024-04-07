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
        .select(`name,country,location, url, circuit_profile`)
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
        <div className="flex space-y-2 border-b pb-3 space-x-4">
          <div className="flex-1 flex-col space-y-2 text-left text-xl text-white pr-4">
            {circuit.length > 0 ? (
              <>
                <h2 className="font-bold text-2xl uppercase">
                  {circuit[0].name}
                </h2>
                <p>
                  Location: {circuit[0].location}
                </p>
                <p>
                  Country: {circuit[0].country}
                </p>
                <a
                  href={circuit[0].url}
                  target="_blank"
                  className="pt-6 hover:underline hover:decoration-candy-apple"
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
          {circuit.length > 0 ? (
            <>
              <img
                src={circuit[0].circuit_profile}
                alt="Circuit placeholder"
                className="h-64 rounded-lg border-white border constructor_photo_bg"
              />
              <img
                src="src/assets/f1-default-share.png"
                alt="Map placeholder"
                className="h-32 p-4 rounded-lg border-white border"
              />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircuitDetails;
