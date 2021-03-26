import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './HomePage';
import CreateRecipePage from './CreateRecipePage';
import EditRecipePage from './EditRecipePage';

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
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/create">
          <CreateRecipePage />
        </Route>
        <Route path="/edit">
          <EditRecipePage />
        </Route>
      </Switch>
    </Router>
  );
}