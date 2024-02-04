import Canvas from "./Canvas";
import React, { useState, useEffect } from 'react';

function QuestionCarousel() {

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // template: {name: "", correctColors: [], randomizedColors: shuffleArray([])}
  const countries = shuffleArray([
    { name: "Russia", correctColors: ['#FFFFFF', '#0052A5', '#D52B1E'], randomizedColors: shuffleArray(['#FFFFFF', '#0052A5', '#D52B1E']) },
    { name: "Estonia", correctColors: ['#0072CE', '#000000', '#FFFFFF'], randomizedColors: shuffleArray(['#0072CE', '#000000', '#FFFFFF']) },
    { name: "Lithuania", correctColors: ['#FDB913', '#006A4D', '#C1272D'], randomizedColors: shuffleArray(['#FDB913', '#006A4D', '#C1272D']) },
    { name: "Netherlands", correctColors: ["#AE1C28", "#FFFFFF", "#21468B"], randomizedColors: shuffleArray(["#AE1C28", "#FFFFFF", "#21468B"]) },
    { name: "Germany", correctColors: ["#000000", "#D00A2D", "#FFCE00"], randomizedColors: shuffleArray(["#000000", "#D00A2D", "#FFCE00"]) },
    { name: "Gabon", correctColors: ["#00995D", "#F4CA15", "#3871BE"], randomizedColors: shuffleArray(["#00995D", "#F4CA15", "#3871BE"]) },
    { name: "Hungary", correctColors: ["#C8102E", "#FFFFFF", "#1E7C34"], randomizedColors: shuffleArray(["#C8102E", "#FFFFFF", "#1E7C34"]) },
    { name: "Bolivia", correctColors: ["#D52B1E", "#FCD116", "#006A4E"], randomizedColors: shuffleArray(["#D52B1E", "#FCD116", "#006A4E"]) },
    { name: "Armenia", correctColors: ["#D90012", "#0033A0", "#F2A800"], randomizedColors: shuffleArray(["#D90012", "#0033A0", "#F2A800"]) },
    { name: "Austria", correctColors: ["#ED2939", "#FFFFFF", "#ED2939"], randomizedColors: shuffleArray(["#ED2939", "#FFFFFF"]) },
    { name: "Sierra Leone", correctColors: ['#1EB53A', '#FFFFFF', '#0072C6'], randomizedColors: shuffleArray(['#1EB53A', '#FFFFFF', '#0072C6']) },
  ]);

  const [index, setIndex] = useState(0);
  const [country, setCountry] = useState(countries[0]);

  // Function to handle receiving a message from the child component
  const setNextCountryInCanvas = () => {
    const nextIndex = (index + 1) % countries.length;
    setIndex(nextIndex);
    setCountry(countries[nextIndex]);
  };

  return (
    <div className="QuestionCarousel">
      <header className="QuestionCarousel-header">
        <div id="Canvas-container">
          {<Canvas sendMessageToParent={setNextCountryInCanvas} country={country} />}
        </div>
      </header>
    </div>
  );
}

export default QuestionCarousel;

