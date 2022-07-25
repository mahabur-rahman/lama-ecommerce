import React from "react";
// global style
import "./index.scss";
import { useSelector } from "react-redux";
// react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      {/* <Home /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/products/:category" component={ProductList} />

          <Route exact path="/product/:id" component={Product} />

          <Route exact path="/cart" component={Cart} />

          <Route path="/payment">
            <Pay />
          </Route>

          <Route exact path="/success">
            <SuccessPayment />
          </Route>

          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login />}
            <Login />
          </Route>

          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
