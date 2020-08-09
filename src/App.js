import React from "react";
import Home from "./components/main/Home";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SignedOutLinks from "./components/nav/SignedOutLinks";
import CreateAds from "./components/ads/CreateAd";

function App() {
  return (
      <>
      <SignedOutLinks />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/create-ad">
          <CreateAds />
        </Route>
      </Switch>
    </>
  );
}

export default App;
