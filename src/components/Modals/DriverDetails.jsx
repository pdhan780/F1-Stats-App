// IMPLEMENT URL and replace with actual circuit images once we have them
import { useState, useEffect } from "react";
import CloseButton from "./CloseButton";
import AddFavoritesButton from "./AddFavoritesButton";
import { supabase } from "../../SupaBase/supabaseClient";

const DriverDetails = ({ driverId, update, name, driverProfile, addToFavorites }) => {
  const [drivers, setDrivers] = useState([]);

  console.log(driverId, name, driverProfile)

  async function fetchResults() {
    try {
      let { data, error, status } = await supabase
        .from("drivers")
        .select(`forename,surname,dob,nationality,url,driver_profile`)
        .eq("driverId", driverId);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setDrivers(data);
        console.log(data);
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

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 items-center flex justify-center z-20">
      {/* Modal Container */}
      <div className="bg-f1-black rounded-lg shadow-2xl p-6 flex flex-col driver-details-line animate-slidetop">
        {/* Header */}
        <div className="flex justify-between border-b pb-3">
          <h1 className="text-2xl text-candy-apple font-f1 uppercase">
            Driver Details
          </h1>
        </div>

        {/* Body */}
        <div className="flex space-y-2 border-b pb-3">
          <div className="flex-1 flex-col space-y-2 text-left text-xl text-white pr-4">
            {drivers.length > 0 ? (
              <>
                <h2 className="font-bold text-2xl uppercase">
                  {drivers[0].forename + " " + drivers[0].surname}
                </h2>
                <p className="">DOB: {formatDate(drivers[0].dob)}</p>
                <p className="">Age: {calculateAge(drivers[0].dob)}</p>
                <p className="">Nationality: {drivers[0].nationality}</p>
                <a
                  href={drivers[0].url}
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
          <div className="flex flex-col space-y-4 items-center">
            <CloseButton update={update} />
            <AddFavoritesButton name={name}
              driverProfile={driverProfile}
              addToFavorites={addToFavorites}/>
          </div>
        </div>
        {/* Replace these images with circuit images once we have them */}
        {drivers.length > 0 ? (
          <>
            <div className="flex justify-around mt-4 ">
              <img
                src={drivers[0].driver_profile}
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
