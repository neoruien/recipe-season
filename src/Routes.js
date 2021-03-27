import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePage from './pages/HomePage';
import CreateRecipePage from './pages/CreateRecipePage';
import ReadRecipePage from './pages/ReadRecipePage';
import UpdateRecipePage from './pages/UpdateRecipePage';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Routes() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/create-recipe" component={CreateRecipePage} />
        <Route path="/read-recipe/:id" component={ReadRecipePage} />
        <Route path="/update-recipe/:id" component={UpdateRecipePage} />
      </Switch>
  </Router>
  );
}