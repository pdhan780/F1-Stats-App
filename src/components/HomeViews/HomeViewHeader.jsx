import React, { useState, useEffect, useRef } from "react";
import Favorites from "../Modals/Favorites";
import About from "../Modals/About";
import { supabase } from "../../SupaBase/supabaseClient";

const HomeViewHeader = () => {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [seasons, setSeasons] = useState([]);
  const dropdownRef = useRef(null); // Ref for the dropdown

  // Function to fetch seasons from Supabase
  async function fetchSeasons() {
    try {
      let { data, error, status } = await supabase
      .from("seasons")
      .select("year")
      .order("year", { ascending: false });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        // Assuming data is an array of season objects
        setSeasons(data.map((season) => season.year)); // Map to your season identifier, e.g., year
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }

  // Effect to fetch seasons on mount
  useEffect(() => {
    fetchSeasons();
  }, []);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };


  // Function to close the dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const [favoritesEmpty, setFavoritesEmpty] = useState(false);
  
  // Function to handle emptying favorites
  const handleEmptyFavorites = () => {
    // Set the empty state to true
    setFavoritesEmpty(true);
  };

  return (
    <nav className="m-0 p-0">
      <div className="flex items-center justify-between bg-candy-apple m-0 p-0">
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/f1-default-share.png"
            alt="F1 Logo"
            className="h-8 ml-4"
          />
          <h1 className="text-white font-bold text-xl font-f1 ml-4">
            F1 ANALYSIS
          </h1>
        </div>
        <div className="flex items-center space-x-10 relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="transition ease-in-out delay-25 text-white font-f1 flex items-center hover:bg-f1-black hover:text-white px-3 py-6"
          >
            SEASON
            <img
              src="src/assets/dropdown-chevron.png"
              alt="Down Arrow"
              className="h-2 ml-1"
            />
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full bg-f1-black season-dropdown overflow-auto scrollbar max-h-64"
            >
              {seasons.map((season) => (
                <div
                  key={season}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-11 py-3 hover:bg-f1-black2 text-white cursor-pointer"
                >
                  {season}
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => setIsModalOpen(true)}
            className="transition ease-in-out delay-25 text-white font-f1 hover:bg-f1-black hover:text-white px-3 py-6 focus:outline-none"
          >
            FAVORITES
          </button>
          <button
            onClick={() => setIsAboutOpen(true)}
            className="transition ease-in-out delay-25 text-white font-f1 hover:bg-f1-black hover:text-white px-3 py-6 focus:outline-none"
          >
            ABOUT
          </button>
        </div>
        <div className="flex"></div>
        <div className="flex"></div>
      </div>
      {isModalOpen && <Favorites update={toggleModal} updateEmpty = {handleEmptyFavorites} favoritesEmpty = {favoritesEmpty} />}
      {isAboutOpen && <About update={toggleAbout} />}
    </nav>
  );
};

export default HomeViewHeader;
