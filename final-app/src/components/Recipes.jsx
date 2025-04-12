import React, { useState, useEffect } from "react";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const baseUrl = 'https://dummyjson.com/recipes';

    axios.get(baseUrl).then((response) => {
      setRecipes(response.data.recipes);
    });
  }, []);

  return (
    <div>
      <ol style={{ textAlign: 'left' }}>
        {recipes && recipes.map((recipe, index) => (
          <li key={index}>
            {recipe.name}
            <br />
          </li>
        ))}
      </ol>
    </div>
  );
  
}

export default Recipes;
