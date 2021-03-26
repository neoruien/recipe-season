import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
export default function Home() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/create">Create Recipe</Link>
      </div>
    );
}