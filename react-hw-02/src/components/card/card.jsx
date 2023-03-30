import React from "react";

import "./card.css";

export const Card = ({data}) => {
  return (
    <div className="character-cards">
      {Array.isArray(data) ? (
        data.map((el, ind) => {
          return (<div className="character-card__wrapper" key={Math.random() * 100 + ind + "card"}> {
                <ul className="character-card__list">
                  <li className="listItem">{el.name}</li>
                  <li className="listItem"><img src={el.image} alt="ccc" /></li>
                  <li className="listItem">Height: {el.height}</li>
                  <li className="listItem">Mass: {el.mass}</li>
                  <li className="listItem">Hair color: {el.hair_color}</li>
                  <li className="listItem">Skin color: {el.skin_color}</li>
                  <li className="listItem">Eye color: {el.eye_color}</li>
                  <li className="listItem">birth year: {el.birth_year}</li>
                  <li className="listItem">gender: {el.gender}</li>
                  <li className="listItem"><a href={el.url} target={"_blank"} rel={"noreferrer"}>learn more</a></li>
                </ul>
              }
            </div>
          );
        })
      ) : (
        <div className="error">Error</div>
      )}
    </div>
  );
};
