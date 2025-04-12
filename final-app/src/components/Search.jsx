import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Form } from "react-bootstrap";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [matchedRecipe, setMatchedRecipe] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => setRecipes(res.data.recipes))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const index = parseInt(searchInput, 10) - 1;
    
    if (!isNaN(index) && index >= 0 && index < recipes.length) {
      setMatchedRecipe(recipes[index]);
    } else {
      setMatchedRecipe(null);
    }
  }, [searchInput, recipes]);

  return (
    <Container className="mt-4">
      <h2>Find a Recipe by Recipe Number</h2>

      <Form.Control
        type="text"
        placeholder="Enter recipe number (1-30)"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="mb-4 bg-secondary text-dark"
      />

      {matchedRecipe && (
        <Card>
        <Card.Img variant="top" src={matchedRecipe.image} 
        alt={matchedRecipe.name} style={{ width: 'auto', height: 'auto', maxWidth: '100%' }} />
          <Card.Body>
            <Card.Title>{matchedRecipe.name}</Card.Title>
            <Card.Text>
              <strong>Prep Time:</strong> {matchedRecipe.prepTimeMinutes} mins<br />
              <strong>Cook Time:</strong> {matchedRecipe.cookTimeMinutes} mins<br />
              <strong>Servings:</strong> {matchedRecipe.servings}<br />
              <strong>Calories:</strong> {matchedRecipe.caloriesPerServing}
            </Card.Text>
            <Card.Text>
              <strong>Instructions:</strong>
              <ol>
                {matchedRecipe.instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Search;
