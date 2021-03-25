import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import styles from "./App.module.css";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Home from "./containers/Pages/Home/Home";
import Landing from "./components/Pages/Landing/Landing";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <Switch>
      <Route path="/login">login</Route>
      <Route path="/register">register</Route>
      <Route>
        <div className={styles.App}>
          <Layout>
            <Switch>
              <Route path="/about-us">
                {/* <AboutUs></AboutUs> */}
                <Landing></Landing>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/">
                <Redirect to="/home"></Redirect>
              </Route>
            </Switch>
          </Layout>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
