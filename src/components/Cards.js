import React from "react";

const Cards = ({ meals }) => {
  return (
    <div className="card">
      <h1>{meals.strMeal}</h1>
      <h3>
        Origin : <strong>{meals.strArea}</strong>
      </h3>
      <img src={meals.strMealThumb} alt={meals.strMeal} />

      <p>{meals.strInstructions}</p>
    </div>
  );
};

export default Cards;
