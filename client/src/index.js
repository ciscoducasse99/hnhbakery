import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";

const Loading = React.lazy(() => import("./components/Loading"));
// const Profile = React.lazy(() => import("./frontend/components/Profile"));

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <App />} />
          {/* <Route path="/signup" exact render={() => <Profile />} /> */}
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById("root")
);
