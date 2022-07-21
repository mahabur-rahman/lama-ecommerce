import React from "react";
// global style
import "./index.scss";
// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Pay from "./components/Pay";
import SuccessPayment from "./components/Success";

const App = () => {
  return (
    <>
      {/* <Home /> */}
      <Router>
        <Switch>
          <Route path="/pay" component={Pay} />
          <Route path="/success" component={SuccessPayment} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
