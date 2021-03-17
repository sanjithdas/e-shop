/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-15 10:45:17
 * @modify date 2021-03-15 14:53:36
 * @desc [description]
 */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";

import Navigation from "./components/Navigation";
import Header from "./components/common/layout/Header";
import Footer from "./components/common/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
