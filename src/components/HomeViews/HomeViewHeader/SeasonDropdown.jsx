import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../../../SupaBase/supabaseClient";

const SeasonDropdown = ({ onSeasonSelect }) => {
  const [seasons, setSeasons] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
        setSeasons(data.map((season) => season.year));
      }
    } catch (error) {
      console.error("error", error.message);
    }
  }

  useEffect(() => {
    fetchSeasons();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
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
          className="absolute z-10 bg-f1-black season-dropdown overflow-auto scrollbar max-h-64"
        >
          {seasons.map((season) => (
            <div
              key={season}
              onClick={() => {
                onSeasonSelect(season);
                setIsDropdownOpen(false);
              }}
              className="px-11 py-3 hover:bg-f1-black2 text-white cursor-pointer"
            >
              {season}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeasonDropdown;
