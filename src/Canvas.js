import React, { useState } from 'react';

function Canvas(props) {

    console.log(props);
    const [currentColor, setCurrentColor] = useState('#FFFFFF');
    const [done, setDone] = useState(false);

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
        band.setAttribute("fill", currentColor);

        // Validate
        var siblings = Array.from(band.parentNode.children);
        console.log(siblings);
        var colors = siblings.map(sibling => sibling.getAttribute("fill"));
        const allMatch = colors.map((element, index) => element === props.country.correctColors[index]);
        const correct = allMatch.every(Boolean);
        if (correct) {
            setDone(true);
            console.log('correct');
        }
    }

  return (
    <div className="Canvas">
      <header className="Canvas-header">
        <div style={{margin: '5px'}}>
            <label>{props.country.name}</label>
            { done && 
                <i style={{marginLeft: '5px'}} className="fas fa-thumbs-up"></i> 
            }
        </div>
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
