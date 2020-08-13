import React, { useContext } from "react";
import Home from "./components/main/Home";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateAds from "./components/ads/CreateAd";
import Navigation from "./components/nav/Navigation";
import s from "./App.module.css";
import SingleAd from "./components/ads/SingleAd";
import UpdateAd from "./components/ads/UpdateAd";
import Profile from "./components/auth/Profile";
import { AuthContext } from "./contexts/AuthContext";
import Footer from "./components/main/Footer";
import NoMatch from "./components/main/NoMatch";


function App() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <Router>
      <Navigation />
      <div className={s.wrapper}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            { isLoggedIn ? <Redirect to='/'/> : <Login />}
          </Route>
          <Route path="/register">
            { isLoggedIn ? <Redirect to='/'/> : <Register />}
          </Route>
          <Route path="/profile">
            { isLoggedIn ? <Profile /> : <Redirect to='/'/> }
          </Route>
          <Route path="/create-ad">
            { isLoggedIn ? <CreateAds /> : <Redirect to='/'/> }
          </Route>
          <Route exact path="/add/:id">
            <SingleAd />
          </Route>
          <Route path="/add/update/:id">
            { isLoggedIn ? <UpdateAd /> : <Redirect to='/'/> }
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
