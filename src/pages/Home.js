import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => getData(), []);

  const getData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setData(res.data.meals));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + type)
      .then((res) => setData(res.data.meals));
  };
  return (
    <div>
      <div className="header">
        <h1>React Cook</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Tapez le nom d'un aliment (en anglais)"
            onChange={(e) => setType(e.target.value)}
            on
          />
          <input type="submit" value="Recherche" className="button" />
        </form>
      </div>

      <ul className="content">
        {data ? (
          data.map((meals, index) => <Cards key={index} meals={meals} />)
        ) : (
          <h1 style={{ color: "red" }}>
            Erreur, Nous avons pas trouvé de recette correspondant à cette
            ingrédient: {type}
          </h1>
        )}
      </ul>
    </div>
  );
};

export default Home;
