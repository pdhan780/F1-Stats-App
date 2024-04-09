
import { useState, useEffect } from "react";
import CloseButton from "./CloseButton";
import AddFavoritesButton from "./AddFavoritesButton";
import { supabase } from "../../SupaBase/supabaseClient";
import CircuitLeaflet from "./CircuitLeaflet";

const CircuitDetails = ({
  circuitId,
  circuitName,
  circuitProfile,
  addToFavorites,
  update,
}) => {
  console.log("Circuit ID:", circuitId);
  const [circuit, setCircuit] = useState([]);

  async function fetchResults() {
    try {
      let { data, error, status } = await supabase
        .from("circuits")
        .select(`name,country,location, url, circuit_profile, lat, lng`)
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
    if (circuitId) {
      fetchResults();
    }
  }, [circuitId]);

  console.log("Circuit:", circuit);
  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      {/* Modal Container */}
      <div className="bg-f1-black rounded-lg shadow-2xl p-6 flex flex-col circuit-details-line animate-slidetop">
        {/* Header */}
        <div className="flex justify-between border-b pb-3">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase">
            Circuit Details
          </h1>
        </div>

        {/* Body */}
        <div className="flex space-y-2 border-b pb-3 space-x-4">
          <div className="flex-1 flex-col space-y-2 text-left text-lg text-white pr-4">
            {circuit.length > 0 ? (
              <>
                <h2 className="font-bold text-2xl uppercase">
                  {circuit[0].name}
                </h2>
                <p>Location: {circuit[0].location}</p>
                <p>Country: {circuit[0].country}</p>
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
              <p>
                <svg
                  class="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                ></svg>
                Loading...
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <CloseButton update={update} />
            <AddFavoritesButton
              circuitName={circuitName}
              circuitProfile={circuitProfile}
              addToFavorites={addToFavorites}
            />
          </div>
        </div>
        {/* Replace these images with circuit images once we have them */}
        <div className="flex flex-grow justify-around space-x-2 mt-4 ">
          {circuit.length > 0 ? (
            <>
              <img
                src={circuit[0].circuit_profile}
                alt="Circuit placeholder"
                className="h-64 rounded-lg border-white border constructor_photo_bg"
              />
              <div className="inline-block h-64 w-96">
                <CircuitLeaflet
                  lat={circuit[0].lat}
                  lng={circuit[0].lng}
                  name={circuit[0].name}
                />
              </div>
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
