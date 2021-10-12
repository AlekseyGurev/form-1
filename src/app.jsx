import React from "react";
import { Route, Switch } from "react-router-dom";
import User from "./layouts/user";
import Create from "./layouts/create";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/create" component={Create} />
        <Route path="/" component={User} />
      </Switch>
    </div>
  );
};

export default App;
