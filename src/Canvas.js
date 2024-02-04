import React, { useState } from 'react';

function Canvas(country) {

    const [currentColor, setCurrentColor] = useState('#000000');

    const pickColor = (event) => {
        const circle = event.target;
        const currentColor = circle.getAttribute("fill"); 
        console.log(currentColor);

        setCurrentColor(currentColor);
        var siblings = circle.parentNode.children;

        // Loop through siblings to deselect them
        for (var i = 0; i < siblings.length; i++) {
          var sibling = siblings[i];
          if (sibling !== circle) {
            sibling.setAttribute("stroke", "none");
          }
        }

        circle.setAttribute("stroke", "#000000"); // Add black border
        circle.setAttribute("stroke-width", "3"); // Set border width
      }


      const dropColor = (event) => {
        var band = event.target;
        band.setAttribute("fill", currentColor)
    }

  return (
    <div className="Canvas">
      <header className="Canvas-header">
        <div className="Canvas-flag">
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="66.7" fill="#FFFFFF" onClick={dropColor}/>
            <rect y="66.7" width="300" height="66.7" fill="#FFFFFF" onClick={dropColor}/>
            <rect y="133.4" width="300" height="66.6" fill="#FFFFFF" onClick={dropColor}/>
            </svg>
        </div>
        <div className="Canvas-flag-colours">
        <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle id="whiteCircle" cx="50" cy="50" r="40" fill="#FFFFFF" onClick={pickColor} />
            <circle id="blueCircle" cx="150" cy="50" r="40" fill="#0052A5" onClick={pickColor} />
            <circle id="redCircle" cx="250" cy="50" r="40" fill="#D52B1E" onClick={pickColor} /> 
        </svg>

        </div>
      </header>
    </div>
  );
}

export default Canvas;
