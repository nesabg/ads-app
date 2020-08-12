import React from "react";
import Home from "./components/main/Home";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateAds from "./components/ads/CreateAd";
import Navigation from "./components/nav/Navigation";
import s from './App.module.css'
import SingleAd from "./components/ads/SingleAd";
import UpdateAd from "./components/ads/UpdateAd";
import Profile from "./components/auth/Profile";

function App() {
  return (
      <div className={s.wrapper}>
      <Navigation />
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
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/create-ad">
          <CreateAds />
        </Route>
        <Route exact path="/add/:id">
          <SingleAd />
        </Route>
        <Route path="/add/update/:id">
          <UpdateAd />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
