import React, { useState } from "react";

// Get the characters array from main 
const Characters = ({ characters = [] }) => {
  
  // Card Styles 
  const estiloCardAlive = {
    backgroundColor: "rgba(0, 128, 0, 0.5)",
  };

  const estiloCardDead = {
    backgroundColor: "rgba(255, 0, 0, 0.5)",
  };

  const estiloCardUnknown = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
  return (
    <div className="row">

      // Mapping characters 
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          
          // Conditional Styles 
          <div
            className="card"
            style={
              item.status === "Alive" // if
                ? estiloCardAlive // Set
                : item.status === "Dead" // else if
                ? estiloCardDead // set
                : estiloCardUnknown // else... set
            }
          >
            <img src={item.image} alt="imagen del personaje" />
            <div className="card-body">
              <h5 className="card-title">
                {item.name} - {item.species}
              </h5>
              <hr />
              <p>Origin: {item.origin.name}</p>
              <p>Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
