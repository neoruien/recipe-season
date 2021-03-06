import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RecipeList from "../components/RecipeList";
  
export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/create-recipe">Create Recipe</Link>
      <RecipeList/>
    </div>
  );
}