import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";

const Post = lazy(() => import("./post"));

function RootFn() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/*<Route path="/" exact component={WaitingComponent(Home)} />*/}
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={WaitingComponent(Post)} />
        </Switch>
      </div>
    </Router>
  );
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RootFn />
  </React.StrictMode>,
  rootElement
);
