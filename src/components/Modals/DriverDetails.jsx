// IMPLEMENT URL and replace with actual circuit images once we have them
import { useState,useEffect } from "react";
import CloseButton from "./CloseButton";
import AddFavoritesButton from "./AddFavoritesButton";
import { supabase } from "../../SupaBase/supabaseClient";

const DriverDetails = ({ driverId, update }) => {
  const [drivers, setDrivers] = useState([]);

  async function fetchResults() {
    try {
      let { data, error, status } = await supabase
        .from("drivers")
        .select(
          `forename,surname,dob,nationality,url,driver_photo`
        )
        .eq("driverId", driverId)

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setDrivers(data);
        console.log(data)
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }

  useEffect(() => {
    if (drivers) {
      fetchResults();
    }
  }, []);

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      {/* Modal Container */}
      <div className="bg-f1-black rounded-lg shadow-2xl p-6 flex flex-col driver-details-line animate-slidetop">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase">
            Driver Details
          </h1>
        </div>

        {/* Body */}
        <div className="flex space-y-2 border-b pb-3">
        <div className="flex-1 flex-col space-y-2">
        {drivers.length > 0 ? (
          <>
            <h2 className="text-xl text-white font-f1 font-b uppercase">
              {drivers[0].forename}
            </h2>
            <p className="text-white font-f1 font-b uppercase">
              {drivers[0].dob}
            </p>
            <p className="text-white mb-4 font-f1 font-b uppercase">
              AGE: 39
            </p>
            <p className="text-white mb-4 font-f1 font-b uppercase">
              {drivers[0].nationality}
            </p>
            <p className="text-white mb-4 font-f1 font-b uppercase">
              {drivers[0].url}
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
          <div className="flex flex-col space-y-2 items-center justify-between">
            <CloseButton update={update} />
            <AddFavoritesButton />
          </div>
        </div>
        {/* Replace these images with circuit images once we have them */}
        {drivers.length > 0 ? (
          <>
        <div className="flex justify-around mt-4 ">
          <img
            src={drivers[0].driver_photo}
            alt="Driver placeholder"
            className="p-4 driver-picture-size rounded-lg border-white border"
          />
        </div>
        </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DriverDetails;
