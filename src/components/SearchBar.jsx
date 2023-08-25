import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
  
    const fetchData = (value) => {
      fetch("http://danulotmaxime-server.eddi.cloud/projet-1-o-game-back/public/api/games/")
        .then((response) => response.json())
        .then((json) => {
          const results = json.results.filter((game) =>
            game.slug.toLowerCase().includes(value.toLowerCase())
          );
          console.log(results);
          setResults(results);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  
    return (
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Rechercher un jeu..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  };
  

