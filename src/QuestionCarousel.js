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
  const countries = [
    {name: "Russia", correctColors: ['#FFFFFF', '#0052A5', '#D52B1E'], randomizedColors: shuffleArray(['#FFFFFF', '#0052A5', '#D52B1E'])},
    {name: "Estonia", correctColors: ['#0072CE', '#000000', '#FFFFFF'], randomizedColors: shuffleArray(['#0072CE', '#000000', '#FFFFFF'])},
    {name: "Lithuania", correctColors: [ "#006A4D","#FDB913","#C1272D"], randomizedColors: shuffleArray(["#006A4D","#FDB913","#C1272D"])},
    {name: "Netherlands", correctColors: [  "#21468B",    "#FFFFFF",    "#AE1C28"], randomizedColors: shuffleArray([  "#21468B",    "#FFFFFF",    "#AE1C28"])},
    {name: "Germany", correctColors: ["#000000", "#FFCE00", "#D00A2D"], randomizedColors: shuffleArray(["#000000", "#FFCE00", "#D00A2D"])},
    {name: "Gabon", correctColors: ["#00A651", "#FCD116", "#00AEEF"], randomizedColors: shuffleArray(["#00A651", "#FCD116", "#00AEEF"])},
    {name: "Hungary", correctColors: ["#EE1C25", "#FFFFFF", "#436F4D"]    , randomizedColors: shuffleArray(["#EE1C25", "#FFFFFF", "#436F4D"])},
    {name: "Bolivia", correctColors: ["#D52B1E", "#FCD116", "#006A4E"], randomizedColors: shuffleArray(["#D52B1E", "#FCD116", "#006A4E"]    )},
    {name: "Armenia", correctColors: ["#D90012", "#F2A800", "#0033A0"], randomizedColors: shuffleArray(["#D90012", "#F2A800", "#0033A0"])},  
    {name: "Austria", correctColors: ["#ED2939", "#FFFFFF", "#ED2939"], randomizedColors: shuffleArray(["#ED2939", "#FFFFFF", "#ED2939"])},  
    {name: "Sierra Leone", correctColors: ["#0072C6", "#FFFFFF", "#1EB53A"], randomizedColors: shuffleArray(["#0072C6", "#FFFFFF", "#1EB53A"])},  
  ];
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
          {<Canvas sendMessageToParent={setNextCountryInCanvas} country={country} /> }
        </div>
      </header>
    </div>
  );
}

export default QuestionCarousel;

