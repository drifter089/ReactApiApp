import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Search from "./search";
import Wiki from "./wikisearch";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/wikisearch">
          <Wiki />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
