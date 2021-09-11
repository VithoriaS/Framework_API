import React from "react";
import Posts from "./Posts";
import Todos from "./Todos";
import Albuns from "./Albums";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/todos" component={Todos} />
      <Route path="/albums" component={Albuns} />
    </BrowserRouter>
  );
};

export default Routes;
