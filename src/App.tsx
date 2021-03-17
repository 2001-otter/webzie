import React from "react";
import { Route, Switch } from "react-router-dom";

import styles from "./App.module.css";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Landing from "./components/Pages/Landing/Landing";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <Switch>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/">
            <Landing></Landing>
          </Route>
        </Switch>
        <Landing></Landing>
      </Layout>
    </div>
  );
}

export default App;
