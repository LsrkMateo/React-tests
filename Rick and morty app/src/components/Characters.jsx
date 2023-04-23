import React, { useState } from "react";

const Characters = ({ characters = [] }) => {
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
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div
            className="card"
            style={
              item.status === "Alive"
                ? estiloCardAlive
                : item.status === "Dead"
                ? estiloCardDead
                : estiloCardUnknown
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
