import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Canvas(props) {

    console.log(props);
    const [currentColor, setCurrentColor] = useState('#FFFFFF');
    const [done, setDone] = useState(false);    

    useEffect(() => {
        setDone(false);
      }, [props]); 

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
        var colors = siblings.map(sibling => sibling.getAttribute("fill"));
        const allMatch = colors.map((element, index) => element === props.country.correctColors[index]);
        const correct = allMatch.every(Boolean);

        console.log('correct  Colors ', props.country.correctColors);
        console.log('selected Colors ', colors);

        if (correct) {
            setDone(true);
            console.log('correct');
        } else setDone(false);
    }

    const sendMessageToParent = () => {
        props.sendMessageToParent();
    }

  return (
    <div className="Canvas">
      <header className="Canvas-header">
        <div style={{margin: '5px'}}>
            <label>{props.country.name}</label>
            { done && <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faThumbsUp} /> }
        </div>
        <div className="Canvas-flag">
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="66.7" fill="#FFFFFF" onClick={dropColor}/>
            <rect y="66.7" width="300" height="66.7" fill="#FFFFFF" onClick={dropColor}/>
            <rect y="133.4" width="300" height="66.6" fill="#FFFFFF" onClick={dropColor}/>
            </svg>

            { done && <button onClick={sendMessageToParent}><FontAwesomeIcon icon={faArrowRight} /></button> }
        </div>
        <div className="Canvas-flag-colours">
        <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
            {props.country.randomizedColors.map((item, index) => (
                <circle cx={(index+1) * 50} cy="50" r="40" key={index} data={item} fill={item} onClick={pickColor}/>
            ))}
            {/* <circle id="firstCircle" cx="50" cy="50" r="40" fill={props.country.randomizedColors[0]}/>
            <circle id="secondCircle" cx="150" cy="50" r="40" fill={props.country.randomizedColors[1]} onClick={pickColor} />
            <circle id="thirdCircle" cx="250" cy="50" r="40" fill={props.country.randomizedColors[2]} onClick={pickColor} />  */}
        </svg>

        </div>
        
      </header>
    </div>
  );
}

export default Canvas;
